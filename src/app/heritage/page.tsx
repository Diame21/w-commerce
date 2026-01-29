import Image from "next/image";
import Link from "next/link";

export default function HeritagePage() {
  const milestones = [
    {
      year: "1505",
      title: "The First Portable Timepiece",
      description: "Peter Henlein of Nuremberg crafts the 'Nuremberg Egg', a drum-shaped pocket watch that marks the transition from stationary clocks to personal timepieces.",
      image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80"
    },
    {
      year: "1755",
      title: "The Golden Age of Mechanical Craft",
      description: "Jean-Marc Vacheron founds his workshop in Geneva, beginning a legacy of uninterrupted horological excellence and artistic perfection.",
      image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80"
    },
    {
      year: "1926",
      title: "Mastering the Elements",
      description: "The introduction of the first waterproof wristwatch redefines the utility of watches, making them essential tools for explorers and aviators.",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80"
    },
    {
      year: "Modern Era",
      title: "The Pinnacle of High Horology",
      description: "Today, watches transcend timekeeping. They are symbols of heritage, engineering marvels, and wearable art that carry legacies across generations.",
      image: "https://images.unsplash.com/photo-1587836374828-4dbaba94ee0e?w=800&q=80"
    }
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1495856458515-0637185db551?w=1600&q=80"
            alt="Horology Craftsmanship"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-50 dark:to-zinc-950"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-[0.5em] mb-6 block fade-in">The W-Commerce Legacy</span>
          <h1 className="text-5xl sm:text-7xl font-black text-zinc-900 dark:text-white mb-8 tracking-tighter uppercase italic">
            OUR <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">HERITAGE</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto italic">
            "A watch is not merely a tool for measuring seconds; it is a repository of history, a masterpiece of physics, and a testament to human ingenuity."
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] mb-4">The Philosophy</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mb-8 tracking-tight uppercase">THE ART OF PERPETUAL MOTION</h3>
            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-light">
              <p>
                At W-Commerce, our journey began with a simple yet profound realization: time is the most precious commodity. For centuries, the craft of horology has sought to capture its essence within the confines of a mechanical movement.
              </p>
              <p>
                We don't just sell watches; we curate legacies. Each timepiece in our collection represents a milestone in the evolution of engineering—from the early pocket watches that guided navigators to the tourbillons that defy gravity today.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-3xl">
            <Image 
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1000&q=80"
              alt="Luxury Movement"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="space-y-32">
          {milestones.map((m, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1 space-y-6">
                <span className="text-4xl font-black text-indigo-500/20 italic">{m.year}</span>
                <h4 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">{m.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-light italic">
                  {m.description}
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
                  <Image 
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Section */}
        <div className="mt-40 text-center bg-zinc-900 rounded-[3rem] p-12 sm:p-24 relative overflow-hidden shadow-3xl">
          <div className="absolute inset-0 z-0 opacity-20">
             <Image 
              src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1600&q=80"
              alt="Watch Internal"
              fill
              className="object-cover grayscale"
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase italic">YOUR LEGACY AWAITS</h3>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed font-light italic">
              Become a part of the history of time. Explore our collection of masterfully crafted timepieces and find the watch that will carry your story forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop" className="bg-white text-black px-12 py-5 rounded-full font-black text-lg hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10 uppercase italic tracking-widest">
                EXPLORE CATALOG
              </Link>
              <Link href="/" className="bg-white/10 backdrop-blur-xl text-white border border-white/20 px-12 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all active:scale-95 uppercase italic tracking-widest">
                BACK TO HOME
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
