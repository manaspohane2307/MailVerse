// utils/api/generateClient.ts

import type { PromptOptions } from "@/utils/PromptBuilder";

export async function generateEmailClient(options: PromptOptions) {
  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(options),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || "Failed to generate email");
    return data.email as string;

  } catch (err: any) {
    console.error("Client Error:", err.message);
    throw err;
  }
}
