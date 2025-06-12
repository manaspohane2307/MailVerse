// app/api/generate/route.ts

import { NextRequest, NextResponse } from "next/server";
import { groq } from "@/utils/groqClient";
import { buildPrompt } from "@/utils/PromptBuilder";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Optional: validate required fields for 'compose' or 'reply'
    if (!body.type || (body.type !== "compose" && body.type !== "reply")) {
      return NextResponse.json({ error: "Invalid or missing 'type'" }, { status: 400 });
    }

    const prompt = buildPrompt(body);

    const groqResponse = await groq.post("/chat/completions", {
      model: "llama3-70b-8192",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const result = groqResponse.data.choices?.[0]?.message?.content;

    if (!result) {
      return NextResponse.json({ error: "No response from model." }, { status: 502 });
    }

    return NextResponse.json({ email: result.trim() }, { status: 200 });

  } catch (error: any) {
    console.error("Generation Error:", error?.response?.data || error.message);
    return NextResponse.json({ error: "Email generation failed." }, { status: 500 });
  }
}

