import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import kidsClassImg from '../assets/images/kids_class_1780384031494.png';
import adultsClassImg from '../assets/images/adults_class_1780384049622.png';
import generalEnglishImg from '../assets/images/general_english_1780384065810.png';
import testPrepImg from '../assets/images/test_prep_1780384079882.png';

const courses = [
  {
    id: 1,
    title: 'Kids Conversation Class',
    level: 'Kids',
    description: 'Fun and interactive sessions designed to build confidence in young learners through games and activities.',
    rating: 4.9,
    reviews: 1450,
    lessons: 32,
    image: kidsClassImg,
    color: 'bg-green-100 text-green-700',
  },
  {
    id: 2,
    title: 'Adults Conversation Class',
    level: 'Adults',
    description: 'Practical speaking practice focusing on everyday situations, fluency, and overcoming the fear of talking.',
    rating: 4.9,
    reviews: 890,
    lessons: 36,
    image: adultsClassImg,
    color: 'bg-brand-orange/10 text-brand-orange',
  },
  {
    id: 3,
    title: 'General English',
    level: 'All Levels',
    description: 'Comprehensive course covering grammar, vocabulary, reading, writing, speaking, and listening skills.',
    rating: 4.8,
    reviews: 1240,
    lessons: 40,
    image: generalEnglishImg,
    color: 'bg-brand-blue/10 text-brand-blue',
  },
  {
    id: 4,
    title: 'Test Preparation Class',
    level: 'Advanced',
    description: 'Targeted strategies and intensive practice for students preparing for IELTS, TOEFL, and other proficiency tests.',
    rating: 4.7,
    reviews: 1560,
    lessons: 48,
    image: testPrepImg,
    color: 'bg-purple-100 text-purple-700',
  },
];

export default function PopularCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black font-heading text-brand-blue mb-4 tracking-tighter">
              Explore Our Top Courses
            </h2>
            <p className="text-slate-500 text-lg">
              Choose from a variety of courses designed to help you achieve your specific English learning goals.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold text-brand-orange hover:gap-3 transition-all">
            See all courses <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.a
              href="#booking"
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[40px] p-6 group cursor-pointer border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 block"
            >
              <div className="relative rounded-[24px] overflow-hidden mb-6 aspect-[4/3] shadow-md">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md bg-white border border-slate-100 ${course.color.replace('bg-', 'text-').replace('/10', '')}`}>
                    {course.level}
                  </span>
                </div>
              </div>
              
              <div className="px-2 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center text-brand-yellow">
                    <Star size={16} fill="currentColor" />
                  </div>
                  <span className="font-black text-brand-blue text-sm">{course.rating}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">({course.reviews} reviews)</span>
                </div>
                
                <h3 className="font-heading font-black text-2xl text-brand-blue mb-2 group-hover:text-brand-orange transition-colors tracking-tight">
                  {course.title}
                </h3>
                
                <p className="text-slate-500 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{course.lessons} Lessons</span>
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors shadow-sm">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 font-medium text-brand-orange hover:gap-3 transition-all">
            See all courses <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
