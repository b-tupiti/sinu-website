import { Search } from 'lucide-react';

export default function SearchSection() {
  return (
    <section className="w-full px-6 sm:px-12 -mt-24 relative z-20">
      <div className="w-full max-w-screen-2xl mx-auto bg-white border border-outline-variant/30 py-10 px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-8">

          <div className="shrink-0 text-center lg:text-left">
            <h2 className="font-headline text-lg md:text-xl font-bold text-primary">Find a course</h2>
            <p className="text-on-surface/70 font-label text-xs mt-1">Search our extensive program directory.</p>
          </div>

          <div className="flex-1 flex flex-col md:flex-row gap-3 w-full">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 w-4 h-4" />
              <input
                className="w-full pl-11 pr-4 py-3 bg-surface border border-outline-variant/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/50 font-label text-primary text-sm"
                placeholder="Search for courses, majors, or subjects..."
                type="text"
              />
            </div>
            <div className="md:w-56 relative">
              <select className="w-full h-full py-3 px-4 bg-surface border border-outline-variant/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none cursor-pointer font-label text-primary text-sm">
                <option value="all">All Study Levels</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="tvet">TVET</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
            <button className="bg-primary text-white px-8 py-3 font-headline font-bold uppercase tracking-widest hover:bg-tertiary-fixed-dim hover:text-primary transition-all shadow-md active:scale-95 text-xs">
              Search
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
