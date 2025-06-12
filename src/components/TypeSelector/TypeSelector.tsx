"use client";

import styles from "@/styles/TypeSelector.module.css";

export default function TypeSelector({
  activeType,
  onTypeChange,
}: {
  activeType: "compose" | "reply";
  onTypeChange: (type: "compose" | "reply") => void;
}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Type</h2>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${
            activeType === "compose" ? styles.active : ""
          }`}
          onClick={() => onTypeChange("compose")}
        >
          Compose New Email
        </button>
        <button
          className={`${styles.button} ${
            activeType === "reply" ? styles.active : ""
          }`}
          onClick={() => onTypeChange("reply")}
        >
          Reply to Email
        </button>
      </div>
    </div>
  );
}
