import ProductItem from "@/components/ProductItem";
import data from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const categoryDetails: Record<string, { title: string; subtitle: string; heroImage: string; accent: string }> = {
  luxury: {
    title: "The Luxury Collection",
    subtitle: "Pinnacle of horology. Masterpieces of gold, platinum, and precision.",
    heroImage: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1600&q=80",
    accent: "text-amber-500",
  },
  classic: {
    title: "Timeless Classics",
    subtitle: "Heritage designs that never go out of style. Elegance for every occasion.",
    heroImage: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1600&q=80",
    accent: "text-indigo-600",
  },
  sports: {
    title: "Sport & Performance",
    subtitle: "Built for adventure. Rugged, water-resistant, and ready for the extreme.",
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600&q=80",
    accent: "text-rose-600",
  },
  minimalism: {
    title: "Minimalist Series",
    subtitle: "Less is more. Clean lines, ultra-thin profiles, and pure aesthetic.",
    heroImage: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=1600&q=80",
    accent: "text-zinc-500",
  },
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  
  if (!slug) return notFound();

  const category = categoryDetails[slug.toLowerCase()];

  if (!category) {
    return notFound();
  }

  const products = data.products.filter(
    (p) => p.category.toLowerCase() === slug.toLowerCase()
  );

  return (
    <div className="pb-20">
      {/* Category Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={category.heroImage}
            alt={category.title}
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-950/40 to-zinc-950"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.4em] mb-4 block">
            {"<-"} Back to Atelier
          </Link>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
            {category.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? category.accent : ""}>{word}{" "}</span>
            ))}
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-300 text-lg sm:text-xl font-light leading-relaxed">
            {category.subtitle}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16 border-b border-zinc-100 dark:border-zinc-800 pb-8">
          <div>
            <span className="text-xs font-black text-indigo-600 uppercase tracking-widest">{slug} Series</span>
            <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mt-1">THE COLLECTION</h2>
          </div>
          <p className="text-zinc-500 font-bold">{products.length} Exclusive Pieces</p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {products.map((p) => (
              <ProductItem key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-500 font-bold text-xl uppercase tracking-widest">More pieces coming soon to the {slug} series.</p>
          </div>
        )}
      </section>

      {/* Minimal Footer CTA */}
      <section className="max-w-7xl mx-auto px-4 mt-12 py-12 border-t border-zinc-100 dark:border-zinc-800 text-center">
        <h3 className="text-zinc-900 dark:text-white font-black text-2xl mb-8">DISCOVER THE FULL ANTHOLOGY</h3>
        <Link href="/shop" className="inline-block bg-zinc-950 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-zinc-950 transition-all shadow-2xl shadow-black/20 hover:scale-105 active:scale-95 border border-white/10 uppercase tracking-widest">
          VIEW ALL WATCHES
        </Link>
      </section>
    </div>
  );
}
