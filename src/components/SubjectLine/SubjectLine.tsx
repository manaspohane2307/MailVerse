"use client";
import React from "react";
import styles from "@/styles/SubjectLine.module.css";

type SubjectLineProps = {
  value: string;
  onChange: (val: string) => void;
};

export default function SubjectLine({ value, onChange }: SubjectLineProps) {
  const maxLength = 100;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Subject Line</h2>
        <span className={styles.charCount}>
          {value.length}/{maxLength}
        </span>
      </div>
      <textarea
        className={styles.textarea}
        placeholder="Example subject line here..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
