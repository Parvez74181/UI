import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const TeacherFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "প্রশ্ন তৈরির খরচ কিভাবে পরিশোধ করবো?",
      a: "আপনি আপনার ওয়ালেটে যেকোনো সময় বিকাশ বা নগদের মাধ্যমে ব্যালেন্স এড করতে পারেন। প্রশ্ন ডাউনলোড করার সময় আপনার ওয়ালেট থেকে অটোমেটিক টাকা কাটা হবে।"
    },
    {
      q: "আমি কি শুধু MCQ কিনতে পারবো?",
      a: "হ্যাঁ, আমাদের 'Pay-as-you-go' সিস্টেমে আপনি যতটা প্রশ্ন সিলেক্ট করবেন, ঠিক ততটুকুর জন্যই পেমেন্ট করবেন। কোনো মিনিমাম প্যাকেজ কেনার বাধ্যবাধকতা নেই।"
    },
    {
      q: "ব্যাচ ম্যানেজমেন্ট ফিচারে কতজন ছাত্র এড করা যাবে?",
      a: "আমাদের প্ল্যাটফর্মে ব্যাচ বা ছাত্র সংখ্যার কোনো লিমিট নেই। আপনি আনলিমিটেড ব্যাচ এবং ছাত্র এড করতে পারবেন এবং তাদের এক্সাম নিতে পারবেন।"
    },
    {
      q: "কপিরাইট বা ওয়াটারমার্ক কি থাকবে?",
      a: "না, আপনি যখন প্রশ্ন ডাউনলোড করবেন তখন সেটি সম্পূর্ণ এডিটেবল ফরম্যাটে পাবেন। সেখানে আমাদের কোনো লোগো বা ওয়াটারমার্ক থাকবে না, আপনি নিজের কোচিংয়ের লোগো ব্যবহার করতে পারবেন।"
    },
    {
      q: "আমি কি নিজের লেখা প্রশ্ন এড করতে পারবো?",
      a: "অবশ্যই! আমাদের এডিটরে 'Custom Question' অপশন আছে। সেখানে আপনি নিজের প্রশ্ন টাইপ করে বা ছবি তুলে এড করতে পারবেন যা আপনার ব্যক্তিগত লাইব্রেরিতে সেভ থাকবে।"
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-[#080808]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">শিক্ষকদের <span className="text-[#fe9a00]">জিজ্ঞাসিত প্রশ্ন</span></h2>
          <p className="text-gray-400">আপনার মনে থাকা কিছু সাধারণ প্রশ্নের উত্তর</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-[#111] border-[#fe9a00]/30' : 'bg-[#111]/50 hover:bg-[#111]'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === idx ? 'text-[#fe9a00]' : 'text-white'}`}>{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="text-[#fe9a00]" /> : <ChevronDown className="text-gray-500" />}
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