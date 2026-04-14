import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Faculties from "@/components/Faculties";

export default function FacultiesOverviewPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow bg-surface">
        <div className="pt-32 pb-16 bg-primary">
          <div className="max-w-screen-2xl mx-auto px-12 text-center">
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-white mb-6">Our Faculties</h1>
            <p className="max-w-2xl mx-auto text-white/80 font-label text-lg">
              World-class education delivered through diverse and specialized disciplines, tailored to meet the needs of the Solomon Islands and tackle global challenges.
            </p>
          </div>
        </div>
        <div className="-mt-12 bg-surface rounded-t-3xl relative z-10">
          <Faculties />
        </div>
      </main>
      <Footer />
    </div>
  );
}
