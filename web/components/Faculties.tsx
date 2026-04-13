"use client"; // <--- Add this line at the top
import { motion } from 'motion/react';

const faculties = [
  {
    title: 'Nursing & Health',
    desc: 'Advancing healthcare through rigorous clinical practice and research.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6iyr5ANgs-2JiPRFI7bq9-7PIgfsCToeAcGloPE61-Q2o2WbiB0OpoDaVMHaWYkT2Z6VQoP9O-OJGHEwtIkJ53N3K-TmxNsgUece_PoVcVbq8yjXBCHNAyw1dK5DFirUuxxOSI3xhB0C9QUmXq3m8TvubRDo9UdbnpqrXEA2ntwB-U4kxRyNAsZZi-S4rcM7tYNMdcKbQkiPlDOyenNdqEaON0JWUFqpTXqJMi32cIzE0Zlh4AbcYgerQlvl-GvWv3rv6mqOiD_0'
  },
  {
    title: 'Science & Technology',
    desc: 'Driving innovation in environmental science and information technology.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9SHZ1hnxNsMi6jevm_CxnsLCMd6pKHW5p5H6Og5fHYRs-5JC7ff4P5g55mKv3umw4P82AnB4mCzP3GQR0J-FrJfqd7OddaNUhgBS89n98nI79VjG0aqqRv8SL2_O2Lx76IIDE7376YunN88dpoq2gkRyTYkCvBgdhMkmDQ4WL2AUvFIZPCkJhrkbgn-teTtGyOoh6_lDCKiGtywk7BBx3FbKjn8yMCt54uukSHaY9JiDMMNQxaxinyAkzStxeEUdKzWqPR4deuc4'
  },
  {
    title: 'Education',
    desc: 'Preparing the next generation of educators for Solomon Islands.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB4e4y6yA3eeZ1KcGzqLrOqQbAp6IzPratitrYaKMTxOxUgBaLhxqUldqsA2r7x3g_nQKYiYekK4HTnlfTUyxHOHWj1dMOuzxvaup_6y-8eWGkKrLPc2AR46Im_j7sb7zYoZZ8klX5wNmWlEKaBJq13H8k0XoAdoX4utyxowFhhWbRhWnEzASeAAhcPQclWH4JaYchPiwat-R-F_UmHI-UHdjnzxEUFRrlQeHH_NvVU22w7L8VUVRCamYn6FkoyRVveVYIyxkc2Q4'
  }
];

export default function Faculties() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-12 text-center mb-16">
        <h2 className="font-headline text-4xl font-bold mb-4">Explore Our Faculties</h2>
        <p className="max-w-2xl mx-auto text-on-surface-variant">Diverse disciplines tailored for the future needs of the Solomon Islands workforce and global challenges.</p>
      </div>
      
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faculties.map((faculty, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-primary cursor-pointer"
            >
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
                alt={faculty.title} 
                src={faculty.img}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="font-headline text-2xl text-white mb-2">{faculty.title}</h3>
                <p className="text-white/70 text-sm mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {faculty.desc}
                </p>
                <a className="text-tertiary-fixed-dim font-bold uppercase tracking-widest text-xs" href="#">Learn More →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
