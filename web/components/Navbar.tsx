"use client"; // <--- Add this line at the top

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, UserCircle, Mail, Laptop } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const navItems = [
  { label: 'Admissions', href: '/admissions' },
  { label: 'Academics', href: '/academics' },
  { label: 'Research', href: '/research' },
  { label: 'Campus Life', href: '/campus-life' },
];

const aboutLinks = [
  { label: 'History of SINU', href: '/about/history' },
  { label: 'Office of the Vice Chancellor', href: '/about/vice-chancellor' },
  { label: 'Executive Governance', href: '/about/executive-governance' },
  { label: 'Corporate Departments', href: '/about/corporate-departments' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

interface NavbarProps {
  /** Position the header absolutely so the following hero can extend full viewport height underneath. Keeps the opaque background. */
  overlay?: boolean;
}

export default function Navbar({ overlay = false }: NavbarProps) {
  const pathname = usePathname();
  const [aboutOpen, setAboutOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const aboutActive = aboutLinks.some((l) => isActive(l.href));

  // Close on click outside or Escape.
  useEffect(() => {
    if (!aboutOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setAboutOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAboutOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [aboutOpen]);

  const activeClass = 'border-tertiary-fixed-dim text-tertiary-fixed-dim font-bold';
  const inactiveClass = 'border-transparent hover:border-tertiary-fixed-dim text-on-surface dark:text-white hover:text-tertiary-fixed-dim';

  const headerClass = overlay ? 'absolute inset-x-0 top-0 w-full z-50' : 'w-full z-50';

  return (
    <header className={headerClass}>
      {/* Top Utility Bar */}
      <div className="w-full bg-white dark:bg-primary text-primary dark:text-white py-4 border-b border-outline-variant/10 hidden md:block">
        <div className="max-w-screen-2xl mx-auto px-12 flex justify-end items-center space-x-6 text-[10px] font-medium lowercase">
          <a className="hover:text-tertiary-fixed-dim transition-colors" href="#">e-learning</a>
          <span className="w-px h-3 bg-primary/20 dark:bg-white/20"></span>
          <a className="hover:text-tertiary-fixed-dim transition-colors" href="#">student portal</a>
          <span className="w-px h-3 bg-primary/20 dark:bg-white/20"></span>
          <a className="hover:text-tertiary-fixed-dim transition-colors" href="#">staff email</a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav ref={wrapperRef} className={`w-full h-20 ${overlay ? '' : 'sticky top-0'} bg-white dark:bg-primary z-50 flex items-stretch border-b border-outline-variant/10 shadow-2xl shadow-black/30 relative`}>
        <div className="flex justify-between items-center w-full h-full px-12 max-w-screen-2xl mx-auto">
          <Image
            src="/sinu-logo-revamped.svg"
            alt="SINU"
            width={320}
            height={87}
            className="h-14 w-auto"
            priority
          />

          <div className="hidden md:flex items-stretch self-stretch h-full space-x-8 font-headline text-xl font-semibold tracking-tight">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center h-full border-b-2 transition-colors duration-300 ${isActive(item.href) ? activeClass : inactiveClass}`}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setAboutOpen((v) => !v)}
              className={`flex items-center h-full border-b-2 transition-colors duration-300 ${aboutOpen || aboutActive ? activeClass : inactiveClass}`}
              aria-expanded={aboutOpen}
              aria-haspopup="menu"
            >
              About
            </button>
          </div>

          <div className="flex items-center space-x-6">
            <button className="p-2 hover:bg-blue-50/50 rounded-full transition-colors text-primary">
              <Search className="w-5 h-5" />
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-tertiary-fixed-dim text-primary px-6 py-2.5 rounded font-label text-sm font-bold uppercase tracking-widest transition-all"
            >
              Apply Now
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {aboutOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              role="menu"
              className="absolute left-0 right-0 top-full bg-white dark:bg-primary border-b border-outline-variant/20 shadow-2xl shadow-primary/10"
            >
              <div className="max-w-screen-2xl mx-auto px-12 py-8 grid grid-cols-3 gap-x-12 gap-y-2">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setAboutOpen(false)}
                    className={`text-sm py-3 border-b border-outline-variant/10 transition-colors ${isActive(link.href) ? 'text-tertiary-fixed-dim font-bold' : 'text-on-surface/80 dark:text-white/80 hover:text-tertiary-fixed-dim'}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
