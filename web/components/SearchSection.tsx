import { Search } from 'lucide-react';

export default function SearchSection() {
  return (
    <section className="w-full bg-primary py-8 relative z-20 shadow-xl">
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          
          <div className="shrink-0 text-center lg:text-left">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-white">Find a course</h2>
            <p className="text-white/80 font-label text-sm mt-1">Search our extensive program directory.</p>
          </div>
          
          <div className="flex-1 flex flex-col md:flex-row gap-4 w-full">
            <div className="flex-1 relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 w-5 h-5" />
              <input 
                className="w-full pl-14 pr-4 py-4 md:py-5 bg-white rounded-md focus:ring-2 focus:ring-tertiary-fixed-dim outline-none transition-all placeholder:text-on-surface-variant/50 font-label text-primary shadow-inner text-lg" 
                placeholder="Search for courses, majors, or subjects..." 
                type="text" 
              />
            </div>
            <div className="md:w-64 relative">
              <select className="w-full h-full py-4 md:py-5 px-5 bg-white rounded-md focus:ring-2 focus:ring-tertiary-fixed-dim outline-none transition-all appearance-none cursor-pointer font-label text-primary shadow-inner text-lg">
                <option value="all">All Study Levels</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="tvet">TVET</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
            <button className="bg-tertiary-fixed-dim text-primary px-10 py-4 md:py-5 rounded-md font-headline font-bold uppercase tracking-widest hover:bg-white transition-all shadow-md active:scale-95 text-sm">
              Search
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
