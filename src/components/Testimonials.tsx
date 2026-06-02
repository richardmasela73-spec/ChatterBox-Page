import { useRef } from 'react';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Andrew',
    text: "Hello Mr Richard, its Andrew here ur english course student... I wanted to thank you for being such a great English teacher. I feel like my English skills have improved a lot thanks to your lessons. Thank you for your patience and effort, hopefully i can implement what i studied from you in my life in the future 🙌",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 2,
    name: "Athiya's Mom",
    text: "Pengalaman athiya selama belajar dengan mr.richard merasa happy dan tidak merasa bosan. Dan athiya merasa nyaman berbicara bahasa inggris dengan mr.richard,wl terkadang ada kosakata yang tidak tauh..tp athiya gk takut untuk mencoba.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
  }
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.offsetWidth > 600 ? current.offsetWidth / 2 : current.offsetWidth; 
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-brand-blue relative overflow-hidden" id="testimonials">
       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-brand-blue to-brand-blue"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black font-heading text-white mb-4 tracking-tighter flex items-center gap-4">
              Student Stories
            </h2>
            <p className="text-blue-200 text-lg">
              Hear from our students who have transformed their English skills and built confidence.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white hover:bg-brand-orange hover:text-white flex items-center justify-center text-brand-blue transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={testimonial.id}
              className="min-w-[300px] md:min-w-[400px] w-full max-w-[450px] bg-white rounded-[32px] p-8 shrink-0 snap-center shadow-xl relative"
            >
              <div className="absolute top-8 right-8 text-slate-100">
                <Quote size={40} className="fill-slate-100" />
              </div>
              
              <div className="flex items-center gap-1 mb-6 text-brand-yellow">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-brand-yellow" />
                ))}
              </div>
              
              <p className="text-slate-600 font-medium text-lg mb-8 leading-relaxed relative z-10 min-h-[100px]">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full bg-brand-light border-2 border-brand-orange"
                />
                <div>
                  <h4 className="font-black text-brand-blue">{testimonial.name}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Student</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
