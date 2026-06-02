import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 border-[3px] border-brand-blue rounded-xl flex items-center justify-center relative bg-white">
              <span className="font-heading font-black text-xl text-brand-blue relative z-10">B</span>
              {/* Subtle bubble tail */}
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-l-[3px] border-b-[3px] border-brand-blue bg-white transform rotate-0 z-0"></div>
            </div>
            <span className="font-heading font-black text-2xl tracking-tighter text-slate-800 ml-1">BOX <br className="hidden" /><span className="text-xl">OBROLAN</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 font-semibold text-sm uppercase tracking-widest text-slate-500">
            <a href="#about" className="hover:text-brand-orange transition-colors">About Us</a>
            <a href="#tutors" className="hover:text-brand-orange transition-colors">Tutors</a>
            <a href="#pricing" className="hover:text-brand-orange transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
          </div>

          <button 
            className="md:hidden p-2 text-brand-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-xl"
        >
          <a href="#about" className="block py-2 text-gray-600 font-medium" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#tutors" className="block py-2 text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Tutors</a>
          <a href="#pricing" className="block py-2 text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#contact" className="block py-2 text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Contact</a>
        </motion.div>
      )}
    </nav>
  );
}
