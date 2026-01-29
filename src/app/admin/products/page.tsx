import Link from "next/link";
import connectDB from "@/lib/db";
import Product from "@/lib/models/product.model";


export default async function AdminProductsPage() {
  await connectDB();
  const products = await Product.find({}).sort({ createdAt: -1 });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link
            href="/admin/products/create"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Create Product
        </Link>
      </div>

      <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Brand</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {products.map((product) => (
              <tr key={product._id.toString()} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {product._id.toString().substring(20, 24)}
                </td>
                <td className="py-3 px-6 text-left">{product.name}</td>
                <td className="py-3 px-6 text-left">${product.price}</td>
                <td className="py-3 px-6 text-left">{product.category}</td>
                <td className="py-3 px-6 text-left">{product.brand}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <Link
                      href={`/admin/products/${product._id.toString()}`}
                      className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                    >
                        Edit
                    </Link>
                    {/* Delete button needs client interaction, maybe a form or client component */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
