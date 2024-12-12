import { client } from "@/services/mongo";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await client.connect();

  const db = client.db("kobros");
  const collection = db.collection("certifications");

  const cert = await collection.findOne({ id });

  if (!cert) {
    return NextResponse.json({}, { status: 404 });
  }

  return NextResponse.json(cert);
}
