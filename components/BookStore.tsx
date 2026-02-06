import React, { useState } from 'react';
import { ShoppingCart, Download, Book, FileText, Filter, Search } from 'lucide-react';
import { Button } from './Button';

export const BookStore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'books' | 'notes'>('books');

  const books = [
    {
      id: 1,
      title: "পদার্থবিজ্ঞান ১ম পত্র - কনসেপ্ট বুক",
      author: "ইঞ্জি. মো. রফিকুল ইসলাম",
      price: 350,
      rating: 4.8,
      image: "https://picsum.photos/seed/book1/200/300",
      tag: "HSC"
    },
    {
      id: 2,
      title: "Math Question Bank 2024",
      author: "শিখোকরো পাবলিকেশন",
      price: 420,
      rating: 4.9,
      image: "https://picsum.photos/seed/book2/200/300",
      tag: "Admission"
    },
    {
      id: 3,
      title: "রসায়ন জাদুর বই",
      author: "ড. আসাদুজ্জামান",
      price: 280,
      rating: 4.7,
      image: "https://picsum.photos/seed/book3/200/300",
      tag: "SSC"
    },
    {
      id: 4,
      title: "Biology Visual Guide",
      author: "মেডিকেল টিম",
      price: 550,
      rating: 5.0,
      image: "https://picsum.photos/seed/book4/200/300",
      tag: "Medical"
    }
  ];

  const notes = [
    {
      id: 1,
      title: "ভেক্টর - শর্টকাট টেকনিক",
      subject: "Physics",
      pages: 12,
      downloads: "5.2k",
      type: "Handnote"
    },
    {
      id: 2,
      title: "জৈব রসায়ন - নামধারি বিক্রিয়া",
      subject: "Chemistry",
      pages: 8,
      downloads: "3.8k",
      type: "Cheat Sheet"
    },
    {
      id: 3,
      title: "ত্রিকোণমিতি সব সূত্র",
      subject: "Math",
      pages: 4,
      downloads: "10k+",
      type: "Formula"
    },
    {
      id: 4,
      title: "Bangla 2nd Paper Grammar",
      subject: "Bangla",
      pages: 25,
      downloads: "2.1k",
      type: "Summary"
    }
  ];

  return (
    <section id="resources" className="py-24 relative z-10 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">রিসোর্স <span className="text-[#00c950]">&</span> বুকশপ</h2>
            <p className="text-gray-400">আপনার প্রয়োজনীয় বই কিনুন অথবা ফ্রি নোটস ডাউনলোড করুন।</p>
          </div>

          {/* Toggle Switch */}
          <div className="bg-[#1a1a1a] p-1.5 rounded-xl flex items-center border border-white/10">
            <button 
              onClick={() => setActiveTab('books')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${activeTab === 'books' ? 'bg-[#00c950] text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              <Book size={16} /> বই কিনুন
            </button>
            <button 
              onClick={() => setActiveTab('notes')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${activeTab === 'notes' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              <FileText size={16} /> ফ্রি নোটস
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-16">
           <input 
              type="text" 
              placeholder={activeTab === 'books' ? "বইয়ের নাম বা লেখকের নাম দিয়ে খুঁজুন..." : "টপিক বা অধ্যায়ের নাম লিখুন..."}
              className="w-full bg-[#111] border border-white/10 rounded-full py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#00c950] transition-colors"
           />
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
           <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1a1a1a] p-2 rounded-full border border-white/10 hover:border-[#00c950] text-gray-400 hover:text-[#00c950]">
              <Filter size={16} />
           </button>
        </div>

        {activeTab === 'books' ? (
          /* Books Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book) => (
              <div key={book.id} className="group bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00c950] transition-all duration-300">
                <div className="relative h-64 overflow-hidden bg-[#1a1a1a] flex items-center justify-center p-4">
                  <img src={book.image} alt={book.title} className="h-full object-contain shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-[#00c950] text-black text-xs font-bold px-2 py-1 rounded">{book.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1 truncate">{book.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{book.author}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-white">৳{book.price}</span>
                    <Button variant="outline" size="sm" className="!px-3 gap-2">
                       <ShoppingCart size={16} /> কিনুন
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Notes Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {notes.map((note) => (
               <div key={note.id} className="bg-[#111] border border-white/10 p-6 rounded-2xl hover:bg-[#151515] transition-colors group relative">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                     <FileText size={80} />
                  </div>
                  
                  <div className="flex items-start justify-between mb-4">
                     <div className="w-12 h-12 bg-[#00c950]/10 rounded-xl flex items-center justify-center text-[#00c950]">
                        <FileText size={24} />
                     </div>
                     <span className="bg-white/5 text-gray-400 text-xs px-2 py-1 rounded border border-white/5">{note.type}</span>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-1">{note.title}</h3>
                  <p className="text-[#00c950] text-sm mb-4">{note.subject}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                     <span>{note.pages} Pages</span>
                     <span>•</span>
                     <span>{note.downloads} Downloads</span>
                  </div>
                  
                  <Button className="w-full gap-2 group-hover:bg-[#00c950] group-hover:text-black transition-colors">
                     <Download size={16} /> ফ্রি ডাউনলোড
                  </Button>
               </div>
             ))}
          </div>
        )}
      </div>
    </section>
  );
};