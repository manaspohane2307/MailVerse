"use client";
import { useState, useRef } from "react";
import styles from "@/styles/MessageInput.module.css";
import { Paperclip, ArrowUpCircle } from "lucide-react";
import { generateEmail } from "@/utils/generateEmail";

export interface MessageInputProps {
  fileUploadContext: {
    tone: string;
    language: string;
    sender: string;
    recipient: string;
    subjectLine: string;
    length: number;
    format: string;
    isReplyMode: boolean;
    purpose?: string;
    receivedEmail?: string;
    responseGoal?: string;
  };
  setGeneratedEmail: (email: string) => void;
}

export default function MessageInput({
  fileUploadContext,
  setGeneratedEmail,
}: MessageInputProps) {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim() && !file) return;
    setLoading(true);

    const {
      tone,
      language,
      sender,
      recipient,
      subjectLine,
      length,
      format,
      isReplyMode,
      purpose,
      receivedEmail,
      responseGoal,
    } = fileUploadContext;

    try {
      const generated = await generateEmail({
        type: isReplyMode ? "reply" : "compose",
        context: isReplyMode ? receivedEmail || message : purpose || message,
        tone,
        language,
        format,
        length,
      });

      setGeneratedEmail(generated);
    } catch (err) {
      console.error("Error generating email:", err);
    } finally {
      setMessage("");
      setFile(null);
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* File Input */}
      <button
        onClick={() => fileInputRef.current?.click()}
        className={styles.iconButton}
      >
        <Paperclip size={20} />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      {/* Text Area */}
      <textarea
        className={styles.textarea}
        placeholder="Send a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={1}
      />

      {/* Send Button */}
      <button
        onClick={handleSend}
        className={styles.iconButton}
        disabled={loading}
      >
        <ArrowUpCircle size={24} color="#4f46e5" />
      </button>
    </div>
  );
}
