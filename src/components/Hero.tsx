import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles } from 'lucide-react';
import ReportModal from './ReportModal';

export default function Hero() {
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-1/3 h-full bg-brand-orange/5 rounded-l-[100px] -z-10 transform -rotate-3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <span className="px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow rounded-full text-xs font-bold uppercase tracking-widest inline-block w-fit">
                New 2024 Curriculum
              </span>
              
              <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-black font-heading leading-[0.9] tracking-tighter text-brand-blue">
                SPEAK <span className="text-brand-orange">BOLDER</span><br />
                THAN EVER.
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 max-w-md leading-relaxed pt-2">
                Unlock confidence with our immersive English courses tailored for kids and adults. Practical speaking, real-world grammar, and expert guidance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <a href="#booking" className="inline-block bg-brand-orange text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-orange/30 transform hover:-translate-y-1 transition-all">
                Start Learning Free
              </a>
              
              <div className="flex items-center gap-4 pl-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e2e8f0,cbd5e1,94a3b8`}
                      alt="Student"
                      className="w-12 h-12 rounded-full border-4 border-white bg-slate-200"
                    />
                  ))}
                </div>
                <div className="text-sm font-bold text-brand-blue">
                  Join 3000+ Learners
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main illustration/image area */}
            <div className="relative z-10 w-full aspect-square bg-white rounded-[40px] shadow-2xl p-8 border border-slate-100">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-brand-blue">Daily Goal</h3>
                  <p className="text-slate-400 font-medium mt-1">Almost there, Sarah!</p>
                </div>
                <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-yellow/30">
                  85%
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-brand-orange">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">Current Course</p>
                  <p className="font-bold text-lg text-brand-blue">English for Kids</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-brand-orange rounded-2xl text-white">
                    <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Time Spent</p>
                    <p className="text-3xl font-black mt-1">42m</p>
                  </div>
                  <div className="p-4 border-2 border-slate-100 rounded-2xl">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Words Learned</p>
                    <p className="text-3xl font-black text-brand-blue mt-1">128</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 px-1">
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-orange"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-orange"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                  </div>
                  <span onClick={() => setIsReportOpen(true)} className="text-xs font-bold text-brand-orange cursor-pointer hover:underline uppercase tracking-wide">View Report &rarr;</span>
                </div>
              </div>
            </div>

            {/* Background decorative card */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-brand-orange/5 rounded-[40px] -z-10 transform rotate-3 border border-brand-orange/10"></div>
          </motion.div>

        </div>
      </div>
      <ReportModal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)} />
    </section>
  );
}
