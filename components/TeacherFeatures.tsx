import React from 'react';
import { Database, MousePointerClick, Sliders, ShieldCheck } from 'lucide-react';

export const TeacherFeatures: React.FC = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-[#fe9a00]" />,
      title: "বিশাল প্রশ্ন ব্যাংক",
      desc: "১ লক্ষ+ প্রশ্ন থেকে বেছে নিন আপনার পছন্দের প্রশ্ন। বোর্ড প্রশ্ন, ক্যাডেট কলেজ এবং শীর্ষস্থানীয় স্কুলের প্রশ্ন।"
    },
    {
      icon: <MousePointerClick className="w-8 h-8 text-[#00c950]" />,
      title: "ড্র্যাগ এন্ড ড্রপ",
      desc: "খুব সহজেই ক্লিক করে প্রশ্ন সিলেক্ট করুন এবং ড্র্যাগ করে নিজের মতো সাজিয়ে নিন।"
    },
    {
      icon: <Sliders className="w-8 h-8 text-[#fe9a00]" />,
      title: "অটো ফরম্যাটিং",
      desc: "আপনাকে কষ্ট করে ওয়ার্ড ফাইলে ডিজাইন করতে হবে না। আমাদের অটোম্যাটিক সিস্টেম সুন্দর করে প্রশ্ন সাজিয়ে দিবে।"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00c950]" />,
      title: "সুরক্ষিত স্টোরেজ",
      desc: "আপনার তৈরি করা সকল প্রশ্নপত্র ক্লাউডে সুরক্ষিত থাকবে। যেকোনো সময় যেকোনো ডিভাইস থেকে এক্সেস করুন।"
    }
  ];

  return (
    <section id="features" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">কেন <span className="text-[#fe9a00]">শিখোকরো</span> টিচার প্যানেল সেরা?</h2>
          <p className="text-gray-400 text-lg">
            শিক্ষকদের সময় বাঁচানো এবং আধুনিক প্রযুক্তির ছোঁয়া দেওয়াই আমাদের লক্ষ্য।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#151515] transition-all duration-300 group">
              <div className="mb-4 bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};