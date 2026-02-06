import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "আরিফ হাসান",
      role: "HSC 2024 পরীক্ষার্থী",
      text: "শিখোকরো অ্যাপের কাস্টম এক্সাম ফিচারটি আমার বায়োলজি প্রস্তুতিতে অনেক সাহায্য করেছে। এখন আমি নিজের দুর্বল টপিকগুলো সহজেই আইডেন্টিফাই করতে পারি।",
      image: "https://picsum.photos/seed/t1/100/100"
    },
    {
      name: "নুসরাত জাহান",
      role: "মেডিকেল ভর্তিচ্ছু",
      text: "প্রশ্নভান্ডারের কালেকশন অসাধারণ। বিগত বছরের প্রশ্নগুলো সলভ করার জন্য এর চেয়ে ভালো প্ল্যাটফর্ম আর দেখিনি। লাইভ লিডারবোর্ড আমাকে মোটিভেট করে।",
      image: "https://picsum.photos/seed/t2/100/100"
    },
    {
      name: "শাফিন আহমেদ",
      role: "SSC 2025 ব্যাচ",
      text: "বন্ধুদের সাথে গ্রুপ স্টাডি ফিচারটি দারুণ! আমরা এখন একসাথে এক্সাম দেই এবং কম্পিটিশন করি। পড়াশোনা এখন আর বোরিং লাগে না।",
      image: "https://picsum.photos/seed/t3/100/100"
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">শিক্ষার্থীরা <span className="text-[#00c950]">যা বলছে</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-[#111]/60 backdrop-blur border border-white/5 p-8 rounded-2xl hover:bg-[#111] transition-colors relative">
              <Quote className="absolute top-6 right-6 text-white/10 w-10 h-10" />
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border border-[#00c950]/30" />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-xs text-[#00c950]">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};