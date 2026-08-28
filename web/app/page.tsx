"use client"
import AboutSection from "@/components/AboutSection";
import CampusGallery from "@/components/CampusGallery";
import ContactSection from "@/components/ContactSection";
import Faculties from "@/components/Faculties";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewsEvents from "@/components/NewsEvents";
import SearchSection from "@/components/SearchSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Hero />
        <SearchSection />
        <AboutSection />
        <Faculties />
        <NewsEvents />
        <CampusGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
