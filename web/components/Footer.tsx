export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-primary w-full pt-16 pb-8 border-t-0 font-body text-sm tracking-wide">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 py-16 w-full max-w-screen-2xl mx-auto">
        <div className="col-span-1">
          <div className="text-xl font-headline font-black text-primary dark:text-white mb-4 uppercase tracking-wider">SINU</div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Advancing Excellence through Education, Research, and Innovation for a Sustainable Solomon Islands.
          </p>
        </div>
        
        <div>
          <h4 className="text-primary dark:text-tertiary-fixed-dim uppercase tracking-[0.2em] font-bold mb-6">University</h4>
          <ul className="space-y-3">
            <li><a className="text-slate-600 dark:text-slate-300 hover:underline decoration-tertiary-fixed-dim underline-offset-4 transition-all" href="#">Academic Calendar</a></li>
            <li><a className="text-slate-600 dark:text-slate-300 hover:underline decoration-tertiary-fixed-dim underline-offset-4 transition-all" href="#">Governance</a></li>
            <li><a className="text-slate-600 dark:text-slate-300 hover:underline decoration-tertiary-fixed-dim underline-offset-4 transition-all" href="#">Vacancies</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-primary dark:text-tertiary-fixed-dim uppercase tracking-[0.2em] font-bold mb-6">Resources</h4>
          <ul className="space-y-3">
            <li><a className="text-slate-600 dark:text-slate-300 hover:underline decoration-tertiary-fixed-dim underline-offset-4 transition-all" href="#">Library Services</a></li>
            <li><a className="text-slate-600 dark:text-slate-300 hover:underline decoration-tertiary-fixed-dim underline-offset-4 transition-all" href="#">Campus Map</a></li>
            <li><a className="text-slate-600 dark:text-slate-300 hover:underline decoration-tertiary-fixed-dim underline-offset-4 transition-all" href="#">Alumni</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-primary dark:text-tertiary-fixed-dim uppercase tracking-[0.2em] font-bold mb-6">Legal</h4>
          <ul className="space-y-3">
            <li><a className="text-slate-600 dark:text-slate-300 hover:underline decoration-tertiary-fixed-dim underline-offset-4 transition-all" href="#">Privacy Policy</a></li>
            <li><a className="text-slate-600 dark:text-slate-300 hover:underline decoration-tertiary-fixed-dim underline-offset-4 transition-all" href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-screen-2xl mx-auto px-12 mt-16 text-center md:text-left border-t border-slate-200 dark:border-white/10 pt-8">
        <p className="text-slate-600 dark:text-slate-300/40 text-xs">
          © {new Date().getFullYear()} Solomon Islands National University. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
