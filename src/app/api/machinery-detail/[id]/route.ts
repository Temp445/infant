import Mongoose from "@/lib/mongoose";
import MachineryDetail from "@/models/MachineryDetail";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await Mongoose();
    const { id } = params;

    const machinery = await MachineryDetail.findById(id);
    if (!machinery) {
      return NextResponse.json(
        { success: false, message: "Machinery not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: machinery }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to fetch machinery" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await Mongoose();
    const { id } = params;
   const { machineName, count } = await req.json();

    if (!machineName && !count) {
      return NextResponse.json(
        { success: false, message: "At least one field (machineName or count) must be provided" },
        { status: 400 }
      );
    }

    const updatedMachinery = await MachineryDetail.findByIdAndUpdate(
      id,
      { ...(machineName && { machineName }), ...(count && { count }) },
      { new: true }
    );

    if (!updatedMachinery) {
      return NextResponse.json(
        { success: false, message: "Machinery not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updatedMachinery }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to update machinery" },
      { status: 500 }
    );
  }
}


export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await Mongoose();
    const { id } = params;

    const deleted = await MachineryDetail.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Machinery not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Machinery deleted successfully" },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to delete machinery" },
      { status: 500 }
    );
  }
}
