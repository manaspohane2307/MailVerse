import axios from "axios";

export async function generateEmail(data: {
  type: "compose" | "reply";
  context: string;
  tone: string;
  language: string;
  format: string;
  length: number;
}): Promise<string> {
  const res = await axios.post("/api/generate", data);
  return res.data.output;
}
