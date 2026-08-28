"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "motion/react";

export default function FacultyScienceAndTechnologyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-primary flex items-center overflow-hidden">
          <Image
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30 mix-blend-overlay"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9SHZ1hnxNsMi6jevm_CxnsLCMd6pKHW5p5H6Og5fHYRs-5JC7ff4P5g55mKv3umw4P82AnB4mCzP3GQR0J-FrJfqd7OddaNUhgBS89n98nI79VjG0aqqRv8SL2_O2Lx76IIDE7376YunN88dpoq2gkRyTYkCvBgdhMkmDQ4WL2AUvFIZPCkJhrkbgn-teTtGyOoh6_lDCKiGtywk7BBx3FbKjn8yMCt54uukSHaY9JiDMMNQxaxinyAkzStxeEUdKzWqPR4deuc4"
            alt="Science and Technology"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/50 to-transparent"></div>
          <div className="max-w-screen-2xl mx-auto px-12 relative z-10 w-full flex items-center mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-tertiary-fixed-dim text-primary py-1 px-3 rounded uppercase tracking-widest text-xs font-bold">Faculty</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-white mb-6">Faculty of Science <br className="hidden md:block"/> & Technology</h1>
              <p className="max-w-2xl text-xl text-white/90 font-label">
                Driving innovation in environmental science, engineering, and information technology to build a sustainable future for the Solomon Islands.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-24 bg-surface relative">
          <div className="max-w-screen-2xl mx-auto px-12 flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-2/3">
              <h2 className="font-headline text-4xl font-bold text-primary mb-8 border-b-4 border-tertiary-fixed-dim inline-block pb-2">About The Faculty</h2>
              <div className="prose prose-lg text-on-surface-variant font-label space-y-6 max-w-none">
                <p className="text-lg leading-relaxed">
                  The Faculty of Science and Technology is dedicated to providing high-quality education and research opportunities in scientific and technical disciplines. We focus on areas that are critical to the development and sustainability of the region's unique environments and emerging industries.
                </p>
                <p className="text-lg leading-relaxed">
                  Through practical, hands-on learning and strong industry partnerships, our students graduate ready to tackle complex challenges in IT, environmental management, biology, and applied mathematics.
                </p>
              </div>

              {/* Departments Grid */}
              <h3 className="font-headline text-3xl font-bold text-primary mt-16 mb-8">Our Departments</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Computing & Information Technology",
                  "Environmental Studies",
                  "Applied Sciences",
                  "Mathematics & Physics",
                  "Forestry & Agriculture",
                  "Marine Science"
                ].map((dept, idx) => (
                  <motion.div 
                    whileHover={{ y: -5 }}
                    key={idx} 
                    className="p-8 bg-white rounded-xl shadow-sm border border-outline-variant/30 hover:border-tertiary-fixed-dim transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-blue-50 text-tertiary-fixed-dim rounded-full flex items-center justify-center mb-6 overflow-hidden">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h4 className="font-headline text-xl font-bold text-primary group-hover:text-tertiary-fixed-dim transition-colors">Department of <br/> {dept}</h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="p-10 bg-primary text-white rounded-2xl shadow-xl transform lg:-translate-y-32 relative z-20 border border-white/10">
                <div className="w-20 h-20 bg-tertiary-fixed-dim rounded-full mb-6 flex items-center justify-center text-primary text-2xl font-bold shadow-lg">
                  JD
                </div>
                <h3 className="font-headline text-2xl font-bold mb-6">Dean's Message</h3>
                <p className="italic text-white/80 font-label leading-relaxed mb-8">
                  "Welcome to a faculty where innovation meets nature. We empower our students with the skills required to navigate the technological advancements of the 21st century while preserving the rich biodiversity of the Pacific."
                </p>
                <div className="pt-6 border-t border-white/10">
                  <div className="font-bold text-tertiary-fixed-dim text-lg">Dr. John Doe</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest mt-2 font-bold">Dean, Faculty of Science & Technology</div>
                </div>
              </div>
              
              <div className="mt-8 p-10 bg-[#f8fafc] rounded-2xl border border-outline-variant/30">
                <h3 className="font-headline text-2xl font-bold text-primary mb-6">Quick Links</h3>
                <ul className="space-y-4 font-label text-base font-medium">
                  {['Undergraduate Programs', 'Postgraduate Programs', 'Faculty Directory', 'Research Initiatives', 'Contact Admissions'].map((link, i) => (
                    <li key={i}>
                      <a href="#" className="flex items-center gap-3 text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors group">
                        <span className="w-6 h-px bg-outline-variant group-hover:bg-tertiary-fixed-dim transition-colors"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
