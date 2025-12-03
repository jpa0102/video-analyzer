import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  try {
    const form = await req.formData();
    const file = form.get("video");

    if (!file) {
      return NextResponse.json({ error: "No video uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const analysis = await client.responses.create({
      model: "gpt-4.1",
      input: "Analyze this video and give detailed, practical feedback for improving content quality.",
      attachments: [
        {
          name: "video.mp4",
          data: buffer
        }
      ]
    });

    return NextResponse.json({
      feedback: analysis.output_text,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
