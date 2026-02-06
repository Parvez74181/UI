import React from 'react';
import { Exam } from '../types';
import { Clock, Users, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

const PRESET_EXAMS: Exam[] = [
  {
    id: 1,
    title: "Daily Biology Blast - কোষ ও এর গঠন",
    subject: "জীববিজ্ঞান ১ম",
    totalMarks: 25,
    time: "২০ মি.",
    type: "free",
    participants: 1240,
    tags: ["HSC 25"]
  },
  {
    id: 2,
    title: "Weekly Model Test - পদার্থবিজ্ঞান",
    subject: "পদার্থবিজ্ঞান",
    totalMarks: 50,
    time: "৪০ মি.",
    type: "free",
    participants: 850,
    tags: ["Admission"]
  },
  {
    id: 3,
    title: "Chemistry MCQ Challenge",
    subject: "রসায়ন",
    totalMarks: 20,
    time: "১৫ মি.",
    type: "free",
    participants: 2100,
    tags: ["SSC"]
  }
];

export const ExamShowcase: React.FC = () => {
  return (
    <section id="exams" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left: Preset Free Exams */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex justify-between items-end">
               <div>
                  <h2 className="text-3xl font-bold mb-2">ফ্রি <span className="text-[#00c950]">লাইভ এক্সাম</span></h2>
                  <p className="text-gray-400">এডমিন প্যানেল থেকে সেট করা আজকের এক্সামগুলো</p>
               </div>
               <Button variant="ghost" className="hidden sm:flex">সবগুলো দেখুন <ArrowRight size={16} className="ml-2"/></Button>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {PRESET_EXAMS.map((exam) => (
                <div key={exam.id} className="bg-[#111]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-[#00c950] transition-colors group relative overflow-hidden">
                   <div className="absolute top-0 right-0 bg-[#00c950] text-black text-xs font-bold px-3 py-1 rounded-bl-xl">FREE</div>
                   
                   <div className="flex gap-2 mb-3">
                      {exam.tags?.map(tag => (
                        <span key={tag} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">{tag}</span>
                      ))}
                   </div>
                   
                   <h3 className="text-xl font-bold mb-2 group-hover:text-[#00c950] transition-colors">{exam.title}</h3>
                   <p className="text-gray-400 text-sm mb-4">{exam.subject}</p>
                   
                   <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-1"><Clock size={14}/> {exam.time}</div>
                      <div className="flex items-center gap-1"><Users size={14}/> {exam.participants} জন দিচ্ছে</div>
                   </div>
                   
                   <Button variant="outline" className="w-full">এক্সাম শুরু করুন</Button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Custom Exam CTA (Premium) */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-[#1a1a1a]/90 to-black/90 backdrop-blur rounded-3xl p-8 border border-[#fe9a00]/20 h-full relative overflow-hidden text-center lg:text-left flex flex-col justify-center shadow-lg">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Lock size={120} className="text-[#fe9a00]" />
               </div>
               
               <div className="relative z-10">
                 <div className="w-12 h-12 bg-[#fe9a00]/20 rounded-xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                    <SettingsIcon />
                 </div>
                 
                 <h3 className="text-3xl font-bold mb-4">কাস্টম <span className="text-[#fe9a00]">এক্সাম</span></h3>
                 <p className="text-gray-400 mb-8">
                   নিজের দুর্বল টপিকগুলো ঝালিয়ে নিতে সাবজেক্ট, চ্যাপ্টার এবং টপিক সিলেক্ট করে আনলিমিটেড এক্সাম দিন।
                 </p>

                 <ul className="space-y-4 mb-8 text-left">
                   <li className="flex items-center gap-3 text-gray-300">
                     <CheckCircle2 size={18} className="text-[#fe9a00]" /> বিষয় ভিত্তিক প্রস্তুতি
                   </li>
                   <li className="flex items-center gap-3 text-gray-300">
                     <CheckCircle2 size={18} className="text-[#fe9a00]" /> অধ্যায় ও টপিক সিলেকশন
                   </li>
                   <li className="flex items-center gap-3 text-gray-300">
                     <CheckCircle2 size={18} className="text-[#fe9a00]" /> প্রশ্নভান্ডার ক,খ এক্সেস
                   </li>
                 </ul>

                 <Button variant="secondary" className="w-full font-bold">
                   সাবস্ক্রিপশন কিনুন
                 </Button>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fe9a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);