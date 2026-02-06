import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ExamShowcase } from './components/ExamShowcase';
import { Leaderboard } from './components/Leaderboard';
import { StatsSection } from './components/StatsSection';
import { AppDownload } from './components/AppDownload';
import { Footer } from './components/Footer';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';

// Teacher Components
import { TeacherHero } from './components/TeacherHero';
import { TeacherEditor } from './components/TeacherEditor';
import { TeacherFeatures } from './components/TeacherFeatures';
import { TeacherWallet } from './components/TeacherWallet';

function App() {
  const [userType, setUserType] = useState<'student' | 'teacher'>('student');

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#00c950] selection:text-black font-sans overflow-x-hidden">
      {/* Global Modern Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Dark */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#050505]"></div>
        
        {/* Animated Gradient Blobs - Colors shift based on User Type */}
        <div className={`absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] mix-blend-screen opacity-60 transition-colors duration-1000 ${userType === 'student' ? 'bg-[#00c950]/15' : 'bg-[#fe9a00]/15'}`}></div>
        <div className={`absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen opacity-50 transition-colors duration-1000 ${userType === 'student' ? 'bg-[#fe9a00]/10' : 'bg-[#00c950]/10'}`}></div>
        <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-[#00c950]/5 rounded-full blur-[150px] mix-blend-screen opacity-40"></div>
        <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-[#fe9a00]/5 rounded-full blur-[120px] mix-blend-screen opacity-30"></div>
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10">
        <Navbar userType={userType} onToggleUserType={setUserType} />
        
        <main>
          {userType === 'student' ? (
            <>
              <Hero />
              <Features />
              <HowItWorks />
              <ExamShowcase />
              <Pricing />
              <Leaderboard />
              <StatsSection />
              <Testimonials />
              <FAQ />
            </>
          ) : (
            <>
              <TeacherHero />
              <TeacherEditor />
              <TeacherFeatures />
              <TeacherWallet />
            </>
          )}
          
          <AppDownload />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;