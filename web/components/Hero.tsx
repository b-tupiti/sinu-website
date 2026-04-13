"use client"; // <--- Add this line at the top
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <header className="relative w-full h-200 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="smiling Solomon Islands students on campus" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUHc9nr1z5J4fXoH7PGCJBHZ7AR9iQ3mn_AaiThKT7AC3fH9yJgjDEYwWKVFHsSdctQZ93ke0hUE9LBQ26L8zGKYa7-oS67Ibqi3EVLIBxpzrAfB9z3RFNbjucU8pCuLGtCR2XVNazN5QJCXUn98SuVpOA_QZvOM1NI2ULLk6miDOazbuObZxxU6xlVzV9aqLLc63l9Jq2X2lc27z_hpf9gY1YowO6TkefJQi94B21UNFKF29jn2Arqp3sF7_sGJch5vgS-wR8B24"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 via-primary/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-screen-2xl mx-auto px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Established 2013 | Solomon Islands
          </span>
          <h1 className="font-headline text-6xl md:text-7xl text-white font-bold leading-tight mb-6 -ml-1">
            Empowering Your <br/>
            <span className="text-tertiary-fixed-dim italic">Future</span> at SINU
          </h1>
          <p className="text-white/80 text-xl font-light leading-relaxed mb-10 max-w-lg">
            Advancing the frontier of knowledge in the Solomon Islands and the Pacific. Join a community dedicated to academic excellence and cultural heritage.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-primary text-white px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-primary-container transition-colors shadow-lg"
            >
              Explore Programs
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              Apply for 2026
            </motion.button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
