import { MapPin } from 'lucide-react';

const newsItems = [
  {
    category: 'Research',
    title: 'New Marine Research Grant Secured for Climate Mitigation',
    date: 'Nov 12, 2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtdGwJ91SZJ94kji9kQ4tePdKxyCXxzRoiU0ek8xh71wOQmnVrG0WxHeDN6t10qk3r7S-n5LV6p_NxtckiWKCD1bAhPDCXBy-CyhkVFzj6g_0kVkXhptdEGyHtVMaRhnRosCo_-b-U79N_-HkocAvSZK83VLaRaWH2mJ5iwI8c68pv6pMHyApWyJBfRTYzbFkkbH1SK91t7_uwHV6JWX15cAX7Waf19sTgECe7J3Sy40CCSImYP3TMq6lEShey_Ch7bUyce-f_LwU'
  },
  {
    category: 'Academic',
    title: 'SINU Hosts Annual Regional Leadership Conference',
    date: 'Nov 08, 2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUlhexZn8GiHm6ai7AGVnLoRJ6oElp8JxKpwkcKxetJIRaVKz48OlfpeAo_ErXZLuM75UHXyF-x9VsNWQb5gKiAFXMJmRYTumWMa-yhPxJ1mczfw3ZI1h5y2CiFKfFCbKld1oyK7ipixWQ8qPAQJdxS1R7teaBjuCxzmTahCbTXu_g_qYnGW_oxsjlZfGMy1jXJctH_cXyC21i6TNsfys9P7P3l4lCHyJdZ5Gk-4Q1xzrZnMTX437xkUqt8FJpKenIb204eQoWQqE'
  },
  {
    category: 'Campus Life',
    title: 'Applications Now Open for Semester 1, 2026 Admissions',
    date: 'Oct 29, 2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-5ph-VcBVQ6bCCJgUZ2O35ZFXeA3YTBhJkFjOI6lmHLXbO4sWEx3X7kbSttje6MdY01uFBMWe3cvH5nPqvwXISTg08AN4W49p7UwqfPI50GppyPkWI4-vSYv6CGkiwgnzfH6Iq-YJ0CN5uwZsNu3em27vIgBAAZe7ukjP_8JTCK928CEaI2WKUAgWa8-b6dA74e-mLZsR3dds8X_FACcrP-GbMLhOg9bQ3o-CJzWASsA82X23cabLc97fVnYtlNcxJJdkChwPs5Q'
  }
];

const events = [
  {
    day: '22',
    month: 'Nov',
    title: 'Annual Faculty Open Day',
    location: 'Kukum Campus, Hall 1',
    isPrimary: true
  },
  {
    day: '05',
    month: 'Dec',
    title: 'Pacific Heritage Cultural Night',
    location: 'Multi-purpose Hall',
    isPrimary: false
  },
  {
    day: '14',
    month: 'Jan',
    title: 'Orientation Week 2026',
    location: 'All Campuses',
    isPrimary: false
  }
];

export default function NewsEvents() {
  return (
    <section className="py-24 bg-surface-container-highest">
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Latest News */}
          <div>
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-headline text-3xl font-bold">Latest News</h2>
              <a className="text-sm font-bold uppercase tracking-widest text-primary hover:text-secondary" href="#">View All</a>
            </div>
            <div className="space-y-8">
              {newsItems.map((news, idx) => (
                <div key={idx} className="group flex gap-6 items-start cursor-pointer">
                  <img 
                    className="w-32 h-32 object-cover rounded-lg" 
                    alt={news.title} 
                    src={news.img}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-1 block">{news.category}</span>
                    <h3 className="font-headline text-xl group-hover:text-secondary transition-colors">{news.title}</h3>
                    <p className="text-sm text-on-surface-variant mt-2">{news.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Upcoming Events */}
          <div>
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-headline text-3xl font-bold">Upcoming Events</h2>
            </div>
            <div className="space-y-4">
              {events.map((event, idx) => (
                <div key={idx} className="p-6 bg-white rounded-lg editorial-shadow flex gap-6 items-center">
                  <div className={`${event.isPrimary ? 'bg-primary text-white' : 'bg-primary/10 text-primary'} text-center p-4 rounded min-w-[80px]`}>
                    <span className="block text-2xl font-bold">{event.day}</span>
                    <span className="text-xs uppercase font-bold tracking-widest">{event.month}</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold">{event.title}</h3>
                    <p className="text-sm text-on-surface-variant flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {event.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
