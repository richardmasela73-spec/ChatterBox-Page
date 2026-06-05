import { motion } from 'motion/react';

const VIDEOS = [
  "https://www.instagram.com/reel/DXRWY6-D30_/",
  "https://www.instagram.com/reel/DTVd87FDwUn/",
  "https://www.instagram.com/reel/DUGMV8okfSf/"
];

export default function VideoShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2 block">
            Sneak Peek
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-brand-blue tracking-tighter">
            Watch Us in Action
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {VIDEOS.map((url, index) => (
            <motion.div 
              key={url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-50"
              style={{ minHeight: '600px' }}
            >
              <iframe
                src={`${url}embed/captioned`}
                className="w-full h-full border-none min-h-[600px]"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
