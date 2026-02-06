import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#00c950] rounded flex items-center justify-center">
                  <span className="text-black font-bold text-lg">শি</span>
                </div>
                <span className="text-white font-bold text-xl">শিখো<span className="text-[#00c950]">করো</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              বাংলাদেশের সবচেয়ে বড় অনলাইন লার্নিং প্ল্যাটফর্ম। আমরা বিশ্বাস করি শিক্ষা সবার জন্য সহজলভ্য হওয়া উচিত।
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00c950] hover:text-black transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00c950] hover:text-black transition-all">
                <Youtube size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00c950] hover:text-black transition-all">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6">কোম্পানি</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#00c950] transition-colors">আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="hover:text-[#00c950] transition-colors">ক্যারিয়ার</a></li>
              <li><a href="#" className="hover:text-[#00c950] transition-colors">প্রাইভেসি পলিসি</a></li>
              <li><a href="#" className="hover:text-[#00c950] transition-colors">রিফান্ড পলিসি</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">কোর্সসমূহ</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#00c950] transition-colors">HSC প্রোগ্রাম</a></li>
              <li><a href="#" className="hover:text-[#00c950] transition-colors">SSC ক্র্যাশ কোর্স</a></li>
              <li><a href="#" className="hover:text-[#00c950] transition-colors">বিশ্ববিদ্যালয় ভর্তি</a></li>
              <li><a href="#" className="hover:text-[#00c950] transition-colors">প্রফেশনাল স্কিলস</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">যোগাযোগ</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#00c950] mt-1" />
                <span>+৮৮০ ১৬৭৮-৩৪৫৬৭৮ <br/> (সকাল ১০টা - রাত ১০টা)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#00c950]" />
                <span>support@shikhokoro.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#00c950] mt-1" />
                <span>১০/এ, ধানমন্ডি, ঢাকা-১২০৯</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© ২০২৫ শিখোকরো. সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
             <span>Design inspired by modern EdTech</span>
          </div>
        </div>
      </div>
    </footer>
  );
};