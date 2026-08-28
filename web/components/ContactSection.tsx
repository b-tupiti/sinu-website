import { MapPin, Phone, Mail, Share2, Share } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="relative bg-primary py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000')] bg-cover bg-center grayscale"></div>
      
      <div className="relative z-10 max-w-screen-2xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="bg-white p-12 rounded-lg editorial-shadow">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <h2 className="font-headline text-3xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-on-surface-variant text-sm mb-6">Have questions? Reach out to our dedicated support team in the Solomon Islands.</p>
            </div>
            <div className="w-full md:w-64 h-48 rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Map of Solomon Islands showing SINU Kukum campus"
                src="https://www.openstreetmap.org/export/embed.html?bbox=155%2C-13%2C168%2C-5&layer=mapnik&marker=-9.4292%2C159.9741"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Full Name</label>
              <input className="w-full border-b-2 border-outline-variant bg-transparent py-2 focus:border-secondary outline-none transition-colors" type="text" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Email Address</label>
              <input className="w-full border-b-2 border-outline-variant bg-transparent py-2 focus:border-secondary outline-none transition-colors" type="email" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Message</label>
              <textarea className="w-full border-b-2 border-outline-variant bg-transparent py-2 focus:border-secondary outline-none transition-colors resize-none" rows={4}></textarea>
            </div>
            <button className="w-full bg-primary text-white py-4 font-bold uppercase tracking-widest rounded hover:bg-secondary transition-colors">Send Inquiry</button>
          </form>
        </div>
        
        <div className="text-white flex flex-col justify-center">
          <h2 className="font-headline text-4xl font-bold mb-8">Visit Our Campus</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-tertiary-fixed-dim w-6 h-6 mt-1" />
              <div>
                <p className="font-bold text-lg">Kukum Campus (Main)</p>
                <p className="text-white/70">P.O. Box R113, Honiara, Solomon Islands</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-tertiary-fixed-dim w-6 h-6 mt-1" />
              <div>
                <p className="font-bold text-lg">Phone</p>
                <p className="text-white/70">+677 30111 / +677 42600</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-tertiary-fixed-dim w-6 h-6 mt-1" />
              <div>
                <p className="font-bold text-lg">Email</p>
                <p className="text-white/70">enquiries@sinu.edu.sb</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex gap-4">
            <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
              <Share2 className="w-4 h-4" />
            </a>
            <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
              <Share className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
