import Link from 'next/link';
import { Product } from '@/types';

export default function CartPage() {
  // Mock data for initial UI - logic will be added with State Management later
  const cartItems: Product[] = [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-12">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-32 bg-white border border-zinc-200 rounded-3xl shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
          <div className="bg-indigo-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 dark:bg-indigo-900/20">
            <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-zinc-900 mb-2 dark:text-zinc-100">Your cart is empty</h2>
          <p className="text-zinc-500 mb-8 max-w-xs mx-auto dark:text-zinc-400">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logic for item listing goes here */}
          </div>

          {/* Checkout Summary */}
          <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 h-fit dark:bg-zinc-900 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-6 dark:text-zinc-100">Order Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>Shipping</span>
                <span className="text-emerald-600 font-medium">Free</span>
              </div>
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between text-xl font-bold dark:text-zinc-100">
                <span>Total</span>
                <span>$0.00</span>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
