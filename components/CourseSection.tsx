import React, { useState } from 'react';
import { Course } from '../types';
import { Star, Clock, BookOpen } from 'lucide-react';
import { Button } from './Button';

const CATEGORIES = ["সকল কোর্স", "HSC", "SSC", "ভর্তি প্রস্তুতি", "স্কিলস"];

const COURSES: Course[] = [
  {
    id: 1,
    title: "HSC 25 - ক্র্যাশ কোর্স",
    instructor: "ড. মুহম্মদ জাফর ইকবাল",
    price: "৳২৫০০",
    rating: 4.9,
    image: "https://picsum.photos/seed/hsc/400/250",
    category: "HSC",
    discount: "-20%"
  },
  {
    id: 2,
    title: "ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট",
    instructor: "সুমিত সাহা",
    price: "৳৩৫০০",
    rating: 4.8,
    image: "https://picsum.photos/seed/web/400/250",
    category: "স্কিলস"
  },
  {
    id: 3,
    title: "SSC 25 - শেষ মুহূর্তের প্রস্তুতি",
    instructor: "আয়মান সাদিক",
    price: "৳১৫০০",
    rating: 5.0,
    image: "https://picsum.photos/seed/ssc/400/250",
    category: "SSC",
    discount: "HOT"
  },
  {
    id: 4,
    title: "মেডিকেল ভর্তি প্রস্তুতি",
    instructor: "ডা. তুষার",
    price: "৳৪০০০",
    rating: 4.7,
    image: "https://picsum.photos/seed/med/400/250",
    category: "ভর্তি প্রস্তুতি"
  },
  {
    id: 5,
    title: "Spoken English Challenge",
    instructor: "মুনজেরিন শহীদ",
    price: "৳৯৫০",
    rating: 4.9,
    image: "https://picsum.photos/seed/eng/400/250",
    category: "স্কিলস"
  },
  {
    id: 6,
    title: "BUET ভর্তি প্রোগ্রাম",
    instructor: "ইঞ্জি. হাসান",
    price: "৳৫৫০০",
    rating: 4.9,
    image: "https://picsum.photos/seed/buet/400/250",
    category: "ভর্তি প্রস্তুতি"
  }
];

export const CourseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("সকল কোর্স");

  const filteredCourses = activeCategory === "সকল কোর্স" 
    ? COURSES 
    : COURSES.filter(c => c.category === activeCategory);

  return (
    <section id="courses" className="py-20 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের <span className="text-[#00c950]">জনপ্রিয় কোর্সসমূহ</span></h2>
          <p className="text-gray-400">আপনার প্রয়োজন অনুযায়ী সেরা কোর্সটি বেছে নিন</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                ? 'bg-[#00c950] text-black shadow-lg shadow-[#00c950]/20' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="group bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00c950]/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00c950]/10">
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                {course.discount && (
                  <div className="absolute top-3 right-3 bg-[#fe9a00] text-black text-xs font-bold px-2 py-1 rounded">
                    {course.discount}
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-white text-xs flex items-center gap-1">
                   <Star size={12} className="text-[#fe9a00] fill-[#fe9a00]" /> {course.rating}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-[#00c950] bg-[#00c950]/10 px-2 py-1 rounded">{course.category}</span>
                  <span className="text-xs text-gray-400 flex items-center gap-1"><BookOpen size={12}/> ১০টি ক্লাস</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00c950] transition-colors">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-4">Instructor: {course.instructor}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-2xl font-bold text-white">{course.price}</span>
                  <Button variant="outline" size="sm" className="!rounded-full">বিস্তারিত</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <Button variant="secondary" size="lg">সব কোর্স দেখুন</Button>
        </div>
      </div>
    </section>
  );
};