import { motion } from 'motion/react';
import { Phone, Instagram, MessageCircle, Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 relative bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-heading text-brand-blue mb-6 tracking-tighter">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-500">
            Have questions about our courses or want to schedule your first session? We're here to help you get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <motion.a
            href="https://wa.me/6285716635027"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-brand-light hover:bg-brand-orange text-brand-blue hover:text-white rounded-[32px] p-8 transition-all duration-300 flex flex-col items-center text-center border border-slate-100 hover:border-transparent shadow-sm hover:shadow-xl hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-white text-brand-orange group-hover:text-brand-orange flex items-center justify-center mb-6 shadow-sm">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-black mb-2">WhatsApp</h3>
            <p className="font-medium mb-6 opacity-80">+62 857-1663-5027</p>
            <span className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
              Chat with us <ArrowRight size={16} />
            </span>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/box_obrolan/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white rounded-[32px] p-8 transition-all duration-300 flex flex-col items-center text-center border border-slate-100 hover:border-transparent shadow-sm hover:shadow-xl hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-white text-brand-blue group-hover:text-brand-blue flex items-center justify-center mb-6 shadow-sm">
              <Instagram size={32} />
            </div>
            <h3 className="text-xl font-black mb-2">Instagram</h3>
            <p className="font-medium mb-6 opacity-80 break-all">@box_obrolan</p>
            <span className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
              Follow us <ArrowRight size={16} />
            </span>
          </motion.a>

          <motion.a
            href="mailto:richardmasela73@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white rounded-[32px] p-8 transition-all duration-300 flex flex-col items-center text-center border border-slate-100 hover:border-transparent shadow-sm hover:shadow-xl hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-white text-brand-blue group-hover:text-brand-blue flex items-center justify-center mb-6 shadow-sm">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-black mb-2">Email</h3>
            <p className="font-medium mb-6 opacity-80 break-all">richardmasela73@gmail.com</p>
            <span className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
              Drop a line <ArrowRight size={16} />
            </span>
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@chatter.box2?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-brand-light hover:bg-brand-yellow text-brand-blue hover:text-brand-blue rounded-[32px] p-8 transition-all duration-300 flex flex-col items-center text-center border border-slate-100 hover:border-transparent shadow-sm hover:shadow-xl hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-white text-brand-yellow group-hover:text-brand-yellow flex items-center justify-center mb-6 shadow-sm">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-xl font-black mb-2">TikTok</h3>
            <p className="font-medium mb-6 opacity-80">@chatter.box2</p>
            <span className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
              Watch us <ArrowRight size={16} />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
