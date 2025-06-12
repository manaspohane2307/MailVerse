"use client";
import { useRef } from "react";
import { toast } from "sonner";
import styles from "@/styles/ResponseBox.module.css";
import { exportEmailToDocx } from "@/utils/exportToDocx";
import { exportEmailToPDF } from "@/utils/exportToPdf";

interface ResponseProps {
  content: string;
  onRegenerate?: () => void;
  onSave?: () => void;
}

export default function ResponseBox({
  content,
  onRegenerate,
  onSave,
}: ResponseProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    if (content) {
      await navigator.clipboard.writeText(content);
      toast.success("Copied to clipboard!");
    } else {
      toast.error("Nothing to copy.");
    }
  };

  const handleExportPDF = async () => {
    if (!contentRef.current) return toast.error("No email to export.");
    await exportEmailToPDF("email-content", "email.pdf");
    toast.success("Exported as PDF!");
  };

  const handleExportDOCX = async () => {
    if (!content) return toast.error("No email to export.");
    await exportEmailToDocx(content, "email.docx");
    toast.success("Exported as DOCX!");
  };

  return (
    <div className={styles.responseBox}>
      <h2 className={styles.heading}>Generated Email</h2>
      <div id="email-content" ref={contentRef} className={styles.contentBox}>
        {content || "Your generated email will appear here."}
      </div>

      <div className={styles.buttonGroup}>
        <button onClick={onSave} className={styles.iconButton}>
          Save
        </button>
        <button onClick={handleCopy} className={styles.iconButton}>
          Copy
        </button>
        <button onClick={onRegenerate} className={styles.iconButton}>
          Regenerate
        </button>
        <button onClick={handleExportPDF} className={styles.iconButton}>
          Export as PDF
        </button>
        <button onClick={handleExportDOCX} className={styles.iconButton}>
          Export as DOCX
        </button>
      </div>
    </div>
  );
}
