"use client";

import { useState, useEffect, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, BookOpen, Clock, ChevronRight, Loader2 } from "lucide-react";
import { searchCourses, Course } from "@/data/courses";
import { motion, AnimatePresence } from "motion/react";

export default function CoursesPage() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");
  const [isSearching, setIsSearching] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Initial load
  useEffect(() => {
    performSearch("", "All");
  }, []);

  const performSearch = async (searchQuery: string, searchLevel: string) => {
    setIsSearching(true);
    setHasSearched(true);
    try {
      const results = await searchCourses(searchQuery, searchLevel);
      setCourses(results);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    performSearch(query, level);
  };

  const handleQuickSearch = (tag: string) => {
    setQuery(tag);
    performSearch(tag, "All");
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      <main className="grow">
        {/* Header Section */}
        <div className="pt-32 pb-32 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuA9SHZ1hnxNsMi6jevm_CxnsLCMd6pKHW5p5H6Og5fHYRs-5JC7ff4P5g55mKv3umw4P82AnB4mCzP3GQR0J-FrJfqd7OddaNUhgBS89n98nI79VjG0aqqRv8SL2_O2Lx76IIDE7376YunN88dpoq2gkRyTYkCvBgdhMkmDQ4WL2AUvFIZPCkJhrkbgn-teTtGyOoh6_lDCKiGtywk7BBx3FbKjn8yMCt54uukSHaY9JiDMMNQxaxinyAkzStxeEUdKzWqPR4deuc4')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent pointer-events-none"></div>
          <div className="max-w-screen-2xl mx-auto px-12 text-center relative z-10">
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-white mb-6">Course Directory</h1>
            <p className="max-w-2xl mx-auto text-white/80 font-label text-lg">
              Explore undergraduate, postgraduate, and short technical programs to kickstart your career.
            </p>
          </div>
        </div>

        {/* Search Bar - Lifted over the header */}
        <div className="relative z-20 -mt-16 max-w-screen-xl mx-auto px-12">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl shadow-primary/5 border border-outline-variant/20">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-6 h-6" />
                <input 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 text-lg bg-surface-container-low border border-outline-variant/40 rounded-xl focus:border-tertiary-fixed-dim focus:ring-1 focus:ring-tertiary-fixed-dim outline-none transition-all placeholder:text-on-surface-variant/50 font-label" 
                  placeholder="Search for 'Nursing', 'IT', or 'Management'..." 
                  type="text" 
                />
              </div>
              <div className="md:w-64 relative">
                <select 
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full h-full py-5 px-6 text-lg bg-surface-container-low border border-outline-variant/40 rounded-xl focus:border-tertiary-fixed-dim focus:ring-1 focus:ring-tertiary-fixed-dim outline-none transition-all appearance-none cursor-pointer font-label text-on-surface"
                >
                  <option value="All">All Study Levels</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="TVET">TVET & Certificates</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-on-surface-variant/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
              <button 
                type="submit"
                disabled={isSearching}
                className="bg-primary text-white px-12 py-5 rounded-xl font-headline font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-md disabled:opacity-70 flex items-center justify-center gap-3 min-w-[200px]"
              >
                {isSearching ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Search Courses'}
              </button>
            </form>
            
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-primary uppercase tracking-widest mr-2">Trending:</span>
              {['Nursing', 'Information Technology', 'Agriculture', 'Education'].map((tag) => (
                <button 
                  key={tag}
                  onClick={(e) => { e.preventDefault(); handleQuickSearch(tag); }}
                  className="px-4 py-1.5 bg-blue-50 text-primary rounded-full text-sm font-medium hover:bg-tertiary-fixed-dim hover:text-white transition-colors border border-blue-100 cursor-pointer" 
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="max-w-screen-xl mx-auto px-12 py-20 min-h-[500px]">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-headline text-3xl font-bold text-primary">
              {isSearching ? "Searching..." : hasSearched && courses.length > 0 ? "Search Results" : hasSearched ? "No results found" : "All Courses"}
            </h2>
            {!isSearching && (
              <p className="text-on-surface-variant font-label border border-outline-variant/30 px-4 py-1 rounded-full text-sm bg-white">
                Showing <strong>{courses.length}</strong> courses
              </p>
            )}
          </div>

          <AnimatePresence mode="wait">
            {isSearching ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-24"
              >
                <Loader2 className="w-12 h-12 text-tertiary-fixed-dim animate-spin mb-4" />
                <p className="text-on-surface-variant font-label">Connecting to extensive database...</p>
              </motion.div>
            ) : courses.length > 0 ? (
              <motion.div 
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {courses.map((course, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(idx * 0.05, 0.5) }} /* Cap delay so it doesn't take too long */
                    key={course.id} 
                    className="bg-white rounded-2xl border border-outline-variant/30 hover:border-tertiary-fixed-dim hover:shadow-xl hover:shadow-tertiary-fixed-dim/10 transition-all flex flex-col group overflow-hidden cursor-pointer"
                  >
                    <div className="p-6 md:p-8 grow">
                      <div className="flex items-start justify-between mb-4">
                        <span className="px-3 py-1 bg-surface text-xs font-bold text-primary uppercase tracking-widest rounded border border-outline-variant/30">
                          {course.id}
                        </span>
                        <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border ${
                          course.level === 'Undergraduate' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                          course.level === 'Postgraduate' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                          'bg-orange-50 text-orange-700 border-orange-200'
                        }`}>
                          {course.level}
                        </span>
                      </div>
                      
                      <h3 className="font-headline text-xl font-bold text-primary mb-3 leading-snug group-hover:text-tertiary-fixed-dim transition-colors">
                        {course.title}
                      </h3>
                      
                      <p className="text-on-surface-variant font-label text-sm leading-relaxed mb-6 line-clamp-3">
                        {course.description}
                      </p>
                      
                      <div className="space-y-3 pt-6 border-t border-outline-variant/20">
                        <div className="flex items-center text-sm font-label text-on-surface-variant">
                          <BookOpen className="w-4 h-4 mr-3 text-tertiary-fixed-dim shrink-0" />
                          <span className="truncate">{course.faculty}</span>
                        </div>
                        <div className="flex items-center text-sm font-label text-on-surface-variant">
                          <Clock className="w-4 h-4 mr-3 text-tertiary-fixed-dim shrink-0" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-8 pt-0 mt-auto">
                      <button className="w-full py-4 border-2 border-outline-variant/30 rounded-xl font-bold uppercase tracking-widest text-xs group-hover:border-tertiary-fixed-dim group-hover:bg-tertiary-fixed-dim group-hover:text-white transition-all flex items-center justify-center gap-2">
                        View Details <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24 bg-white rounded-2xl border border-outline-variant/30 border-dashed"
              >
                <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 text-on-surface-variant">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-2">No courses found</h3>
                <p className="text-on-surface-variant font-label max-w-md mx-auto">
                  We couldn't find any courses matching your search criteria. Try adjusting your keywords or study level filter.
                </p>
                <button 
                  onClick={(e) => { e.preventDefault(); setQuery(""); setLevel("All"); performSearch("", "All"); }}
                  className="mt-8 px-6 py-3 bg-primary text-white rounded font-bold uppercase tracking-widest text-xs hover:bg-tertiary-fixed-dim transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
