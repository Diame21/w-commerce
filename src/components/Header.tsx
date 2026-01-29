import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-200 dark:bg-zinc-950/80 dark:border-zinc-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              W-Commerce
            </Link>
          </div>

            <div className="flex items-center gap-4">
              <Link href="/cart" className="text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors mr-2">
                Cart
              </Link>
              
              <SignedOut>
                <div className="flex items-center gap-3">
                  <Link 
                    href="/sign-in" 
                    className="text-sm font-medium text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/sign-up" 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-indigo-200"
                  >
                    Sign Up
                  </Link>
                </div>
              </SignedOut>

              <SignedIn>
                <div className="flex items-center gap-4">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
        </div>
      </nav>
    </header>
  );
}
