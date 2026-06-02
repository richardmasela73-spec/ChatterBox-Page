import { motion } from 'motion/react';
import { Target, Users, BookOpen, Trophy } from 'lucide-react';

const values = [
  {
    icon: <Users size={24} />,
    title: 'Student-Centered',
    description: 'We tailor our teaching methods to individual learning styles and goals.',
  },
  {
    icon: <Target size={24} />,
    title: 'Result-Oriented',
    description: 'Data-driven approaches that guarantee measurable progress in your English journey.',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Innovative Learning',
    description: 'Blending technology with proven educational frameworks for maximum retention.',
  },
  {
    icon: <Trophy size={24} />,
    title: 'Empowering Success',
    description: 'Building confidence to help you achieve personal and professional milestones.',
  },
];

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-light" id="about">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-orange via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black font-heading text-brand-blue mb-6 tracking-tighter">
                About <span className="text-brand-orange">Box Obrolan</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Online Courses designed for anyone who wants to boost their speaking skills. We offer a well-designed curriculum tailored for both kids and adults 🚀
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    key={index} 
                    className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-orange mb-4">
                      {value.icon}
                    </div>
                    <h3 className="font-bold text-brand-blue mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-slate-50">
                <img 
                  src="https://i.ibb.co.com/wF2sTL0q/Gemini-Generated-Image-xhok1bxhok1bxhok.png" 
                  alt="About Box Obrolan" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-brand-blue rounded-[40px] -z-10"></div>
              <div className="absolute top-1/2 -left-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 z-20 hidden md:block">
                <div className="text-4xl font-black text-brand-orange mb-1">10+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
