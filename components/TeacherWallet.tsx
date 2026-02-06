import React from 'react';
import { CreditCard, Zap, CheckCircle2, Wallet, Plus } from 'lucide-react';
import { Button } from './Button';

export const TeacherWallet: React.FC = () => {
  return (
    <section id="wallet" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pay As You <span className="text-[#fe9a00]">Go</span></h2>
          <p className="text-gray-400">কোনো মাসিক সাবস্ক্রিপশন নেই। যতটুকু ব্যবহার করবেন, ততটুকুই পেমেন্ট।</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Rate Card */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="text-[#fe9a00]" /> প্রশ্নের রেট চার্ট
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
               {/* CQ Card */}
               <div className="bg-[#111] border border-white/10 p-6 rounded-2xl hover:border-[#fe9a00] transition-colors">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                        <h4 className="font-bold text-lg">সৃজনশীল প্রশ্ন</h4>
                        <p className="text-gray-400 text-xs">(Creative Question)</p>
                     </div>
                     <span className="bg-[#fe9a00]/20 text-[#fe9a00] px-3 py-1 rounded text-xs font-bold">CQ</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">৳২.০০ <span className="text-sm text-gray-500 font-normal">/প্রতিটি</span></div>
                  <ul className="text-sm text-gray-400 space-y-2 mt-4">
                     <li className="flex gap-2"><CheckCircle2 size={14} className="text-[#00c950]"/> উদ্দীপক সহ</li>
                     <li className="flex gap-2"><CheckCircle2 size={14} className="text-[#00c950]"/> ক, খ, গ, ঘ পার্ট</li>
                     <li className="flex gap-2"><CheckCircle2 size={14} className="text-[#00c950]"/> উত্তরপত্র সহ</li>
                  </ul>
               </div>

               {/* MCQ Card */}
               <div className="bg-[#111] border border-white/10 p-6 rounded-2xl hover:border-[#00c950] transition-colors">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                        <h4 className="font-bold text-lg">নৈর্ব্যক্তিক প্রশ্ন</h4>
                        <p className="text-gray-400 text-xs">(MCQ)</p>
                     </div>
                     <span className="bg-[#00c950]/20 text-[#00c950] px-3 py-1 rounded text-xs font-bold">MCQ</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">৳০.৫০ <span className="text-sm text-gray-500 font-normal">/প্রতিটি</span></div>
                  <ul className="text-sm text-gray-400 space-y-2 mt-4">
                     <li className="flex gap-2"><CheckCircle2 size={14} className="text-[#00c950]"/> সঠিক উত্তর মার্ক করা</li>
                     <li className="flex gap-2"><CheckCircle2 size={14} className="text-[#00c950]"/> ব্যাখ্যাসহ সমাধান</li>
                     <li className="flex gap-2"><CheckCircle2 size={14} className="text-[#00c950]"/> অটোমেটেড চেকিং</li>
                  </ul>
               </div>
            </div>

            <div className="bg-[#111] border border-white/5 p-4 rounded-xl flex items-center gap-4">
               <div className="bg-gray-800 p-2 rounded-full"><CheckCircle2 size={20} className="text-white"/></div>
               <p className="text-gray-400 text-sm">
                 সাজেশন এবং লেকচার শিট তৈরির ক্ষেত্রে প্রতি পেজ <span className="text-white font-bold">৳৫.০০</span> চার্জ প্রযোজ্য।
               </p>
            </div>
          </div>

          {/* Wallet Balance Card */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#fe9a00]/30 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Wallet size={150} className="text-white" />
             </div>

             <h3 className="text-gray-400 font-medium mb-2">আপনার বর্তমান ব্যালেন্স</h3>
             <div className="text-5xl font-bold text-white mb-8">৳০.০০</div>

             <div className="space-y-4">
                <Button variant="secondary" className="w-full justify-center h-12 font-bold text-lg">
                   <Plus size={20} className="mr-2"/> রিচার্জ করুন
                </Button>
                <div className="flex gap-4">
                   <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-3 flex items-center justify-center gap-2 transition-colors">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bkash_Logo_icon.svg/200px-Bkash_Logo_icon.svg.png" alt="Bkash" className="h-6 w-auto" />
                   </button>
                   <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-3 flex items-center justify-center gap-2 transition-colors">
                      <img src="https://seeklogo.com/images/N/nagad-logo-7A70CCFEE0-seeklogo.com.png" alt="Nagad" className="h-6 bg-white rounded px-1 w-auto" />
                   </button>
                </div>
             </div>

             <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-sm font-bold text-white mb-3">সাম্প্রতিক ট্রানজেকশন</h4>
                <div className="text-center py-6 text-gray-500 text-sm italic">
                   কোনো লেনদেন পাওয়া যায়নি
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};