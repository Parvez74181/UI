import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">আপনার <span className="text-[#fe9a00]">প্ল্যান</span> বেছে নিন</h2>
          <p className="text-gray-400">বিনামূল্যে শুরু করুন, প্রয়োজনে আপগ্রেড করুন</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col">
            <div className="mb-6">
              <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full">বেসিক</span>
              <h3 className="text-3xl font-bold mt-4 text-white">ফ্রি</h3>
              <p className="text-gray-400 text-sm mt-2">সাধারণ প্রস্তুতির জন্য</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} className="text-[#00c950]" /> ডেইলি ফ্রি এক্সাম
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} className="text-[#00c950]" /> লিডারবোর্ড এক্সেস
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} className="text-[#00c950]" /> বেসিক রেজাল্ট এনালাইসিস
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <X size={18} /> কাস্টম এক্সাম
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <X size={18} /> প্রশ্নভান্ডার (ক, খ)
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <X size={18} /> গ্রুপ স্টাডি ফিচার
              </li>
            </ul>

            <Button variant="outline" className="w-full">একাউন্ট খুলুন</Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-b from-[#1a1a1a] to-black border border-[#fe9a00]/30 rounded-3xl p-8 flex flex-col relative overflow-hidden transform md:-translate-y-4 shadow-2xl shadow-[#fe9a00]/10">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#fe9a00] to-[#00c950]"></div>
            <div className="absolute top-4 right-4 animate-pulse">
               <span className="bg-[#fe9a00] text-black text-xs font-bold px-3 py-1 rounded-full">জনপ্রিয়</span>
            </div>

            <div className="mb-6">
              <span className="text-[#fe9a00] font-bold text-sm">প্রিমিয়াম</span>
              <div className="flex items-baseline mt-2">
                <h3 className="text-4xl font-bold text-white">৳১৯৯</h3>
                <span className="text-gray-400 ml-2">/মাস</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">পূর্ণাঙ্গ প্রস্তুতির জন্য সেরা পছন্দ</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white">
                <div className="bg-[#00c950] rounded-full p-0.5"><Check size={12} className="text-black" /></div> আনলিমিটেড কাস্টম এক্সাম
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-[#00c950] rounded-full p-0.5"><Check size={12} className="text-black" /></div> প্রশ্নভান্ডার (১ লক্ষ+ প্রশ্ন)
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-[#00c950] rounded-full p-0.5"><Check size={12} className="text-black" /></div> বিস্তারিত সল্যুশন ও এনালাইসিস
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-[#00c950] rounded-full p-0.5"><Check size={12} className="text-black" /></div> গ্রুপ স্টাডি ও চ্যালেঞ্জ
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-[#00c950] rounded-full p-0.5"><Check size={12} className="text-black" /></div> এক্সক্লুসিভ ব্যাজ ও রিওয়ার্ড
              </li>
            </ul>

            <Button variant="secondary" className="w-full font-bold">সাবস্ক্রাইব করুন</Button>
          </div>
        </div>
      </div>
    </section>
  );
};