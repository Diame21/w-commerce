import Link from 'next/link';
import Image from 'next/image';

interface Product {
  name: string;
  slug: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
}

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-zinc-900 dark:border-zinc-800">
      <Link href={`/product/${product.slug}`} className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight text-zinc-900 shadow-sm">
            {product.brand}
          </span>
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2 flex justify-between items-start">
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-lg font-semibold text-zinc-900 line-clamp-1 group-hover:text-indigo-600 transition-colors dark:text-zinc-100">
              {product.name}
            </h2>
          </Link>
          <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">${product.price}</span>
        </div>
        
        <div className="flex items-center gap-1 mb-4">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-zinc-200 dark:fill-zinc-700'}`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">({product.numReviews})</span>
        </div>

        <button className="mt-auto w-full bg-zinc-900 text-white py-2.5 rounded-xl font-medium transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
