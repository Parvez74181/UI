import React from 'react';
import { UserPlus, BookOpen, PenTool, TrendingUp } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus size={32} className="text-[#00c950]" />,
      title: "অ্যাকাউন্ট খুলুন",
      desc: "মাত্র ১০ সেকেন্ডে রেজিস্ট্রেশন করে আপনার প্রোফাইল তৈরি করুন।"
    },
    {
      icon: <BookOpen size={32} className="text-[#fe9a00]" />,
      title: "বিষয় নির্বাচন",
      desc: "আপনার পছন্দের সাবজেক্ট এবং চ্যাপ্টার সিলেক্ট করে টার্গেট ঠিক করুন।"
    },
    {
      icon: <PenTool size={32} className="text-[#00c950]" />,
      title: "এক্সাম দিন",
      desc: "লাইভ এক্সাম বা কাস্টম প্র্যাকটিস টেস্টে অংশগ্রহণ করুন।"
    },
    {
      icon: <TrendingUp size={32} className="text-[#fe9a00]" />,
      title: "রেজাল্ট ও এনালাইসিস",
      desc: "ইনস্ট্যান্ট রেজাল্ট দেখুন এবং আপনার ভুলগুলো শুধরে নিন।"
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">কিভাবে <span className="text-[#00c950]">শুরু করবেন?</span></h2>
          <p className="text-gray-400">খুব সহজেই নিজেকে প্রস্তুত করার ৪টি ধাপ</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffffff20] to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 group">
                <div className="bg-[#111] border border-white/10 p-6 rounded-2xl hover:border-[#00c950] transition-all duration-300 hover:-translate-y-2 text-center h-full bg-opacity-80 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform ring-1 ring-white/10">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#222] rounded-full flex items-center justify-center border border-white/10 text-xs font-bold text-gray-500">
                    {idx + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};