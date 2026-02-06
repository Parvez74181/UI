import React from 'react';
import { LeaderboardUser } from '../types';
import { Trophy, Medal, ChevronUp, ChevronDown } from 'lucide-react';

const TOP_USERS: LeaderboardUser[] = [
  { rank: 1, name: "সাদিয়া ইসলাম", xp: 15400, avatar: "https://picsum.photos/seed/u1/100/100", institution: "ঢাকা কলেজ" },
  { rank: 2, name: "রাফি আহমেদ", xp: 14250, avatar: "https://picsum.photos/seed/u2/100/100", institution: "নটর ডেম কলেজ" },
  { rank: 3, name: "তাসনিম জাহান", xp: 13800, avatar: "https://picsum.photos/seed/u3/100/100", institution: "ভিকারুননিসা নূন" },
  { rank: 4, name: "করিম উদ্দিন", xp: 12500, avatar: "https://picsum.photos/seed/u4/100/100", institution: "রাজউক কলেজ" },
  { rank: 5, name: "আব্দুল্লাহ আল মামুন", xp: 11900, avatar: "https://picsum.photos/seed/u5/100/100", institution: "সরকারি বিজ্ঞান কলেজ" },
];

export const Leaderboard: React.FC = () => {
  return (
    <section id="leaderboard" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fe9a00]/10 text-[#fe9a00] text-sm font-bold mb-4 border border-[#fe9a00]/20">
             <Trophy size={14} /> মাসিক প্রতিযোগিতা
          </div>
          <h2 className="text-4xl font-bold mb-4">এই মাসের <span className="text-[#fe9a00]">চ্যাম্পিয়নরা</span></h2>
          <p className="text-gray-400">প্রতিটি সঠিক উত্তরের জন্য XP অর্জন করুন। মাস শেষে লিডারবোর্ড রিসেট হবে।</p>
        </div>

        {/* Podium for Top 3 */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-6 mb-12">
          {/* Rank 2 */}
          <div className="order-2 md:order-1 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-4 border-gray-400 overflow-hidden mb-3 relative shadow-lg">
              <img src={TOP_USERS[1].avatar} alt="" className="w-full h-full object-cover" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">2nd</div>
            </div>
            <div className="bg-[#1a1a1a]/80 backdrop-blur w-full md:w-48 p-4 rounded-t-2xl border-t-4 border-gray-400 text-center h-40 flex flex-col justify-center">
               <p className="font-bold text-lg">{TOP_USERS[1].name}</p>
               <p className="text-gray-400 text-xs">{TOP_USERS[1].institution}</p>
               <p className="text-[#fe9a00] font-bold mt-2">{TOP_USERS[1].xp} XP</p>
            </div>
          </div>

          {/* Rank 1 */}
          <div className="order-1 md:order-2 flex flex-col items-center z-10">
             <div className="mb-2">
               <Trophy size={40} className="text-[#fe9a00] drop-shadow-[0_0_15px_rgba(254,154,0,0.5)]" />
             </div>
            <div className="w-24 h-24 rounded-full border-4 border-[#fe9a00] overflow-hidden mb-3 relative shadow-[0_0_20px_rgba(254,154,0,0.3)]">
              <img src={TOP_USERS[0].avatar} alt="" className="w-full h-full object-cover" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#fe9a00] text-black text-xs font-bold px-2 py-0.5 rounded-full">1st</div>
            </div>
            <div className="bg-[#1a1a1a]/90 backdrop-blur w-full md:w-56 p-6 rounded-t-2xl border-t-4 border-[#fe9a00] text-center h-52 flex flex-col justify-center shadow-xl">
               <p className="font-bold text-xl">{TOP_USERS[0].name}</p>
               <p className="text-gray-400 text-sm">{TOP_USERS[0].institution}</p>
               <p className="text-[#fe9a00] font-bold text-xl mt-2">{TOP_USERS[0].xp} XP</p>
            </div>
          </div>

          {/* Rank 3 */}
          <div className="order-3 md:order-3 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-4 border-[#b08d55] overflow-hidden mb-3 relative shadow-lg">
              <img src={TOP_USERS[2].avatar} alt="" className="w-full h-full object-cover" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#b08d55] text-black text-xs font-bold px-2 py-0.5 rounded-full">3rd</div>
            </div>
            <div className="bg-[#1a1a1a]/80 backdrop-blur w-full md:w-48 p-4 rounded-t-2xl border-t-4 border-[#b08d55] text-center h-32 flex flex-col justify-center">
               <p className="font-bold text-lg">{TOP_USERS[2].name}</p>
               <p className="text-gray-400 text-xs">{TOP_USERS[2].institution}</p>
               <p className="text-[#fe9a00] font-bold mt-2">{TOP_USERS[2].xp} XP</p>
            </div>
          </div>
        </div>

        {/* List for Rest */}
        <div className="max-w-3xl mx-auto space-y-3">
           {TOP_USERS.slice(3).map((user) => (
             <div key={user.rank} className="bg-[#111]/60 backdrop-blur hover:bg-[#111] border border-white/5 rounded-xl p-4 flex items-center gap-4 transition-colors">
                <span className="w-8 text-center font-bold text-gray-500">#{user.rank}</span>
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1">
                   <h4 className="font-bold text-white">{user.name}</h4>
                   <p className="text-xs text-gray-400">{user.institution}</p>
                </div>
                <div className="text-right">
                   <p className="font-bold text-[#fe9a00]">{user.xp} XP</p>
                   <p className="text-xs text-green-500 flex items-center justify-end gap-1"><ChevronUp size={10}/> +120</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};