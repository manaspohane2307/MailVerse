"use client";

import styles from "@/styles/GenerateButton.module.css";

type GenerateButtonProps = {
  onGenerate: () => void;
  disabled?: boolean;
};

export default function GenerateButton({
  onGenerate,
  disabled = false,
}: GenerateButtonProps) {
  return (
    <button className={styles.button} onClick={onGenerate} disabled={disabled}>
      {disabled ? "Generating..." : "Generate Email"}
    </button>
  );
}
