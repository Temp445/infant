
import Mongoose from "@/lib/mongoose";
import Testimonial from "@/models/Testimonial";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try{
        await Mongoose();
           const url = new URL(req.url);
            const pathname = url.pathname; 
            const parts = pathname.split('/');
            const id = parts[parts.length - 1];
        
            if (!id) {
              return NextResponse.json({ success: false, message: "ID required" }, { status: 400 });
            }
        
        const testimonial = await Testimonial.findById(id);
        if (!testimonial){
        return NextResponse.json({success: false, message: "testimonial not found"}, {status: 404})
        }

        return NextResponse.json ({success: true, data: testimonial}, {status: 200})

    }catch (err: any) {
    console.error("Fetch error:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Failed to fetch testimonial" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
    try{
        await Mongoose();
        
        const formData = await req.formData();
        const url = new URL(req.url);
        const parts = url.pathname.split("/");
        const id = parts[parts.length - 1];

        const testimonial = await Testimonial.findById(id);
        if (!testimonial) {
          return NextResponse.json(
            { success: false, message: "testimonial not found" },
            { status: 404 }
          );
        }
        
        testimonial.clientName = (formData.get("clientName") as string) || testimonial.clientName;
        testimonial.clientRole = (formData.get("clientRole") as string) || testimonial.clientRole;
        testimonial.description = (formData.get("description") as string) || testimonial.description;

         await testimonial.save();
        
        return NextResponse.json({ success: true, data: testimonial }, { status: 200 });

    } catch (err: any) {
        console.error("Update error:", err);
        return NextResponse.json(
          { success: false, message: err.message || "Failed to update testimonial" },
          { status: 500 }
        );
      }
}



export async function DELETE(req: NextRequest) {
  try {
    await Mongoose();

    const url = new URL(req.url);
    const parts = url.pathname.split("/");
    const id = parts[parts.length - 1];

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID is required" },
        { status: 400 }
      );
    }

    const testimonial = await Testimonial.findByIdAndDelete(id);

    if (!testimonial) {
      return NextResponse.json(
        { success: false, message: "Testimonial not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Testimonial deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
