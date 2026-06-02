import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const pricingPackages = [
  {
    duration: '1 Month',
    title: '1 Month Package',
    price: 'Rp. 499.000',
    features: [
      'Study materials',
      '8 Meetings + 1 Additional Class',
      '50-Minute Class',
    ],
    popular: false,
  },
  {
    duration: '2 Months',
    title: '2 Months Package',
    price: 'Rp. 995.000',
    features: [
      'Study materials',
      '16 Meetings + 1 Additional Class',
      '50-Minute Class',
      'Monthly Progress Results',
    ],
    popular: false,
  },
  {
    duration: '3 Months',
    title: '3 Months Package',
    price: 'Rp. 1.200.000',
    features: [
      'Study materials',
      '24 Meetings + 1 Additional Class',
      '50-Minute Class',
      'Monthly Progress Results',
      'Free Consultation',
    ],
    popular: true,
  },
  {
    duration: '4 Months',
    title: '4 Months Package',
    price: 'Rp. 1.595.000',
    features: [
      'Study materials',
      '32 Meetings + 1 Additional Class',
      '50-Minute Class',
      'Monthly Progress Results',
      'Free Consultation',
    ],
    popular: false,
  },
  {
    duration: '5 Months',
    title: '5 Months Package',
    price: 'Rp. 1.990.000',
    features: [
      'Study materials',
      '40 Meetings + 1 Additional Class',
      '50-Minute Class',
      'Monthly Progress Results',
      'Free Consultation',
    ],
    popular: false,
  },
  {
    duration: '6 Months',
    title: '6 Months Package',
    price: 'Rp. 2.385.000',
    features: [
      'Study materials',
      '48 Meetings + 1 Additional Class',
      '50-Minute Class',
      'Monthly Progress Results',
      'Free Consultation',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-brand-light relative" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-heading text-brand-blue mb-6 tracking-tighter">
            Course Price List
          </h2>
          <p className="text-lg text-slate-500">
            Choose the best learning package that fits your goals and schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPackages.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className={`relative bg-white rounded-[40px] p-8 border ${pkg.popular ? 'border-brand-orange shadow-2xl shadow-brand-orange/20' : 'border-slate-100 shadow-xl shadow-slate-200/50'} flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <span className="bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-black text-brand-blue mb-4 tracking-tight">{pkg.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-brand-blue tracking-tighter">{pkg.price}</span>
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Includes:</p>
                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-yellow/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-brand-orange" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 font-medium text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-100">
                <a href="#booking" className={`block text-center w-full py-4 rounded-2xl font-bold text-sm transition-all ${pkg.popular ? 'bg-brand-orange text-white hover:bg-brand-orange/90 shadow-lg shadow-brand-orange/20 hover:-translate-y-1' : 'bg-brand-light text-brand-blue hover:bg-slate-200 hover:-translate-y-1'}`}>
                  Choose Package
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
