"use client"; // <--- Add this line at the top

import { Search, UserCircle, Mail, Laptop } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <header className="w-full z-50">
      {/* Top Utility Bar */}
      <div className="w-full bg-surface text-primary py-2 border-b border-outline-variant/30 hidden md:block">
        <div className="max-w-screen-2xl mx-auto px-12 flex justify-end items-center space-x-6 text-[11px] font-medium uppercase tracking-widest">
          <a className="hover:text-tertiary-fixed-dim transition-colors" href="#">E-Learning</a>
          <span className="w-px h-3 bg-primary/20"></span>
          <a className="hover:text-tertiary-fixed-dim transition-colors" href="#">Student Portal</a>
          <span className="w-px h-3 bg-primary/20"></span>
          <a className="hover:text-tertiary-fixed-dim transition-colors" href="#">Staff Email</a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full h-20 sticky top-0 bg-white dark:bg-primary z-50 flex items-center border-b border-outline-variant/10 shadow-lg shadow-primary/10">
        <div className="flex justify-between items-center w-full px-12 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-headline font-bold text-primary dark:text-white uppercase tracking-wider">
            SINU
          </div>
          
          <div className="hidden md:flex items-center space-x-8 font-headline text-lg tracking-tight">
            <a className="text-tertiary-fixed-dim border-b-2 border-tertiary-fixed-dim pb-1 font-bold" href="#">Admissions</a>
            <a className="text-on-surface/70 dark:text-white/70 hover:text-tertiary-fixed-dim transition-colors duration-300" href="#">Academics</a>
            <a className="text-on-surface/70 dark:text-white/70 hover:text-tertiary-fixed-dim transition-colors duration-300" href="#">Research</a>
            <a className="text-on-surface/70 dark:text-white/70 hover:text-tertiary-fixed-dim transition-colors duration-300" href="#">Campus Life</a>
            <a className="text-on-surface/70 dark:text-white/70 hover:text-tertiary-fixed-dim transition-colors duration-300" href="#">About</a>
          </div>

          <div className="flex items-center space-x-6">
            <button className="p-2 hover:bg-blue-50/50 rounded-full transition-colors text-primary">
              <Search className="w-5 h-5" />
            </button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2.5 rounded font-label text-sm font-bold uppercase tracking-widest transition-all"
            >
              Apply Now
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
}