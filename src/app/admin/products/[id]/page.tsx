"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function AdminProductEditPage() {
  const params = useParams(); // params might be null or promise in newer Next.js? useParams returns params object directly in client components.
  const { id } = params as { id: string };
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    price: 0,
    image: "",
    brand: "",
    category: "",
    countInStock: 0,
    description: "",
  });

  const isCreateMode = id === "create";

  useEffect(() => {
    if (!isCreateMode) {
      const fetchProduct = async () => {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setFormData({
            name: data.name,
            slug: data.slug,
            price: data.price,
            image: data.image,
            brand: data.brand,
            category: data.category,
            countInStock: data.countInStock,
            description: data.description,
        });
      };
      fetchProduct();
    }
  }, [id, isCreateMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const method = isCreateMode ? "POST" : "PUT";
      const url = isCreateMode ? "/api/products" : `/api/products/${id}`;

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin/products");
        router.refresh();
      } else {
        alert("Failed to save product");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">
        {isCreateMode ? "Create Product" : "Edit Product"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-bold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-bold">Slug</label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-bold">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-bold">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-bold">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-bold">Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
         <div>
          <label className="block mb-1 font-bold">Count In Stock</label>
          <input
            type="number"
            name="countInStock"
            value={formData.countInStock}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-bold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={4}
            required
          ></textarea>
        </div>
        <div>
            <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
                {isLoading ? "Saving..." : isCreateMode ? "Create" : "Update"}
            </button>
        </div>
      </form>
    </div>
  );
}
