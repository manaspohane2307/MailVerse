// utils/arc/PromptBuilder.ts

export interface PromptOptions {
  type: "compose" | "reply";
  purpose?: string;
  subject: string;
  recipient: string;
  sender: string;
  tone: string;
  format: string;
  length: string;
  language: string;
  receivedEmail?: string;
  responseGoal?: string;
  knowledge?: string;
}

export function buildPrompt(options: PromptOptions): string {
  const {
    type, purpose, subject, recipient, sender,
    tone, format, length, language,
    receivedEmail, responseGoal, knowledge,
  } = options;

  const sharedDetails = `
Tone: ${tone}
Format: ${format}
Length: ${length}
Language: ${language}
Additional Context: ${knowledge || "None"}
`;

  if (type === "reply") {
    return `
You are an AI assistant that helps users write professional and context-aware email replies.

Received Email:
"${receivedEmail || "Not provided."}"

Response Goal:
"${responseGoal || "Not provided."}"

${sharedDetails}

Generate a clear, polite, and helpful email reply.
`;
  }

  // Compose
  return `
You are an AI assistant that writes professional, purpose-driven emails.

Sender: ${sender}
Recipient: ${recipient}
Subject: ${subject}

Purpose:
"${purpose || "No specific purpose given."}"

${sharedDetails}

Generate a complete, well-structured email.
`;
}

  