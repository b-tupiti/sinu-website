import { Search } from 'lucide-react';

export default function SearchSection() {
  return (
    <section className="relative z-20 -mt-24 pb-12">
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="bg-white p-8 md:p-12 rounded-lg editorial-shadow">
          <div className="mb-8">
            <h2 className="font-headline text-3xl font-bold text-primary mb-2">Find Your Course</h2>
            <p className="text-on-surface-variant font-body">Explore our wide range of academic programs across five faculties in the Solomon Islands.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-5 h-5" />
              <input 
                className="w-full pl-12 pr-4 py-5 bg-surface-container-low border border-outline-variant/30 rounded focus:border-secondary focus:ring-0 outline-none transition-all placeholder:text-on-surface-variant/50" 
                placeholder="Search for courses, majors, or subjects..." 
                type="text" 
              />
            </div>
            <div className="lg:w-64">
              <select className="w-full py-5 px-4 bg-surface-container-low border border-outline-variant/30 rounded focus:border-secondary focus:ring-0 outline-none transition-all appearance-none cursor-pointer">
                <option disabled defaultValue={'d'}>Study Level</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
                <option>TVET</option>
              </select>
            </div>
            <button className="bg-primary-container text-white px-12 py-5 rounded font-headline font-bold uppercase tracking-widest hover:bg-primary transition-colors shadow-md">
              Search
            </button>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-sm font-bold text-primary uppercase tracking-widest">Trending:</span>
            {['Nursing', 'Information Technology', 'Fisheries', 'Climate Change'].map((tag) => (
              <a 
                key={tag}
                className="px-4 py-1.5 bg-surface-container-high rounded-full text-sm font-medium hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-colors" 
                href="#"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
