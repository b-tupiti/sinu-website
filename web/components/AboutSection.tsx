"use client"; // <--- Add this line at the top
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-surface-container-low relative overflow-hidden">
      <div className="heritage-pattern absolute inset-0"></div>
      <div className="max-w-screen-2xl mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative w-full aspect-4/5">
                <Image
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="rounded-lg editorial-shadow object-cover"
                  alt="diverse group of students sitting together in a modern campus outdoor lounge area sharing laptops and notes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBycn_jK5Gs6-msION1N7_0EdToF8LtJNRXBzlz1Ch4IMP2mPRGLtOLdGNQydodDCcttfIUufKy5Lpzr5RCZgxm1k9LZCxKAo0sdyYVFKenAyEUqltBrbdTVpLkiPsi6mM6M2NS_DfkqOX9UlVNHBvlUBMIHMEL3af23qV5CHOyZnJ3S5bq5wzZUAd7jxZgC-mnOd-Q4FOLSaE8xiPNmKE698ev3pD4FXnqrnLis49IfiXTby17OAiAmdd8rYrNQWCpTYvlpVgG1d4"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 p-8 bg-white max-w-xs rounded shadow-2xl"
              >
                <p className="italic text-primary font-headline text-lg leading-snug">
                  &quot;Our mission is to foster academic excellence while honoring our Pacific roots.&quot;
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <Image
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover grayscale"
                    alt="portrait of a professional pacific islander woman in academic attire"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6xVg6ONNC6kWHb1jNqgEEGbCUEkbG5V8KzFB9kohN4JRoHfpodUaM-Q7jKvgT_usl7FLy7TZ6IcMC0ghR_iOP4cg4XXhWSeqY30vuSj8jWUgrJrKuphHXz4EIRxUUmCvxvJQEbOqiHyVOWB3wZgHt22xeC0h2BqhhFaSF1LS6sKoTMnzKWyWNeekWftAxsc5Ety6uPSHSw1uKnRqT2Mv_mw9Wko1gzs7Moa_7lQogy6YcIOMLoCO-EUC5fKWGeieMjSJ6-ugMD7E"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold text-sm">Vice-Chancellor</p>
                    <p className="text-xs text-on-surface-variant">Office of the VC</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm block">Our Legacy</span>
            <h2 className="font-headline text-5xl font-bold leading-tight text-primary">A Legacy of <br/>Academic Excellence</h2>
            <p className="text-lg leading-relaxed text-on-surface/80">
              Since its inception, Solomon Islands National University has been the heart of higher education in the Solomon Islands. We pride ourselves on creating a transformative environment where traditional wisdom meets modern research.
            </p>
            <p className="text-lg leading-relaxed text-on-surface/80">
              From our five diverse faculties to our specialized research institutes, we are committed to providing the youth of Solomon Islands and the wider Pacific with the tools to build a resilient future.
            </p>
            <div className="pt-6">
              <a className="inline-flex items-center gap-2 group font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-all" href="#">
                Read the Strategic Plan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
