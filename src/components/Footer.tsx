import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 border-[3px] border-white rounded-xl flex items-center justify-center relative bg-brand-blue">
                <span className="font-heading font-black text-xl text-white relative z-10">B</span>
                {/* Subtle bubble tail */}
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-l-[3px] border-b-[3px] border-white bg-brand-blue transform rotate-0 z-0"></div>
              </div>
              <span className="font-heading font-black text-2xl tracking-tighter text-white ml-1">BOX <span className="text-xl">OBROLAN</span></span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering individuals globally to speak English confidently through interactive lessons and expert guidance.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">Our Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">Find a Tutor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">Pricing Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get latest updates and offers.</p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/10 text-white rounded-full py-3 pl-12 pr-4 outline-none focus:bg-white/20 transition-colors border border-transparent focus:border-brand-yellow/50"
                />
              </div>
              <button className="bg-brand-yellow text-brand-blue font-bold px-6 py-3 rounded-full hover:bg-brand-yellow/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <div className="mt-8 mb-4 border-t border-white/10 pt-12 pb-4 flex justify-between items-center bg-transparent">
          <div className="flex space-x-12">
            <div className="flex flex-col">
              <span className="text-2xl font-black">1:1</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Private Mentorship</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black">24h</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">AI-Powered Feedback</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black">14</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Language Accents</span>
            </div>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-sm italic font-serif text-slate-400">"The most efficient way to learn I've ever used."</p>
            <p className="text-xs font-bold mt-1">— Tech Monthly Review</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm font-medium">© {new Date().getFullYear()} Box Obrolan. All rights reserved.</p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
            <span className="text-slate-500">Designed with layout inspiration</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
