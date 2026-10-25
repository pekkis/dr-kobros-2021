import * as yup from "yup";
import { certifications } from "@/services/mongo";
import { CertificationType } from "@/app/certificate-create/page";
import { NextResponse, NextRequest } from "next/server";

const schema = yup.object().shape({
  date: yup.string().min(1).max(20).required(),
  what: yup.string().min(1).max(400).required(),
  who: yup.string().min(1).max(400).required()
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const isValid = await schema.validate(body);

  if (!isValid) {
    throw new Error("Invalid certificate data");
  }

  const certificate: CertificationType = {
    id: crypto.randomUUID(),
    date: body.date,
    who: body.who,
    what: body.what
  };
  // insertOne adds an _id to the object it is given; insert a copy so the response stays clean.
  await certifications().insertOne({ ...certificate });

  return NextResponse.json(certificate);
}
