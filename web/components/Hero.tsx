"use client"; // <--- Add this line at the top
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <header className="relative w-full h-[70vh] min-h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="close up of a student studying at sinu" 
          className="w-full h-full object-cover scale-110 blur-sm brightness-50" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUHc9nr1z5J4fXoH7PGCJBHZ7AR9iQ3mn_AaiThKT7AC3fH9yJgjDEYwWKVFHsSdctQZ93ke0hUE9LBQ26L8zGKYa7-oS67Ibqi3EVLIBxpzrAfB9z3RFNbjucU8pCuLGtCR2XVNazN5QJCXUn98SuVpOA_QZvOM1NI2ULLk6miDOazbuObZxxU6xlVzV9aqLLc63l9Jq2X2lc27z_hpf9gY1YowO6TkefJQi94B21UNFKF29jn2Arqp3sF7_sGJch5vgS-wR8B24"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10"></div>
      </div>
      
      <div className="relative z-10 max-w-screen-2xl mx-auto px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[75%]"
        >
          <h1 className="font-headline text-6xl md:text-7xl text-white font-bold leading-tight mb-6 -ml-1">
            Empowering Your <br/>
            <span className="italic">Future</span> at SINU
          </h1>
          <p className="text-white text-2xl md:text-3xl font-semibold leading-relaxed mb-10">
            Advancing the frontier of knowledge in the Solomon Islands and the Pacific. Join a community dedicated to academic excellence and cultural heritage.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-tertiary-fixed-dim text-primary px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-lg"
            >
              Explore Research
            </motion.button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
