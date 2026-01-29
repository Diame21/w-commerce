import ProductItem from "@/components/ProductItem";
import connectDB from "@/lib/db";
import ProductModel from "@/lib/models/product.model";
import data from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

export default async function Home() {
  await connectDB();
  
  let dbProducts: Product[] = [];
  try {
    dbProducts = (await ProductModel.find({}).lean()) as unknown as Product[];
  } catch (e) {
    console.error("Failed to fetch products from DB", e);
  }

  // Focus only on watches from DB, or use mock watch data
  const products = dbProducts.length > 0 
    ? JSON.parse(JSON.stringify(dbProducts)).filter((p: Product) => p.category.toLowerCase().includes('watch') || ['luxury', 'classic', 'sports', 'minimalism'].includes(p.category.toLowerCase()))
    : data.products;

  const featuredProducts = products.filter((p: Product) => p.isFeatured).slice(0, 4);
  const latestProducts = products.slice(0, 8);

  return (
    <div className="pb-20">
      {/* 1. Hero Section - Specialized for Watches */}
      <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1600&q=80"
            alt="Luxury Watch Hero"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <span className="inline-block py-1 px-4 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-xs font-black uppercase tracking-[0.2em] mb-6 fade-in">
            Exclusive Timepieces
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            MASTER YOUR <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400 uppercase">Legacy.</span>
          </h1>
          <p className="max-w-xl text-lg sm:text-xl text-zinc-300 mb-10 leading-relaxed font-light">
            Luxury is not just seen; it&apos;s worn. Explore our collection of world-class 
            exclusive wrist watches designed for the modern connoisseur of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link href="#shop" className="bg-white text-black px-12 py-5 rounded-full font-black text-lg hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10">
              EXPLORE COLLECTION
            </Link>
            <Link href="/heritage" className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-12 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all active:scale-95">
              OUR HERITAGE
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Curated Categories - Watch Specific */}
      <section className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] mb-4">Curated For You</h2>
          <h3 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">ELEGANCE IN EVERY SECOND</h3>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {data.categories.map((cat) => (
            <Link key={cat.name} href={`/category/${cat.name.toLowerCase()}`} className="group relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-2xl font-black uppercase tracking-tight mb-1">{cat.name}</p>
                <span className="text-indigo-400 text-[10px] uppercase tracking-[0.2em] font-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">Discover Series {"->"}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Featured Section - Only Watches */}
      <section id="shop" className="bg-zinc-50 dark:bg-zinc-950 py-24 border-y border-zinc-200 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] mb-4">Signature Series</h2>
              <h3 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tight leading-none">FEATURED TIMEPIECES</h3>
            </div>
            <Link href="/shop" className="hidden sm:flex items-center gap-3 text-zinc-500 hover:text-indigo-600 font-bold transition-all group">
              VIEW CATALOG <span className="text-2xl transition-transform group-hover:translate-x-2">{"->"}</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredProducts.map((p: Product) => (
              <ProductItem key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Luxury Promotional Banner */}
      <section className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] overflow-hidden bg-zinc-900 h-[500px] flex items-center shadow-3xl">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=1600&q=80"
              alt="Luxury Backdrop"
              fill
              className="object-cover opacity-40 mix-blend-overlay"
            />
          </div>
          <div className="relative z-10 px-8 sm:px-20 max-w-2xl">
            <span className="text-indigo-400 font-black text-xs uppercase tracking-[0.3em] mb-6 block">The Collectors Circle</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              TIMELESS DESIGN. <br />
              <span className="text-indigo-500">UNMATCHED</span> CRAFT.
            </h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed font-light">
              Join our exclusive inner circle for pre-order access to limited 
              numbered editions and bespoke horology insights.
            </p>
            <div className="flex gap-3">
               <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/5 backdrop-blur-2xl border-2 border-white/10 rounded-2xl px-6 text-white font-bold placeholder:text-white/30 outline-hidden focus:border-indigo-500 transition-all"
               />
               <button className="bg-white text-black px-10 py-4 rounded-2xl font-black text-sm uppercase hover:bg-zinc-200 transition-all active:scale-95 shadow-xl shadow-white/5">
                JOIN
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. New Arrivals - Only Watches */}
      <section className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] mb-4">The Latest Drops</h2>
          <h3 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">NEW RELEASES</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {latestProducts.map((p: Product) => (
            <ProductItem key={p.slug} product={p} />
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <Link href="/shop" className="inline-block bg-linear-to-r from-indigo-600 to-violet-600 text-white px-16 py-6 rounded-3xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-indigo-500/30 uppercase tracking-[0.2em] italic">
            VIEW ALL SERIES
          </Link>
        </div>
      </section>
    </div>
  );
}
