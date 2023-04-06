import Dato from "@/app/models/result";
import dbConnect from "../../../lib/dbConnect";

import { NextResponse } from "next/server";
import { numRandom } from "@/app/generadores/lineal-congruente/services/generadorLinealCongruente";

export async function GET(request) {
  await dbConnect();
  const res = await Dato.find({});
  return new Response(res);
}

export async function POST(request) {
  const data = await request.json();
  console.log("el prop", data.id);

  var d = {};
  if (data.id == "1") {
    d = numRandom(
      parseInt(data.x0),
      parseInt(data.a),
      parseInt(data.c),
      parseInt(data.m)
    );
  } else console.log("2");

  console.log(d);
  const newDato = new Dato(d);
  await newDato.save();

  //console.log("data: ", data);

  const { x0, a, c, m } = data;

  return NextResponse.json({ x0, a, c, m });
}
