"use client";
import React, { useRef } from "react";
import styles from "@/styles/Sender.module.css";
import { FaFileUpload, FaExpandAlt } from "react-icons/fa";

type SenderProps = {
  value: string;
  onChange: (val: string) => void;
};

export default function Sender({ value, onChange }: SenderProps) {
  const maxLength = 1000;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      onChange(e.target.value);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      alert(`Selected file: ${file.name}`);
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Sender</h2>
        <span className={styles.charCount}>
          {value.length}/{maxLength}
        </span>
      </div>
      <div className={styles.textareaWrapper}>
        <textarea
          className={styles.textarea}
          placeholder="Example: John Smith, Marketing Department, Product Team A, Acme Corporation"
          value={value}
          onChange={handleChange}
        />
        <div className={styles.actions}>
          <button
            className={styles.iconButton}
            aria-label="Add File"
            onClick={handleFileClick}
          >
            <FaFileUpload />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <button className={styles.iconButton} aria-label="Expand Section">
            <FaExpandAlt />
          </button>
        </div>
      </div>
    </div>
  );
}
