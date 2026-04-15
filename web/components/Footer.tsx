// Change Facebook to FacebookIcon if Facebook is missing
// Change Twitter to TwitterIcon (or X)
import { 
  MapPin, 
  Phone, 
  Mail, 
} from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-primary w-full border-t border-slate-200 dark:border-white/10 font-body">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/10">
          
          {/* Grid 1: Address, Contact, Talk to us button */}
          <div className="p-10 md:p-14 flex flex-col items-start">
            <div className="text-2xl font-headline font-black text-primary dark:text-white mb-6 uppercase tracking-wider">SINU</div>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8 font-label">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-tertiary-fixed-dim" />
                <p>PO Box R113, Kukum Campus<br/>Honiara, Solomon Islands</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 shrink-0 text-tertiary-fixed-dim" />
                <p>+677 23995 / 30111</p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 shrink-0 text-tertiary-fixed-dim" />
                <p>info@sinu.edu.sb</p>
              </div>
            </div>

            <button className="bg-tertiary-fixed-dim text-primary px-6 py-3 rounded font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors shadow-md mt-auto">
              Talk to us
            </button>
          </div>
          
          {/* Grid 2: Links */}
          <div className="p-10 md:p-14">
            <h4 className="text-primary dark:text-white uppercase tracking-[0.2em] font-bold mb-8 text-xs opacity-50">University</h4>
            <ul className="space-y-5">
              <li><a className="text-slate-800 dark:text-white font-bold text-base hover:text-tertiary-fixed-dim dark:hover:text-tertiary-fixed-dim transition-colors" href="#">Academic Calendar</a></li>
              <li><a className="text-slate-800 dark:text-white font-bold text-base hover:text-tertiary-fixed-dim dark:hover:text-tertiary-fixed-dim transition-colors" href="#">Governance Structure</a></li>
              <li><a className="text-slate-800 dark:text-white font-bold text-base hover:text-tertiary-fixed-dim dark:hover:text-tertiary-fixed-dim transition-colors" href="#">Career Vacancies</a></li>
              <li><a className="text-slate-800 dark:text-white font-bold text-base hover:text-tertiary-fixed-dim dark:hover:text-tertiary-fixed-dim transition-colors" href="#">Research Centers</a></li>
            </ul>
          </div>
          
          {/* Grid 3: Links */}
          <div className="p-10 md:p-14">
            <h4 className="text-primary dark:text-white uppercase tracking-[0.2em] font-bold mb-8 text-xs opacity-50">Campus Life</h4>
            <ul className="space-y-5">
              <li><a className="text-slate-800 dark:text-white font-bold text-base hover:text-tertiary-fixed-dim dark:hover:text-tertiary-fixed-dim transition-colors" href="#">Library Services</a></li>
              <li><a className="text-slate-800 dark:text-white font-bold text-base hover:text-tertiary-fixed-dim dark:hover:text-tertiary-fixed-dim transition-colors" href="#">Student Accommodation</a></li>
              <li><a className="text-slate-800 dark:text-white font-bold text-base hover:text-tertiary-fixed-dim dark:hover:text-tertiary-fixed-dim transition-colors" href="#">Alumni Network</a></li>
              <li><a className="text-slate-800 dark:text-white font-bold text-base hover:text-tertiary-fixed-dim dark:hover:text-tertiary-fixed-dim transition-colors" href="#">Security & Support</a></li>
            </ul>
          </div>
          
          {/* Grid 4: Socials, Contact Button, Copyright */}
          <div className="p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h4 className="text-primary dark:text-white uppercase tracking-[0.2em] font-bold mb-8 text-xs opacity-50">Connect</h4>
              <div className="flex flex-wrap gap-3 mb-8">
      <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-primary dark:text-white hover:bg-tertiary-fixed-dim dark:hover:bg-tertiary-fixed-dim dark:hover:text-primary transition-all">
        <FaFacebookF className="w-4 h-4" />
      </a>
      <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-primary dark:text-white hover:bg-tertiary-fixed-dim dark:hover:bg-tertiary-fixed-dim dark:hover:text-primary transition-all">
        <FaTwitter className="w-4 h-4" />
      </a>
      <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-primary dark:text-white hover:bg-tertiary-fixed-dim dark:hover:bg-tertiary-fixed-dim dark:hover:text-primary transition-all">
        <FaInstagram className="w-4 h-4" />
      </a>
      <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-primary dark:text-white hover:bg-tertiary-fixed-dim dark:hover:bg-tertiary-fixed-dim dark:hover:text-primary transition-all">
        <FaLinkedinIn className="w-4 h-4" />
      </a>
    </div>
              
              <button className="w-full bg-transparent border-2 border-primary dark:border-white/20 text-primary dark:text-white px-6 py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition-colors text-center inline-block">
                Contact Us
              </button>
            </div>
            
            <div className="mt-12 text-slate-500 dark:text-slate-400 text-xs font-label leading-relaxed">
              © {new Date().getFullYear()} Solomon Islands National University. <br className="hidden xl:block"/>All rights reserved.
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
