import React from 'react';
import { Button } from './Button';
import { FileText, Printer, Share2, MousePointer2 } from 'lucide-react';

export const TeacherHero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fe9a00]/10 border border-[#fe9a00]/20 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#fe9a00] animate-pulse"></span>
            <span className="text-[#fe9a00] text-sm font-bold">শিক্ষকদের জন্য বিশেষ ফিচার</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white mb-6">
          প্রশ্নপত্র তৈরি করুন <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe9a00] to-[#ffb940]">নিমিষেই, প্রফেশনাল মানের</span>
        </h1>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          আপনার কোচিং বা স্কুলের পরীক্ষার জন্য এমসিকিউ, সৃজনশীল প্রশ্ন, লেকচার শিট এবং সাজেশন তৈরি করুন মাত্র কয়েক ক্লিকে। আমাদের ১ লক্ষ+ প্রশ্নের বিশাল ভান্ডার আপনার অপেক্ষায়।
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button variant="secondary" size="lg" className="font-bold">
            <FileText className="mr-2 w-5 h-5" /> প্রশ্ন তৈরি করুন
          </Button>
          <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:border-white hover:text-white">
             ডেমো দেখুন
          </Button>
        </div>

        {/* Floating Icons Animation (Background decor) */}
        <div className="absolute top-1/4 left-10 animate-bounce duration-[3000ms] opacity-20">
           <Printer size={48} className="text-[#fe9a00]" />
        </div>
        <div className="absolute top-1/3 right-10 animate-bounce duration-[4000ms] opacity-20">
           <Share2 size={48} className="text-[#00c950]" />
        </div>
      </div>
    </div>
  );
};