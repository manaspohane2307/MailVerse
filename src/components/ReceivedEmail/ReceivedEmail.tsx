"use client";

import styles from "@/styles/ReceivedEmail.module.css";
import { FaPaperclip, FaImage, FaExpand } from "react-icons/fa";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export default function ReceivedEmail({ value, onChange }: Props) {
  const charLimit = 5000;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= charLimit) {
      onChange(e.target.value);
    }
  };

  const handleFileUpload = () => alert("Upload file clicked!");
  const handleImageUpload = () => alert("Upload image clicked!");
  const handleExpand = () => alert("Expand clicked!");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Received Email</span>
        <span className={styles.charCount}>
          {value.length}/{charLimit}
        </span>
      </div>
      <div className={styles.textareaWrapper}>
        <textarea
          className={styles.textarea}
          placeholder="Paste the received email here..."
          maxLength={charLimit}
          value={value}
          onChange={handleChange}
        />
        <div className={styles.actions}>
          <div className={styles.leftIcons}>
            <button className={styles.iconButton} onClick={handleFileUpload}>
              <FaPaperclip />
            </button>
            <button className={styles.iconButton} onClick={handleImageUpload}>
              <FaImage />
            </button>
          </div>
          <button className={styles.iconButton} onClick={handleExpand}>
            <FaExpand />
          </button>
        </div>
      </div>
    </div>
  );
}
