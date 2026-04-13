"use client"; // <--- Add this line at the top
import { UserCircle, Mail, Library, Laptop } from 'lucide-react';
import { motion } from 'motion/react';

const gateways = [
  {
    title: 'Student Portal',
    desc: 'Access registration, results, and student records.',
    icon: UserCircle,
    href: '#'
  },
  {
    title: 'Staff Email',
    desc: 'Corporate communication for SINU academic and staff.',
    icon: Mail,
    href: '#'
  },
  {
    title: 'Library',
    desc: 'Explore our extensive physical and digital collections.',
    icon: Library,
    href: '#'
  },
  {
    title: 'E-Learning',
    desc: 'Modern hybrid learning platform for all courses.',
    icon: Laptop,
    href: '#'
  }
];

export default function DigitalGateway() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-headline text-3xl font-bold">Digital Gateway</h2>
          <div className="h-px flex-1 bg-outline-variant/30 mx-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {gateways.map((item, idx) => (
            <motion.a 
              key={idx}
              whileHover={{ y: -5 }}
              className="group p-8 bg-white border border-outline-variant/10 rounded-lg editorial-shadow hover:bg-surface-container-low transition-all duration-300" 
              href={item.href}
            >
              <div className="w-12 h-12 rounded bg-primary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl mb-2">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
