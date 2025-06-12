"use client";

import React from "react";
import styles from "@/styles/EmailFormat.module.css";

type EmailFormatProps = {
  value: "plain" | "html";
  onChange: (format: "plain" | "html") => void;
};

export default function EmailFormat({ value, onChange }: EmailFormatProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Email Format</h2>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${
            value === "plain" ? styles.active : ""
          }`}
          onClick={() => onChange("plain")}
        >
          Plain Text
        </button>
        <button
          className={`${styles.button} ${
            value === "html" ? styles.active : ""
          }`}
          onClick={() => onChange("html")}
        >
          HTML
        </button>
      </div>
    </div>
  );
}
