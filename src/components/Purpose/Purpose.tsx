"use client";

import React, { useRef } from "react";
import styles from "@/styles/Purpose.module.css";
import { Paperclip, Image as ImageIcon, Maximize2 } from "lucide-react";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export default function Purpose({ value, onChange }: Props) {
  const maxLength = 5000;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      onChange(e.target.value);
    }
  };

  const handleFileClick = () => fileInputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      alert(`Selected file: ${file.name}`);
    }
  };

  const handleImageClick = () => alert("Image selector clicked!");
  const handleExpandClick = () => alert("Expand section clicked!");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Purpose</h2>
        <span className={styles.charCount}>
          {value.length}/{maxLength}
        </span>
      </div>

      <div className={styles.textareaWrapper}>
        <textarea
          className={styles.textarea}
          placeholder="Example: I am writing to propose a new marketing campaign that I believe will be effective for your business."
          value={value}
          onChange={handleChange}
        />

        <div className={styles.actions}>
          <div className={styles.leftIcons}>
            <button
              className={styles.iconButton}
              onClick={handleFileClick}
              aria-label="Upload File"
            >
              <Paperclip size={20} />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            <button
              className={styles.iconButton}
              onClick={handleImageClick}
              aria-label="Upload Image"
            >
              <ImageIcon size={20} />
            </button>
          </div>

          <button
            className={styles.iconButton}
            onClick={handleExpandClick}
            aria-label="Expand"
          >
            <Maximize2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
