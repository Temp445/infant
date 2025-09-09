import Mongoose from "@/lib/mongoose"
import Testimonial from "@/models/Testimonial"
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try{
        await Mongoose()
        const testimonials = await Testimonial.find();
        return NextResponse.json({success: true , data: testimonials },{status: 200});  
    }catch (err: any) {
        return NextResponse.json({success:false , message: err.message || 'Failed to fetch'}, {status: 500})
    }
}

export async function POST(req: NextRequest) {
    try{
        await Mongoose();

        const formData = await req.formData()
        const clientName = formData.get("clientName") as string;
        const clientRole = formData.get("clientRole") as string;
        const description = formData.get("description") as string;
        
        if(!clientName || !clientRole) {
            return NextResponse.json({success:false , message: 'Client Name, Role are required' }, {status: 400})
        }

        const testimonial = new Testimonial({
            clientName,
            clientRole,
            description
        })
        await testimonial.save();
        return NextResponse.json({success: true, data:testimonial }, {status: 201})

    }catch (err: any){
        console.error("upload err", err)
        return NextResponse.json({success: false , message: err.message || "Falied to save Testimonial"}, {status: 500})
    }
}