import React from 'react';
import { Settings, Users, Trophy, BookOpen } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Settings className="w-8 h-8 text-[#00c950]" />,
      title: "কাস্টম এক্সাম",
      desc: "বিষয়, অধ্যায় এবং টপিক নির্বাচন করে নিজের প্রয়োজন মতো প্রশ্নপত্র তৈরি করে পরীক্ষা দিন।"
    },
    {
      icon: <Users className="w-8 h-8 text-[#fe9a00]" />,
      title: "গ্রুপ স্টাডি",
      desc: "বন্ধুদের সাথে গ্রুপ খুলুন, একসাথে এক্সাম দিন এবং রিয়েল-টাইম রেজাল্ট দেখুন।"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#00c950]" />,
      title: "লাইভ সল্যুশন",
      desc: "এক্সাম শেষ করার সাথে সাথেই প্রতিটি প্রশ্নের ব্যাখ্যাসহ সমাধান ও এনালাইসিস।"
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#fe9a00]" />,
      title: "মাসিক লিডারবোর্ড",
      desc: "সঠিক উত্তরের জন্য XP অর্জন করুন এবং প্রতি মাসে টপ লিস্টে নিজের নাম দেখুন।"
    }
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">প্রস্তুতির নতুন <span className="text-[#00c950]">ডাইমেনশন</span></h2>
          <p className="text-gray-400 text-lg">
            শুধু পড়ালেখা নয়, নিজেকে যাচাই করার সেরা মাধ্যম। ফ্রি এবং প্রিমিয়াম এক্সাম ফিচারের সমন্বয়ে গড়ে তুলুন নিজেকে।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#111]/80 backdrop-blur-md border border-white/5 hover:border-[#00c950]/30 hover:bg-[#151515]/90 transition-all duration-300 group">
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