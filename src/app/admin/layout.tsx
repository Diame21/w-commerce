import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // Double check on layout level (Middleware handles redirect, but good for safety)
  if (!session || !session.user?.isAdmin) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-xl font-bold border-b">Admin Panel</div>
        <nav className="flex flex-col p-4 space-y-2">
          <Link href="/admin/dashboard" className="p-2 text-gray-700 hover:bg-gray-200 rounded">
            Dashboard
          </Link>
          <Link href="/admin/products" className="p-2 text-gray-700 hover:bg-gray-200 rounded">
            Products
          </Link>
          <Link href="/admin/orders" className="p-2 text-gray-700 hover:bg-gray-200 rounded">
            Orders
          </Link>
          <Link href="/admin/users" className="p-2 text-gray-700 hover:bg-gray-200 rounded">
            Users
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
