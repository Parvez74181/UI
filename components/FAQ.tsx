import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "আমি কি ফ্রিতে এক্সাম দিতে পারবো?",
      a: "হ্যাঁ, আমাদের প্রতিদিনের প্রি-সেট এক্সামগুলো সবার জন্য ফ্রি। তবে কাস্টম এক্সাম এবং প্রশ্নভান্ডার এক্সেস করতে সাবস্ক্রিপশন প্রয়োজন।"
    },
    {
      q: "XP কিভাবে কাজ করে?",
      a: "প্রতিটি সঠিক উত্তরের জন্য আপনি নির্দিষ্ট পরিমাণ XP পাবেন। কঠিন প্রশ্নের জন্য বেশি XP। এই XP-এর ভিত্তিতেই মাসিক লিডারবোর্ড তৈরি হয়।"
    },
    {
      q: "সাবস্ক্রিপশন কি মাসিক নাকি বাৎসরিক?",
      a: "আমাদের মাসিক, ৬ মাস এবং ১ বছরের প্যাকেজ রয়েছে। আপনি আপনার সুবিধামতো যেকোনো একটি বেছে নিতে পারেন।"
    },
    {
      q: "গ্রুপ স্টাডি ফিচারটি কিভাবে ব্যবহার করবো?",
      a: "প্রিমিয়াম ইউজাররা গ্রুপ তৈরি করতে পারেন। বন্ধুদের ইনভাইট লিংক পাঠিয়ে গ্রুপে যুক্ত করুন এবং একসাথে লাইভ এক্সাম দিন।"
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">সচরাচর <span className="text-[#fe9a00]">জিজ্ঞাসিত প্রশ্ন</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-[#111] border-[#00c950]/30' : 'bg-[#111]/50 hover:bg-[#111]'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <span className="font-bold text-lg text-white">{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="text-[#00c950]" /> : <ChevronDown className="text-gray-500" />}
              </button>
              
              <div className={`px-5 pb-5 text-gray-400 leading-relaxed ${openIndex === idx ? 'block' : 'hidden'}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};