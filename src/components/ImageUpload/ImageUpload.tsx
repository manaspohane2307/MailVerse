"use client";

import { useRef, useState } from "react";
import styles from "@/styles/ImageUpload.module.css";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
}

export default function ImageUpload({ onImageSelect }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewSrc(URL.createObjectURL(file));
      onImageSelect(file);
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.iconButton}
        type="button"
        onClick={() => fileInputRef.current?.click()}
      >
        {/* Your own PNG icon */}
        <img
          src="/icons/image-upload-icon.png"
          alt="Upload"
          className={styles.iconImage}
          width={18}
          height={18}
          draggable={false}
        />
        <span>Upload Image</span>
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageChange}
      />

      {previewSrc && (
        <img
          src={previewSrc}
          alt="Preview"
          className={styles.preview}
          onLoad={() => URL.revokeObjectURL(previewSrc)} // Free memory
        />
      )}
    </div>
  );
}
