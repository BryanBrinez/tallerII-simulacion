import Dato from '@/app/models/result';
import dbConnect from '../../../lib/dbConnect'


import { NextResponse } from "next/server";



export async function GET(request) {
  await dbConnect()
  const res = await Dato.find({})
  return new Response(res);
}

export async function POST(request) {
  const data = await request.json();
  console.log("data: ", data);
  const newDato = new Dato(data)
  await newDato.save()

  const { x0, a, c, m } = data;

  return NextResponse.json({ x0, a, c, m });
}
