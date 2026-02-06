import React from 'react';
import { Users, Swords, LogIn, Plus, Clock, Crown } from 'lucide-react';
import { Button } from './Button';

export const GroupStudyStudent: React.FC = () => {
  return (
    <section id="group-study" className="py-24 relative z-10 bg-[#080808]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content & Actions */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00c950]/10 border border-[#00c950]/20">
              <Users size={16} className="text-[#00c950]" />
              <span className="text-[#00c950] text-sm font-bold">লাইভ গ্রুপ স্টাডি</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              বন্ধুদের সাথে <br />
              <span className="text-[#00c950]">ব্যাটল</span> হবে জমজমাট
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              একা পড়তে ভালো লাগছে না? বন্ধুদের সাথে গ্রুপ তৈরি করুন, একে অপরকে চ্যালেঞ্জ দিন এবং রিয়েল-টাইম এক্সামের মাধ্যমে প্রস্তুতি যাচাই করুন।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Join Card */}
              <div className="bg-[#111] p-6 rounded-2xl border border-white/10 flex-1 hover:border-[#00c950] transition-colors group">
                 <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00c950] transition-colors">
                    <LogIn size={24} className="text-white group-hover:text-black" />
                 </div>
                 <h3 className="font-bold text-xl mb-2">গ্রুপে জয়েন করুন</h3>
                 <div className="flex gap-2">
                    <input type="text" placeholder="Enter Code" className="bg-black border border-white/20 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-[#00c950]" />
                    <Button size="sm" className="!px-3"><ArrowRightIcon /></Button>
                 </div>
              </div>

              {/* Create Card */}
              <div className="bg-[#111] p-6 rounded-2xl border border-white/10 flex-1 hover:border-[#00c950] transition-colors group cursor-pointer">
                 <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00c950] transition-colors">
                    <Plus size={24} className="text-white group-hover:text-black" />
                 </div>
                 <h3 className="font-bold text-xl mb-2">গ্রুপ তৈরি করুন</h3>
                 <p className="text-sm text-gray-500">আপনার নিজস্ব স্টাডি রুম তৈরি করে বন্ধুদের ইনভাইট করুন।</p>
              </div>
            </div>
          </div>

          {/* Right: Visual Mockup */}
          <div className="relative">
             {/* Battle Lobby Card */}
             <div className="bg-[#111] border border-white/10 rounded-3xl p-6 relative z-10 shadow-2xl">
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/5">
                   <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                         <Swords className="text-[#00c950]" /> Biology Chapter 3
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">Host: Tanvir Ahmed</p>
                   </div>
                   <div className="bg-[#00c950]/20 text-[#00c950] px-3 py-1 rounded text-xs font-bold flex items-center gap-1">
                      <Clock size={12} /> Starts in 02:30
                   </div>
                </div>

                {/* Participants Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                   {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-black/40 p-3 rounded-xl flex items-center gap-3 border border-white/5">
                         <div className="relative">
                            <img src={`https://picsum.photos/seed/p${i}/50/50`} className="w-10 h-10 rounded-full" alt="User" />
                            {i === 1 && <div className="absolute -top-2 -right-1"><Crown size={14} className="text-[#fe9a00] fill-[#fe9a00]" /></div>}
                         </div>
                         <div>
                            <p className="text-sm font-bold text-white">Player {i}</p>
                            <p className="text-[10px] text-gray-500">Lvl {10 + i}</p>
                         </div>
                      </div>
                   ))}
                </div>

                <Button className="w-full font-bold py-4 text-lg animate-pulse">
                   Ready to Fight
                </Button>
             </div>

             {/* Decor Elements */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00c950]/20 rounded-full blur-[50px]"></div>
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00c950]/10 rounded-full blur-[50px]"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);