import { motion } from 'motion/react';
import { BookOpen, Users, Award, MonitorPlay } from 'lucide-react';

const stats = [
  { id: 1, name: 'Students in Indonesia', value: '3,000+', icon: Users, color: 'text-brand-orange', bg: 'bg-brand-orange/10' },
  { id: 2, name: 'Video Lessons', value: '250+', icon: MonitorPlay, color: 'text-brand-blue', bg: 'bg-brand-blue/10' },
  { id: 3, name: 'Years Experience', value: '10+', icon: Award, color: 'text-brand-yellow', bg: 'bg-brand-yellow/20' },
  { id: 4, name: 'Different Courses', value: '15+', icon: BookOpen, color: 'text-green-500', bg: 'bg-green-100' },
];

export default function Stats() {
  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-2xl p-10 border border-slate-100">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon size={32} strokeWidth={1.5} />
                </div>
                <dd className="font-heading text-4xl font-black text-brand-blue mb-1">
                  {stat.value}
                </dd>
                <dt className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                  {stat.name}
                </dt>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
