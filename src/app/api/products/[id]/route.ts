import { auth } from "@/auth";
import connectDB from "@/lib/db";
import Product from "@/lib/models/product.model";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const { id } = params;
    await connectDB();
    const product = await Product.findById(id);
    return NextResponse.json(product);
}

export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
    const session = await auth();
    if (!session || !session.user?.isAdmin) {
        return NextResponse.json({ message: "Not authorized" }, { status: 401 });
    }

    const { id } = params;
    const {
        name,
        slug,
        price,
        category,
        image,
        brand,
        countInStock,
        description,
    } = await req.json();

    await connectDB();
    const product = await Product.findById(id);

    if (product) {
        product.name = name;
        product.slug = slug;
        product.price = price;
        product.category = category;
        product.image = image;
        product.brand = brand;
        product.countInStock = countInStock;
        product.description = description;

        const updatedProduct = await product.save();
        return NextResponse.json(updatedProduct);
    } else {
        return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }
}

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
    const session = await auth();
    if (!session || !session.user?.isAdmin) {
        return NextResponse.json({ message: "Not authorized" }, { status: 401 });
    }

    const { id } = params;
    await connectDB();
    const product = await Product.findById(id);

    if (product) {
        await product.deleteOne();
        return NextResponse.json({ message: "Product removed" });
    } else {
        return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }
}
