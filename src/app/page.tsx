"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";
import styles from "@/styles/page.module.css";

import Navbar from "@/components/Navbar/Navbar";
import TypeSelector from "@/components/TypeSelector/TypeSelector";
import Purpose from "@/components/Purpose/Purpose";
import SubjectLine from "@/components/SubjectLine/SubjectLine";
import Recipient from "@/components/Recipient/Recipient";
import Sender from "@/components/Sender/Sender";
import Length from "@/components/Length/Length";
import EmailFormat from "@/components/EmailFormat/EmailFormat";
import ToneSelector from "@/components/ToneSelector/ToneSelector";
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector";
import GenerateButton from "@/components/GenerateButton/GenerateButton";
import ResponseBox from "@/components/ResponseBox/ResponseBox";
import MessageInput from "@/components/MessageInput/MessageInput";
import ReceivedEmail from "@/components/ReceivedEmail/ReceivedEmail";
import ResponseGoal from "@/components/ResponseGoal/ResponseGoal";

export default function Page() {
  const [mode, setMode] = useState<"compose" | "reply">("compose");
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Compose
  const [purpose, setPurpose] = useState("");
  const [subject, setSubject] = useState("");
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");

  // Reply
  const [receivedEmail, setReceivedEmail] = useState("");
  const [responseGoal, setResponseGoal] = useState("");

  // Common
  const [tone, setTone] = useState("Formal");
  const [format, setFormat] = useState("Professional");
  const [length, setLength] = useState<number>(50);
  const [language, setLanguage] = useState("English");
  const [emailFormat, setEmailFormat] = useState<"plain" | "html">("plain");

  // Generate on Button Click
  const generateEmail = async () => {
    setLoading(true);
    try {
      const body = {
        type: mode,
        tone,
        language,
        sender,
        recipient,
        subjectLine: subject,
        length,
        format,
        ...(mode === "reply"
          ? {
              receivedEmail,
              responseGoal,
            }
          : {
              purpose,
            }),
      };

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      setGeneratedEmail(data.email || "No email generated.");
    } catch (error) {
      console.error("Error generating email:", error);
      alert("Failed to generate email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <Navbar />

      <div
        style={{
          display: "flex",
          height: "calc(100vh - 80px)",
          padding: "16px",
          marginTop: "40px",
          gap: "24px",
        }}
      >
        {/* Left Side: Inputs */}
        <div
          className={styles.scrollableContainer}
          style={{
            width: "400px",
            height: "100%",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            paddingRight: "8px",
          }}
        >
          <TypeSelector activeType={mode} onTypeChange={setMode} />

          {mode === "compose" ? (
            <Purpose value={purpose} onChange={setPurpose} />
          ) : (
            <>
              <ReceivedEmail
                value={receivedEmail}
                onChange={setReceivedEmail}
              />
              <ResponseGoal value={responseGoal} onChange={setResponseGoal} />
            </>
          )}

          <SubjectLine value={subject} onChange={setSubject} />
          <Recipient value={recipient} onChange={setRecipient} />
          <Sender value={sender} onChange={setSender} />
          <Length value={length} onChange={setLength} />
          <EmailFormat value={emailFormat} onChange={setEmailFormat} />
          <ToneSelector value={tone} onChange={setTone} />
          <LanguageSelector value={language} onChange={setLanguage} />

          <GenerateButton onGenerate={generateEmail} disabled={loading} />
        </div>

        {/* Right Side: Response + MessageInput */}
        <div
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderLeft: "1px solid #ddd",
            paddingLeft: "16px",
          }}
        >
          <div className={styles.scrollableContainer} style={{ flex: 1 }}>
            <ResponseBox content={generatedEmail} />
          </div>

          <div style={{ flexShrink: 0 }}>
            <MessageInput
              fileUploadContext={{
                tone,
                language,
                sender,
                recipient,
                subjectLine: subject,
                length,
                format,
                isReplyMode: mode === "reply",
                purpose,
                receivedEmail,
                responseGoal,
              }}
              setGeneratedEmail={setGeneratedEmail}
            />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
