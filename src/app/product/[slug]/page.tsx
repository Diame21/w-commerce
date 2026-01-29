import Image from 'next/image';
import Link from 'next/link';
import connectDB from '@/lib/db';
import Product from '@/lib/models/product.model';
import { notFound } from 'next/navigation';

export default async function ProductDetails({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  await connectDB();
  const product = await Product.findOne({ slug }).lean();

  if (!product) {
    return notFound();
  }

  const p = JSON.parse(JSON.stringify(product));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/" className="text-zinc-500 hover:text-indigo-600 flex items-center gap-2 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back to products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-2xl">
          <Image
            src={p.image}
            alt={p.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2 block">
              {p.brand} | {p.category}
            </span>
            <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-4">{p.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < Math.floor(p.rating) ? 'fill-current' : 'fill-zinc-200 dark:fill-zinc-700'}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">({p.numReviews} customer reviews)</span>
            </div>

            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">${p.price}</p>
            
            <div className="h-px bg-zinc-200 w-full mb-8 dark:bg-zinc-800"></div>
            
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              {p.description}
            </p>
          </div>

          <div className="mt-auto space-y-6">
            <div className="flex items-center justify-between p-6 rounded-2xl bg-zinc-50 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Availability</span>
              {p.countInStock > 0 ? (
                <span className="text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full text-xs uppercase dark:bg-emerald-900/20">In Stock</span>
              ) : (
                <span className="text-rose-600 font-bold bg-rose-50 px-3 py-1 rounded-full text-xs uppercase dark:bg-rose-900/20">Out of Stock</span>
              )}
            </div>

            <button 
              disabled={p.countInStock === 0}
              className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 active:scale-95 disabled:bg-zinc-400 disabled:shadow-none disabled:active:scale-100"
            >
              {p.countInStock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
