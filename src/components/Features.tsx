import { motion } from 'motion/react';
import { Video, BookOpen, MessageCircle, Clock } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Live Online Classes',
    description: 'Join interactive video sessions with certified native tutors from anywhere in the world.',
    color: 'bg-brand-orange/10 text-brand-orange'
  },
  {
    icon: BookOpen,
    title: 'Tailored Curriculum',
    description: 'Learn with material designed specifically for your current skill level, whether you are a kid or an adult.',
    color: 'bg-brand-blue/10 text-brand-blue'
  },
  {
    icon: MessageCircle,
    title: 'Speaking Practice',
    description: 'Focus heavily on conversation skills to build confidence in real-world situations.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Book lessons whenever it fits your busy life. We are available 24/7.',
    color: 'bg-brand-yellow/20 text-yellow-600'
  }
];

export default function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 rounded-l-full -z-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, lg: { x: -30 } }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-square bg-white rounded-[40px] shadow-2xl p-6 relative z-10 border border-slate-100">
                <img 
                  src="https://i.ibb.co.com/twxVBPZg/Gemini-Generated-Image-84brq484brq484br.png" 
                  alt="Student using ChatterBox"
                  className="w-full h-full object-cover rounded-[24px]"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-yellow/30 rounded-[40px] -z-10 transform -rotate-3 border border-brand-yellow/20"></div>
              
              <div className="absolute top-1/2 -right-8 md:-right-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 z-20">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="font-bold text-brand-blue">Live Class</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">In progress...</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-brand-blue mb-4 tracking-tighter">
                Why learn with <span className="text-brand-orange">Box Obrolan</span>?
              </h2>
              <p className="text-lg text-slate-500">
                We've combined technology with expert teaching methods to create the fastest path to English fluency.
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-5 rounded-[24px] hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-default border border-transparent hover:border-slate-100 group"
                >
                  <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform`}>
                    <feature.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-heading font-black text-xl text-brand-blue mb-1.5">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
