import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Mail, User, Clock, ArrowRight } from 'lucide-react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '1 Month Package',
    courseType: 'Adults',
    preferredDate: '',
    preferredTime: '',
  });

  const packages = [
    'Trial Class (Free)',
    '1 Month Package',
    '2 Months Package',
    '3 Months Package',
    '4 Months Package',
    '5 Months Package',
    '6 Months Package',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `Hello Box Obrolan! I would like to book a class.
    
*Name*: ${formData.name}
*Email*: ${formData.email}
*Phone*: ${formData.phone}
*Package*: ${formData.package}
*Course Type*: ${formData.courseType}
*Preferred Date*: ${formData.preferredDate}
*Preferred Time*: ${formData.preferredTime}

Please let me know the next steps!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285716635027?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-24 bg-white relative" id="booking">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light rounded-l-[100px] -z-10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black font-heading text-brand-blue mb-6 tracking-tighter">
                Book Your Class <span className="text-brand-orange">Now</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Ready to improve your English? Fill out the form to book your free trial class or choose a package. Our team will get back to you shortly to confirm your schedule.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light flex justify-center items-center text-brand-orange">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue">Flexible Schedule</h4>
                    <p className="text-sm text-slate-500">Choose a time that works for you.</p>
                  </div>
                </div>
                
                 <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light flex justify-center items-center text-brand-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue">Quick Response</h4>
                    <p className="text-sm text-slate-500">We'll confirm via WhatsApp.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-7/12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-brand-blue/5 border border-slate-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <User size={18} />
                      </div>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 bg-brand-light/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone / WhatsApp</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Phone size={18} />
                      </div>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 bg-brand-light/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                        placeholder="+62 812 3456 7890"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <Mail size={18} />
                    </div>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 bg-brand-light/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Select Package</label>
                    <select 
                      name="package"
                      value={formData.package}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-brand-light/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all appearance-none"
                    >
                      {packages.map(pkg => (
                        <option key={pkg} value={pkg}>{pkg}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Course Type</label>
                    <select 
                      name="courseType"
                      value={formData.courseType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-brand-light/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all appearance-none"
                    >
                      <option value="Adults">Adults</option>
                      <option value="Kids">Kids</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Preferred Date</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Calendar size={18} />
                      </div>
                      <input 
                        type="date" 
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-11 pr-4 py-3 bg-brand-light/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Preferred Time</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Clock size={18} />
                      </div>
                      <input 
                        type="time" 
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 bg-brand-light/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-brand-blue/20 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Send Booking Request <ArrowRight size={20} />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
