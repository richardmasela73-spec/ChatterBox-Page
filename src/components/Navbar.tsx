import { motion } from 'motion/react';
import { Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import { User } from 'firebase/auth';

interface NavbarProps {
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

export default function Navbar({ user, onLogin, onLogout }: NavbarProps) {
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

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <img src={user.photoURL || `https://api.dicebear.com/7.x/notionists/svg?seed=${user.uid}`} alt="Avatar" className="w-8 h-8 rounded-full border border-gray-200" />
                  <span className="text-sm font-bold text-brand-blue">{user.displayName || user.email}</span>
                </div>
                <button onClick={onLogout} title="Log Out" className="p-2 text-slate-400 hover:text-brand-orange transition-colors">
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <button onClick={onLogin} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-50 transition-colors shadow-sm">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
              </button>
            )}
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
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
             {user ? (
               <button onClick={onLogout} className="w-full font-medium text-gray-600 py-2 border border-gray-200 rounded-xl">Log out</button>
             ) : (
               <button onClick={onLogin} className="w-full bg-brand-blue text-white py-2 rounded-xl font-medium">Sign in with Google</button>
             )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
