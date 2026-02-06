import React, { useState } from 'react';
import { BookOpen, Layers, CheckSquare, Download, Calculator, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const TeacherEditor: React.FC = () => {
  const [mcqCount, setMcqCount] = useState(20);
  const [cqCount, setCqCount] = useState(5);
  
  const mcqRate = 0.50; // 50 paisa per MCQ
  const cqRate = 2.00;  // 2 Taka per CQ
  const totalCost = (mcqCount * mcqRate) + (cqCount * cqRate);

  const steps = [
    {
      icon: <Layers size={32} className="text-[#fe9a00]" />,
      title: "শ্রেণী ও বিষয় নির্বাচন",
      desc: "৯ম-১০ম বা এইচএসসি লেভেল সিলেক্ট করুন এবং সাবজেক্ট বেছে নিন।"
    },
    {
      icon: <BookOpen size={32} className="text-[#00c950]" />,
      title: "অধ্যায় ও টপিক",
      desc: "নির্দিষ্ট অধ্যায় বা একাধিক টপিক সিলেক্ট করে প্রশ্নের পরিধি নির্ধারণ করুন।"
    },
    {
      icon: <CheckSquare size={32} className="text-[#fe9a00]" />,
      title: "প্রশ্ন বাছাই",
      desc: "আমাদের বিশাল ভান্ডার থেকে আপনার পছন্দের MCQ এবং CQ সিলেক্ট করুন।"
    },
    {
      icon: <Download size={32} className="text-[#00c950]" />,
      title: "ডাউনলোড ও পেমেন্ট",
      desc: "ফাইল নেম দিয়ে সেভ করুন এবং শুধুমাত্র সিলেক্ট করা প্রশ্নের জন্য পে করুন।"
    }
  ];

  return (
    <section id="editor" className="py-24 relative z-10 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">স্মার্ট <span className="text-[#fe9a00]">প্রশ্ন মেকার</span></h2>
          <p className="text-gray-400">মাত্র ৪টি সহজ ধাপে আপনার প্রশ্নপত্র তৈরি করুন</p>
        </div>

        {/* Steps Grid (Block Style) */}
        <div className="relative mb-20">
           {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffffff10] to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 group cursor-pointer">
                <div className="bg-[#111] border border-white/10 p-8 rounded-2xl hover:border-[#fe9a00] transition-all duration-300 hover:-translate-y-2 text-center h-full hover:shadow-[0_0_20px_rgba(254,154,0,0.15)]">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform ring-1 ring-white/10 group-hover:ring-[#fe9a00]/50">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#fe9a00] rounded-full flex items-center justify-center border border-black text-xs font-bold text-black shadow-lg">
                    {idx + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Cost Calculator */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
             {/* Background blob */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#fe9a00]/10 rounded-full blur-[80px]"></div>
             
             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                
                {/* Inputs */}
                <div className="space-y-6">
                   <div className="flex items-center gap-3 mb-2">
                      <Calculator className="text-[#fe9a00]" />
                      <h3 className="text-2xl font-bold">খরচ ক্যালকুলেটর</h3>
                   </div>
                   <p className="text-gray-400 text-sm mb-6">আপনার কতগুলো প্রশ্ন প্রয়োজন? স্লাইডার নড়িয়ে খরচ দেখুন।</p>
                   
                   {/* MCQ Slider */}
                   <div className="space-y-3">
                      <div className="flex justify-between">
                         <label className="font-bold text-gray-300">MCQ সংখ্যা</label>
                         <span className="text-[#fe9a00] font-mono">{mcqCount}টি</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" max="100" step="5"
                        value={mcqCount}
                        onChange={(e) => setMcqCount(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#fe9a00]"
                      />
                      <p className="text-xs text-gray-500 text-right">প্রতিটি ৳০.৫০</p>
                   </div>

                   {/* CQ Slider */}
                   <div className="space-y-3">
                      <div className="flex justify-between">
                         <label className="font-bold text-gray-300">সৃজনশীল (CQ) সংখ্যা</label>
                         <span className="text-[#fe9a00] font-mono">{cqCount}টি</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" max="20" step="1"
                        value={cqCount}
                        onChange={(e) => setCqCount(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#fe9a00]"
                      />
                      <p className="text-xs text-gray-500 text-right">প্রতিটি ৳২.০০</p>
                   </div>
                </div>

                {/* Total Display */}
                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 text-center space-y-4">
                   <p className="text-gray-400 font-medium">আপনার আনুমানিক খরচ</p>
                   <div className="text-5xl font-bold text-white tracking-tight">
                      ৳{totalCost.toFixed(2)}
                   </div>
                   <div className="text-xs text-[#00c950] bg-[#00c950]/10 inline-block px-2 py-1 rounded">
                      কোনো মাসিক চার্জ নেই
                   </div>
                   
                   <div className="pt-6">
                      <Button variant="secondary" className="w-full justify-center font-bold text-lg h-12">
                         প্রশ্ন তৈরি শুরু করুন <ArrowRight className="ml-2 w-5 h-5"/>
                      </Button>
                      <p className="text-gray-500 text-xs mt-3">
                         আপনার ওয়ালেট থেকে টাকা কাটা হবে অথবা পেমেন্ট গেটওয়ে ব্যবহার করুন।
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};