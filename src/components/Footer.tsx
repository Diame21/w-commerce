export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 py-12 dark:bg-zinc-950 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">W-Commerce</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Your premium shopping experience.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">Home</a></li>
              <li><a href="/shop" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">All Series</a></li>
              <li><a href="/heritage" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">Our Heritage</a></li>
              <li><a href="/cart" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">Cart</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">Contact</h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Email: support@w-commerce.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800 text-center">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            &copy; 2026 W-Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
