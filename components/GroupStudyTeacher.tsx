import React from 'react';
import { Users, Calendar, PlusCircle, BarChart, ExternalLink } from 'lucide-react';
import { Button } from './Button';

export const GroupStudyTeacher: React.FC = () => {
  const batches = [
    {
      name: "HSC Physics 2024 - Batch A",
      students: 124,
      nextExam: "Today, 4:00 PM",
      topic: "Vector & Dynamics",
      status: "Active"
    },
    {
      name: "SSC Math Model Test - Batch B",
      students: 85,
      nextExam: "Tomorrow, 10:00 AM",
      topic: "Trigonometry",
      status: "Scheduled"
    }
  ];

  return (
    <section id="teacher-groups" className="py-24 relative z-10 bg-[#080808]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
           {/* Left: Mockup UI */}
           <div className="order-2 lg:order-1 relative">
             <div className="bg-[#111] border border-white/10 rounded-3xl p-6 relative z-10 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="text-xl font-bold text-white">আপনার ব্যাচসমূহ</h3>
                   <Button variant="secondary" size="sm" className="!py-1.5"><PlusCircle size={16} className="mr-1"/> নতুন ব্যাচ</Button>
                </div>

                <div className="space-y-4">
                   {batches.map((batch, idx) => (
                      <div key={idx} className="bg-black/40 p-5 rounded-xl border border-white/5 hover:border-[#fe9a00]/50 transition-colors group">
                         <div className="flex justify-between items-start mb-3">
                            <div>
                               <h4 className="font-bold text-white text-lg group-hover:text-[#fe9a00] transition-colors">{batch.name}</h4>
                               <p className="text-xs text-gray-500 mt-1 flex items-center gap-1"><Users size={12}/> {batch.students} Students</p>
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded ${batch.status === 'Active' ? 'bg-[#00c950]/20 text-[#00c950]' : 'bg-white/10 text-gray-400'}`}>
                               {batch.status}
                            </span>
                         </div>
                         
                         <div className="bg-white/5 p-3 rounded-lg flex justify-between items-center">
                            <div>
                               <p className="text-[10px] text-gray-400 uppercase font-bold">Upcoming Exam</p>
                               <p className="text-sm font-medium text-white">{batch.topic}</p>
                               <p className="text-xs text-[#fe9a00] flex items-center gap-1 mt-0.5"><Calendar size={10}/> {batch.nextExam}</p>
                            </div>
                            <Button variant="outline" size="sm" className="!text-xs !px-3">Manage</Button>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
             
             {/* Decor */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#fe9a00]/5 rounded-full blur-[80px] -z-10"></div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fe9a00]/10 border border-[#fe9a00]/20">
              <Users size={16} className="text-[#fe9a00]" />
              <span className="text-[#fe9a00] text-sm font-bold">ব্যাচ ম্যানেজমেন্ট</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              স্টুডেন্টদের জন্য <br />
              <span className="text-[#fe9a00]">প্রাইভেট ক্লাসরুম</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              শুধুমাত্র আপনার কোচিং বা স্কুলের ছাত্রদের জন্য আলাদা ব্যাচ তৈরি করুন। নির্দিষ্ট সময়ে লাইভ এক্সাম শিডিউল করুন এবং অটোমেটেড লিডারবোর্ডের মাধ্যমে রেজাল্ট দিন।
            </p>

            <ul className="space-y-4">
               <li className="flex items-start gap-3">
                  <div className="mt-1 bg-[#fe9a00]/20 p-1 rounded-full"><PlusCircle size={16} className="text-[#fe9a00]"/></div>
                  <div>
                     <h4 className="font-bold text-white">আনলিমিটেড ব্যাচ</h4>
                     <p className="text-sm text-gray-500">আপনার প্রয়োজন অনুযায়ী যত খুশি ব্যাচ বা গ্রুপ তৈরি করুন।</p>
                  </div>
               </li>
               <li className="flex items-start gap-3">
                  <div className="mt-1 bg-[#fe9a00]/20 p-1 rounded-full"><BarChart size={16} className="text-[#fe9a00]"/></div>
                  <div>
                     <h4 className="font-bold text-white">লাইভ ট্র্যাকিং</h4>
                     <p className="text-sm text-gray-500">এক্সাম চলাকালীন সময়ে কে কেমন করছে তা লাইভ মনিটর করুন।</p>
                  </div>
               </li>
               <li className="flex items-start gap-3">
                  <div className="mt-1 bg-[#fe9a00]/20 p-1 rounded-full"><ExternalLink size={16} className="text-[#fe9a00]"/></div>
                  <div>
                     <h4 className="font-bold text-white">সহজ জয়েনিং</h4>
                     <p className="text-sm text-gray-500">স্টুডেন্টরা একটি কোড বা লিংকের মাধ্যমে সহজেই ব্যাচে জয়েন করতে পারবে।</p>
                  </div>
               </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};