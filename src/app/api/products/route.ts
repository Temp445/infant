import Product from "@/models/Product";
import Mongoose from "@/lib/mongoose";
import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

// get all products
export async function GET() {
    try{
        await Mongoose();
        const products = await Product.find().sort({ uploadedAt: -1 });
        return NextResponse.json({ success: true, data: products }, {status: 200});
    } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to fetch products" },
      { status: 500 }
    );
  }
}

//create
export async function POST(req: Request) {
    try{
        await Mongoose();
        const formData = await req.formData()
       const productName = formData.get("productName") as string;

       
    if (!productName) {
      return NextResponse.json(
        { success: false, message: "Product name is required" },
        { status: 400 }
      );
    }

     const productImage: string[] = [];
    for (const file of formData.getAll("productImage")) {
      if (file instanceof File) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const upload = await new Promise<any>((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "products/main" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );
          stream.end(buffer);
        });
        productImage.push(upload.secure_url);
      }
    }

      const product = new Product({
      productName,
      productImage,
    });

    await product.save();
    return NextResponse.json({ success: true, data: product }, { status: 201 });

    } catch (err: any) {
    console.error("Upload error:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Failed to save product" },
      { status: 500 }
    );
  }
}


