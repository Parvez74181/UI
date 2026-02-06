import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy, BookOpen, PenTool, GraduationCap, Wallet } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  userType: 'student' | 'teacher';
  onToggleUserType: (type: 'student' | 'teacher') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ userType, onToggleUserType }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = userType === 'student' ? [
    { name: 'হোম', href: '#' },
    { name: 'এক্সাম', href: '#exams' },
    { name: 'লিডারবোর্ড', href: '#leaderboard', icon: <Trophy size={14} className="text-[#fe9a00]" /> },
    { name: 'প্রশ্নভান্ডার', href: '#question-bank' },
    { name: 'সাবস্ক্রিপশন', href: '#pricing' },
  ] : [
    { name: 'ড্যাশবোর্ড', href: '#' },
    { name: 'প্রশ্ন তৈরি', href: '#editor' },
    { name: 'ফিচার', href: '#features' },
    { name: 'ওয়ালেট', href: '#wallet', icon: <Wallet size={14} className="text-[#fe9a00]" /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${userType === 'teacher' ? 'bg-[#fe9a00]' : 'bg-[#00c950]'}`}>
              <span className="text-black font-bold text-xl">শি</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl tracking-tight leading-none">
                শিখো<span className={userType === 'teacher' ? 'text-[#fe9a00]' : 'text-[#00c950]'}>করো</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                {userType === 'teacher' ? 'For Teachers' : 'Learning Platform'}
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors font-medium flex items-center gap-1 hover:underline decoration-2 underline-offset-4 decoration-[#00c950]"
              >
                {link.name} {link.icon}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => onToggleUserType(userType === 'student' ? 'teacher' : 'student')}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/5"
            >
              {userType === 'student' ? <PenTool size={14} /> : <GraduationCap size={14} />}
              {userType === 'student' ? 'শিক্ষক প্যানেল' : 'শিক্ষার্থী প্যানেল'}
            </button>
            <Button variant="ghost" size="sm">লগ ইন</Button>
            <Button variant={userType === 'teacher' ? 'secondary' : 'primary'} size="sm">
              {userType === 'teacher' ? 'ব্যালেন্স যুক্ত করুন' : 'ফ্রি এক্সাম দিন'}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 absolute w-full h-screen">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-white hover:bg-white/10 rounded-md text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3 border-t border-white/10 mt-4">
               <button 
                  onClick={() => {
                    onToggleUserType(userType === 'student' ? 'teacher' : 'student');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-3 rounded-lg border border-white/20 text-white flex items-center justify-center gap-2 font-bold"
                >
                  {userType === 'student' ? <PenTool size={18} /> : <GraduationCap size={18} />}
                  {userType === 'student' ? 'Switch to Teacher' : 'Switch to Student'}
               </button>
              <Button variant="ghost" className="w-full justify-center">লগ ইন</Button>
              <Button variant={userType === 'teacher' ? 'secondary' : 'primary'} className="w-full justify-center">
                {userType === 'teacher' ? 'ব্যালেন্স যুক্ত করুন' : 'ফ্রি এক্সাম দিন'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};