import { motion } from 'motion/react';
import { Star, MessageCircle } from 'lucide-react';

const tutors = [
  {
    name: 'Teacher Richard',
    role: 'Certified TEFL English Educator',
    bio: 'A dedicated and results-driven English educator with 10 years of experience. Certified in TESOL/TEFL, Teacher Richard specializes in blended learning and individualized instruction. He brings extensive online teaching experience from top platforms including CAKAP, KYNA ENGLISH, EDUKITA, SKOLLA, and KARIER.MU.',
    image: 'https://i.ibb.co.com/DfJDPQ9x/Recent-Photo.jpg',
    rating: '5.0',
    reviews: 124,
    color: 'bg-brand-blue'
  }
];

export default function Tutors() {
  return (
    <section className="py-24 relative overflow-hidden" id="tutors">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]">
           <div className="aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-brand-orange to-brand-yellow opacity-20 sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black font-heading text-brand-blue mb-4 tracking-tighter">
              Meet Your Tutor
            </h2>
            <p className="text-slate-500 text-lg">
              Learn from the best. Our experienced mentors will guide you to fluency.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {tutors.map((tutor, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row gap-10 items-center justify-between"
            >
              <div className="relative shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-[32px] overflow-hidden shadow-lg border-4 border-white relative z-10">
                  <img 
                    src={tutor.image} 
                    alt={tutor.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-yellow/30 rounded-[32px] -z-10 transform rotate-6 border border-brand-yellow/20"></div>
                <div className="absolute top-6 -left-6 bg-white py-2 px-4 rounded-xl shadow-lg border border-slate-50 flex items-center gap-2 z-20">
                    <Star className="text-brand-orange fill-brand-orange" size={16} />
                    <span className="font-black text-brand-blue text-sm">{tutor.rating}</span>
                </div>
              </div>
              
              <div className="flex-1">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest mb-2 block">{tutor.role}</span>
                <h3 className="text-3xl md:text-4xl font-black text-brand-blue mb-4 tracking-tighter">{tutor.name}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {tutor.bio}
                </p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <a href="#booking" className="flex-1 bg-brand-orange text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 hover:-translate-y-1 transition-all text-center">
                    <MessageCircle size={20} />
                    <span>Book a session</span>
                  </a>
                  <div className="px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100">
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Reviews</span>
                     <span className="font-black text-brand-blue text-xl">{tutor.reviews}+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
