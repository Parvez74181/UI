import React from 'react';
import { Button } from './Button';
import { ArrowRight, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Container */}
      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#fe9a00] animate-pulse"></span>
            <span className="text-[#fe9a00] text-sm font-medium">লাইভ এক্সাম চলছে</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
            যাচাই করুন <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c950] to-[#80ffb0]">নিজের প্রস্তুতি</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            অধ্যায় ভিত্তিক MCQ, CQ এবং মডেল টেস্ট দিয়ে নিজেকে প্রস্তুত করুন। প্রতি এক্সামে জিতুন XP এবং টপ করুন আমাদের <span className="text-white font-semibold">মাসিক লিডারবোর্ডে</span>।
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" className="group">
              ফ্রি এক্সাম দিন <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-black/20 backdrop-blur-sm">
              <Target className="mr-2 w-5 h-5" /> কাস্টম এক্সাম
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-white/10">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i + 150}/100/100`} 
                  alt="Student" 
                  className="w-10 h-10 rounded-full border-2 border-black object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-white font-bold text-lg">৫০,০০০+</p>
              <p className="text-gray-400 text-sm">শিক্ষার্থী নিয়মিত এক্সাম দিচ্ছে</p>
            </div>
          </div>
        </div>

        {/* Visual Element - Exam UI Mockup */}
        <div className="relative hidden lg:block">
          <div className="relative z-10 bg-gradient-to-br from-gray-900/90 to-black/90 p-4 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl transform rotate-[-3deg] hover:rotate-0 transition-all duration-500">
             {/* Mock UI Card */}
             <div className="bg-[#111] rounded-2xl overflow-hidden min-h-[400px] flex flex-col">
                {/* Header */}
                <div className="bg-[#1a1a1a] p-4 border-b border-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="text-sm font-bold text-white">পদার্থবিজ্ঞান - ১ম পত্র</span>
                  </div>
                  <div className="bg-[#fe9a00]/20 text-[#fe9a00] px-3 py-1 rounded text-xs font-bold">
                    সময়: ১৯:৩০ মি.
                  </div>
                </div>
                
                {/* Question Body */}
                <div className="p-6 flex-1">
                  <div className="flex justify-between mb-4">
                     <span className="text-xs text-gray-500">প্রশ্ন ৫/২৫</span>
                     <span className="text-xs text-[#00c950]">+৪ XP</span>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-6">
                    একটি প্রক্ষেপকের সর্বোচ্চ উচ্চতায় বেগ কত হবে যদি নিক্ষেপণ কোণ 90° হয়?
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border border-gray-500"></div>
                      <span className="text-gray-300">0 m/s</span>
                    </div>
                    <div className="p-3 rounded-lg border border-[#00c950] bg-[#00c950]/10 cursor-pointer flex items-center gap-3 relative">
                      <div className="w-5 h-5 rounded-full border-4 border-[#00c950]"></div>
                      <span className="text-white">সর্বোচ্চ বেগ</span>
                      <div className="absolute right-3 text-[#00c950] text-xs font-bold">সঠিক উত্তর</div>
                    </div>
                    <div className="p-3 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border border-gray-500"></div>
                      <span className="text-gray-300">অসীম</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-[#1a1a1a] border-t border-white/5 flex justify-between">
                  <button className="text-gray-500 text-sm">পূর্ববর্তী</button>
                  <button className="bg-[#00c950] text-black px-4 py-1.5 rounded font-bold text-sm">পরবর্তী</button>
                </div>
             </div>
          </div>

          {/* Floating badges */}
          <div className="absolute top-10 -left-10 bg-[#1a1a1a]/90 backdrop-blur p-4 rounded-xl border border-white/5 shadow-xl animate-bounce duration-[3000ms]">
            <div className="flex items-center gap-3">
              <div className="bg-[#00c950] p-2 rounded-lg text-black">
                <Target size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">লাইভ সল্যুশন</p>
                <p className="font-bold text-white">তাৎক্ষণিক</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};