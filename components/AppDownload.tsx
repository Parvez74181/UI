import React from 'react';
import { Star } from 'lucide-react';

export const AppDownload: React.FC = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="bg-[#00c950] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_0_50px_rgba(0,201,80,0.2)]">
          {/* Pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-black space-y-6">
              <div className="inline-block bg-black/10 backdrop-blur px-4 py-1.5 rounded-full text-sm font-bold">
                 🎉 ৫ মিলিয়ন+ ডাউনলোড
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                হাতের মুঠোয় <br/>সম্পূর্ণ ক্লাসরুম
              </h2>
              <p className="text-lg font-medium opacity-80">
                যেকোনো সময়, যেকোনো স্থানে শিখতে ডাউনলোড করুন আমাদের মোবাইল অ্যাপ। অফলাইন ডাউনলোড, কুইজ এবং আরও অনেক কিছু।
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors shadow-lg">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors shadow-lg">
                   <div className="flex items-center gap-2">
                     <span className="text-2xl"></span>
                     <div className="text-left leading-tight">
                       <div className="text-[10px]">Download on the</div>
                       <div className="text-lg font-bold">App Store</div>
                     </div>
                   </div>
                </button>
              </div>

              <div className="flex items-center gap-4 pt-6">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-black text-black" />)}
                </div>
                <span className="font-bold text-xl">৪.৮/৫ রেটিং</span>
              </div>
            </div>

            <div className="relative flex justify-center">
              {/* Phone Mockup Representation */}
              <div className="relative w-64 h-[500px] bg-black rounded-[3rem] border-8 border-black shadow-2xl rotate-[-6deg] z-10">
                <div className="absolute top-0 w-32 h-6 bg-black left-1/2 -translate-x-1/2 rounded-b-xl z-20"></div>
                <div className="w-full h-full bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden relative">
                   {/* Fake App UI */}
                   <div className="p-4 space-y-4">
                      <div className="flex justify-between items-center text-white mt-8">
                        <div>
                          <p className="text-xs text-gray-400">শুভ সকাল,</p>
                          <p className="font-bold">তানভীর আহমেদ</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#00c950]"></div>
                      </div>
                      <div className="bg-[#fe9a00] p-4 rounded-xl text-black">
                         <p className="font-bold text-lg">আপনার প্রগ্রেস</p>
                         <div className="w-full bg-black/20 h-2 rounded-full mt-2">
                           <div className="bg-black w-[70%] h-full rounded-full"></div>
                         </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                         <div className="bg-white/10 p-3 rounded-lg h-24"></div>
                         <div className="bg-white/10 p-3 rounded-lg h-24"></div>
                         <div className="bg-white/10 p-3 rounded-lg h-24"></div>
                         <div className="bg-white/10 p-3 rounded-lg h-24"></div>
                      </div>
                   </div>
                   {/* Bottom Nav */}
                   <div className="absolute bottom-0 w-full bg-[#222] h-16 flex justify-around items-center px-4">
                      <div className="w-6 h-6 rounded bg-[#00c950]"></div>
                      <div className="w-6 h-6 rounded bg-gray-600"></div>
                      <div className="w-6 h-6 rounded bg-gray-600"></div>
                   </div>
                </div>
              </div>
              
              {/* Second Phone behind */}
              <div className="absolute top-8 right-8 w-64 h-[500px] bg-[#111] rounded-[3rem] border-8 border-[#222] shadow-xl rotate-[6deg] opacity-60 scale-95">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};