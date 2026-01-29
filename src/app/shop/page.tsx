"use client";

import { useState } from "react";
import ProductItem from "@/components/ProductItem";
import data from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", ...data.categories.map(c => c.name)];
  
  const filteredProducts = activeCategory === "All" 
    ? data.products 
    : data.products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pb-32">
      {/* 1. Shop Hero - Minimalist & Grand */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden border-b border-zinc-100 dark:border-zinc-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1600&q=80"
            alt="The Anthology"
            fill
            className="object-cover opacity-15 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-white dark:to-zinc-950"></div>
        </div>
        
        <div className="relative z-10 text-center space-y-4">
          <span className="text-xs font-black text-indigo-600 uppercase tracking-[0.5em] block animate-fade-in-down">
            The All Series Collection
          </span>
          <h1 className="text-6xl sm:text-8xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic leading-none">
            EVERY <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500">SECOND</span> MATTERS
          </h1>
          <p className="max-w-xl mx-auto text-zinc-500 font-medium text-lg tracking-tight">
            Explore our curated selection of exclusive timepieces, from 
            minimalist icons to mechanical masterpieces.
          </p>
        </div>
      </section>

      {/* 2. Premium Filter Bar */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-2xl dark:bg-zinc-950/80 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 py-8 overflow-x-auto">
          <div className="flex justify-center items-center gap-2 sm:gap-6 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all
                  ${activeCategory === cat 
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-xl scale-105" 
                    : "bg-zinc-50 text-zinc-400 hover:text-zinc-900 dark:bg-zinc-900 dark:hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Infinite Gallery Structure */}
      <section className="max-w-7xl mx-auto px-4 mt-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16 border-b border-zinc-100 dark:border-zinc-800 pb-8">
           <div>
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-widest">Collection Results</h2>
            <h3 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tight mt-1 uppercase leading-none">
              {activeCategory} TIMEPIECES
            </h3>
          </div>
          <div className="hidden sm:block text-right">
            <span className="text-3xl font-black text-zinc-200 dark:text-zinc-800">[{filteredProducts.length}]</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {filteredProducts.map((p, idx) => (
            <div 
                key={p.slug} 
                className="animate-fade-in" 
                style={{ animationDelay: `${idx * 100}ms` }}
            >
              <ProductItem product={p} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-40 bg-zinc-50 dark:bg-zinc-900 rounded-[3.5rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800">
            <h4 className="text-2xl font-black text-zinc-400 uppercase tracking-widest">No pieces match this selection.</h4>
            <button 
              onClick={() => setActiveCategory("All")}
              className="mt-6 text-indigo-600 font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-8"
            >
              View Full Collection
            </button>
          </div>
        )}
      </section>

      {/* 4. Luxury Concierge Footer */}
      <section className="max-w-7xl mx-auto px-4 mt-40">
        <div className="bg-indigo-600 rounded-[4rem] p-12 sm:p-24 text-center text-white shadow-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-linear-to-br from-indigo-500 to-violet-700 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-8 italic uppercase">Bespoke Horology</h2>
            <p className="text-indigo-100 text-lg sm:text-xl max-w-2xl mx-auto mb-12 font-light">
              Looking for a rare numbered edition or a specific technical complication? 
              Our private concierge is here to source the unsourceable.
            </p>
            <Link href="/contact" className="inline-block bg-white text-indigo-600 px-16 py-6 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-white/20 shadow-2xl">
              CONSULT AN EXPERT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
