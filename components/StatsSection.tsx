import React from 'react';
import { WeeklyStat } from '../types';
import { Book, History, TrendingUp } from 'lucide-react';
import { Button } from './Button';

const WEEKLY_DATA: WeeklyStat[] = [
  { day: 'শনি', xp: 450 },
  { day: 'রবি', xp: 720 },
  { day: 'সোম', xp: 320 },
  { day: 'মঙ্গল', xp: 850 },
  { day: 'বুধ', xp: 600 },
  { day: 'বৃহঃ', xp: 950 },
  { day: 'শুক্র', xp: 1200 },
];

export const StatsSection: React.FC = () => {
  const maxXP = Math.max(...WEEKLY_DATA.map(d => d.xp));

  return (
    <section id="question-bank" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Weekly Report */}
          <div className="bg-[#111]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 relative overflow-hidden">
             <div className="flex items-center gap-3 mb-8">
               <div className="bg-[#00c950]/10 p-2 rounded-lg text-[#00c950]">
                 <TrendingUp size={24} />
               </div>
               <div>
                 <h3 className="text-2xl font-bold">সাপ্তাহিক পয়েন্ট</h3>
                 <p className="text-gray-400 text-sm">গত ৭ দিনের আপনার পারফরমেন্স</p>
               </div>
             </div>

             <div className="flex items-end justify-between gap-2 h-48 mt-8">
               {WEEKLY_DATA.map((data, idx) => (
                 <div key={idx} className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                    <div className="relative w-full flex justify-center">
                       {/* Tooltip */}
                       <div className="absolute -top-8 bg-white text-black text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          {data.xp} XP
                       </div>
                       <div 
                         className="w-full max-w-[30px] bg-[#00c950] rounded-t-md opacity-60 group-hover:opacity-100 transition-all duration-300 hover:shadow-[0_0_15px_#00c950]"
                         style={{ height: `${(data.xp / maxXP) * 160}px` }}
                       ></div>
                    </div>
                    <span className="text-gray-500 text-xs font-medium">{data.day}</span>
                 </div>
               ))}
             </div>
             
             <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                <div>
                   <p className="text-gray-400 text-sm">মোট অর্জন</p>
                   <p className="text-2xl font-bold text-white">৫,০৯০ XP</p>
                </div>
                <div className="text-right">
                   <p className="text-gray-400 text-sm">সাম্প্রতিক কার্যক্রম</p>
                   <p className="text-sm text-[#00c950] flex items-center gap-1 cursor-pointer hover:underline">
                      <History size={14} /> সাবস্ক্রিপশন হিস্ট্রি দেখুন
                   </p>
                </div>
             </div>
          </div>

          {/* Question Bank & Extras */}
          <div className="space-y-6">
            <div className="bg-[#111]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col justify-center h-full relative overflow-hidden group">
               <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-bl from-[#fe9a00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#fe9a00]/10 p-2 rounded-lg text-[#fe9a00]">
                      <Book size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">প্রশ্নভান্ডার</h3>
                 </div>
                 <p className="text-gray-400 mb-6">
                   বিগত ১০ বছরের বোর্ড প্রশ্ন এবং বিশ্ববিদ্যালয় ভর্তি পরীক্ষার ১ লক্ষ+ প্রশ্নের আর্কাইভ। 'ক' এবং 'খ' ইউনিটের স্পেশাল প্রশ্ন ব্যাংক।
                 </p>
                 <div className="flex gap-4">
                   <div className="bg-black/30 px-4 py-2 rounded-lg border border-white/5">
                     <p className="text-[#fe9a00] font-bold text-xl">১ লক্ষ+</p>
                     <p className="text-xs text-gray-500">মোট প্রশ্ন</p>
                   </div>
                   <div className="bg-black/30 px-4 py-2 rounded-lg border border-white/5">
                     <p className="text-[#00c950] font-bold text-xl">৮০০+</p>
                     <p className="text-xs text-gray-500">টপিক</p>
                   </div>
                 </div>
                 <div className="mt-8">
                   <Button variant="outline">ব্রাউজ করুন</Button>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};