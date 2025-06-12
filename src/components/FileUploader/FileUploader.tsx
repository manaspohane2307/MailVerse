"use client";

import { useRef } from "react";
import { Paperclip } from "lucide-react";
import styles from "@/styles/FileUploader.module.css";

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
}

export default function FileUploader({ onFileSelect }: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileSelect(file);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.iconButton}
        onClick={() => fileInputRef.current?.click()}
        type="button"
      >
        <Paperclip size={18} />
        <span>Attach File</span>
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}
