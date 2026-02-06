import React from 'react';
import { Star, BarChart3, Users } from 'lucide-react';

export const TeacherAppDownload: React.FC = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="bg-[#fe9a00] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_0_50px_rgba(254,154,0,0.2)]">
          {/* Pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-black space-y-6">
              <div className="inline-block bg-black/10 backdrop-blur px-4 py-1.5 rounded-full text-sm font-bold">
                 👨‍🏫 শিক্ষকদের জন্য তৈরি
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                স্মার্ট টিচিং <br/>অ্যাসিস্ট্যান্ট
              </h2>
              <p className="text-lg font-medium opacity-80">
                ক্লাসের ফাঁকে বা জ্যামে বসে - যেকোনো সময় মোবাইল থেকেই প্রশ্ন তৈরি করুন। ব্যাচ ম্যানেজমেন্ট এবং স্টুডেন্ট ট্র্যাকিং এখন আরও সহজ।
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
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/t${i}/50/50`} className="w-8 h-8 rounded-full border-2 border-[#fe9a00]" alt="Teacher" />
                  ))}
                </div>
                <span className="font-bold text-lg">১০,০০০+ শিক্ষক ব্যবহার করছেন</span>
              </div>
            </div>

            <div className="relative flex justify-center">
              {/* Phone Mockup Representation */}
              <div className="relative w-64 h-[500px] bg-black rounded-[3rem] border-8 border-black shadow-2xl rotate-[-6deg] z-10">
                <div className="absolute top-0 w-32 h-6 bg-black left-1/2 -translate-x-1/2 rounded-b-xl z-20"></div>
                <div className="w-full h-full bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden relative">
                   {/* Fake Teacher App UI */}
                   <div className="p-4 space-y-4">
                      <div className="flex justify-between items-center text-white mt-8">
                        <div>
                          <p className="text-xs text-gray-400">হ্যালো স্যার,</p>
                          <p className="font-bold">আজকের ক্লাস শিডিউল</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#fe9a00]"></div>
                      </div>
                      
                      {/* Dashboard Cards */}
                      <div className="grid grid-cols-2 gap-3">
                         <div className="bg-[#fe9a00] p-3 rounded-xl text-black h-24 flex flex-col justify-between">
                            <Users size={20} />
                            <div>
                               <p className="text-2xl font-bold">৪৫০</p>
                               <p className="text-xs opacity-75">মোট শিক্ষার্থী</p>
                            </div>
                         </div>
                         <div className="bg-white/10 p-3 rounded-xl h-24 flex flex-col justify-between">
                            <BarChart3 size={20} className="text-[#fe9a00]"/>
                            <div>
                               <p className="text-2xl font-bold text-white">৮৫%</p>
                               <p className="text-xs text-gray-400">গড় উপস্থিতি</p>
                            </div>
                         </div>
                      </div>

                      <div className="bg-white/5 p-4 rounded-xl">
                         <div className="flex justify-between items-center mb-3">
                            <p className="text-sm font-bold text-white">রিসেন্ট এক্সাম ব্যাচ</p>
                            <span className="text-[10px] text-[#fe9a00]">See all</span>
                         </div>
                         <div className="space-y-3">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-xs">P</div>
                               <div>
                                  <p className="text-xs font-bold text-white">Physics 1st Paper</p>
                                  <p className="text-[10px] text-gray-500">HSC 2024 • 120 Students</p>
                               </div>
                            </div>
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-xs">M</div>
                               <div>
                                  <p className="text-xs font-bold text-white">Higher Math</p>
                                  <p className="text-[10px] text-gray-500">SSC 2025 • 85 Students</p>
                               </div>
                            </div>
                         </div>
                      </div>

                   </div>
                   {/* Bottom Nav */}
                   <div className="absolute bottom-0 w-full bg-[#222] h-16 flex justify-around items-center px-4">
                      <div className="w-6 h-6 rounded bg-[#fe9a00]"></div>
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