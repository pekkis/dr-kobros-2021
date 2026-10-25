import { certifications } from "@/services/mongo";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const cert = await certifications().findOne(
    { id },
    { projection: { _id: 0 } }
  );

  if (!cert) {
    return NextResponse.json({}, { status: 404 });
  }

  return NextResponse.json(cert);
}
