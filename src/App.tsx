import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import PopularCourses from './components/PopularCourses';
import Pricing from './components/Pricing';
import BookingSection from './components/BookingSection';
import Tutors from './components/Tutors';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpreadsheetViewer from './components/SpreadsheetViewer';
import FormViewer from './components/FormViewer';
import CalendarViewer from './components/CalendarViewer';
import { User } from 'firebase/auth';
import { initAuth, googleSignIn, logout, getAccessToken } from './lib/auth';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    initAuth(
      (user, token) => {
        setUser(user);
        setToken(token);
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );
  }, []);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setToken(result.accessToken);
      }
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setToken(null);
  };

  return (
    <div className="min-h-screen bg-brand-light flex flex-col overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Spreadsheet Viewer (Only visible if logged in with token) */}
        {user && token && (
          <SpreadsheetViewer accessToken={token} />
        )}

        {/* Form Viewer */}
        {user && token && (
          <FormViewer accessToken={token} />
        )}

        {/* Calendar Viewer */}
        {user && token && (
          <CalendarViewer accessToken={token} />
        )}

        <Stats />
        <Features />
        <About />
        
        {/* Simple CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-brand-orange rounded-[40px] shadow-2xl shadow-brand-orange/20 p-12 md:p-24 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <h2 className="text-4xl md:text-6xl font-black font-heading text-white mb-6 relative z-10 tracking-tighter">
                READY TO IMPROVE YOUR ENGLISH?
              </h2>
              <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto relative z-10">
                Join thousands of students and start speaking English with confidence today.
              </p>
              <a href="#booking" className="inline-block bg-brand-yellow text-brand-blue border-2 border-transparent px-10 py-5 rounded-2xl font-bold text-lg hover:border-white hover:text-white hover:bg-transparent transition-all shadow-xl shadow-brand-blue/10 hover:-translate-y-1 relative z-10">
                Get Started for Free
              </a>
            </div>
          </div>
        </section>

        <PopularCourses />
        <Pricing />
        <BookingSection />
        <Tutors />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
