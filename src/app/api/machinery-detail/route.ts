import Mongoose from "@/lib/mongoose";
import MachineryDetail from "@/models/MachineryDetail";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await Mongoose();
    const details = await MachineryDetail.find();

    return NextResponse.json(
      { success: true, data: details },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        message: err.message || "Failed to fetch machinery details",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await Mongoose();
    const { machineName, count } = await req.json();

    if (!machineName || !count) {
      return NextResponse.json(
        { success: false, message: "Machine name and count are required" },
        { status: 400 }
      );
    }

    const newMachinery = await MachineryDetail.create({ machineName, count });
    return NextResponse.json({ success: true, data: newMachinery }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to save machinery detail" },
      { status: 500 }
    );
  }
}

