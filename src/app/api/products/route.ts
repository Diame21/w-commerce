import { auth } from "@/auth";
import connectDB from "@/lib/db";
import Product from "@/lib/models/product.model";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB();
        const products = await Product.find({});
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ message: "Error fetching products", error }, { status: 500 });
    }
}

export const POST = async (req: Request) => {
    try {
        const session = await auth();
        if (!session || !session.user?.isAdmin) { // Check for admin
            return NextResponse.json({ message: "Not authorized" }, { status: 401 });
        }

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
        const product = new Product({
            name,
            slug,
            price,
            image,
            brand,
            category,
            countInStock,
            description,
        });

        const createdProduct = await product.save();
        return NextResponse.json(createdProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error creating product", error }, { status: 500 });
    }
}
