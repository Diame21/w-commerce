import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-zinc-950 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-10">
        <div className="text-center">
          <Link href="/" className="inline-block text-3xl font-black tracking-tighter text-indigo-600 mb-8">
            W-COMMERCE
          </Link>
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-2 uppercase italic">
            Join the Atelier
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium italic">
            Begin your journey into premium horology.
          </p>
        </div>

        <div className="flex justify-center">
          <SignUp 
            routing="path"
            path="/sign-up"
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-indigo-600 hover:bg-indigo-700 text-sm font-black uppercase tracking-widest py-4 rounded-2xl shadow-xl shadow-indigo-600/20",
                card: "bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] shadow-2xl",
                headerTitle: "text-zinc-900 dark:text-white font-black uppercase tracking-tight",
                headerSubtitle: "text-zinc-500 dark:text-zinc-400",
                socialButtonsBlockButton: "rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all",
                formFieldInput: "rounded-2xl bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-100 dark:border-zinc-700 font-bold",
                footerActionLink: "text-indigo-600 font-bold hover:text-indigo-700"
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
