"use client";
import React from "react";
import styles from "@/styles/Length.module.css";

type LengthProps = {
  value: number;
  onChange: (val: number) => void;
};

export default function Length({ value, onChange }: LengthProps) {
  const minLength = 50;
  const maxLength = 500;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const percent = ((value - minLength) / (maxLength - minLength)) * 100;
  const sliderStyle = {
    background: `linear-gradient(to right, #131D4F 0%, #131D4F ${percent}%, #ddd ${percent}%, #ddd 100%)`,
  };

  return (
    <div className={styles.container}>
      <label htmlFor="lengthSlider" className={styles.label}>
        Length
      </label>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          id="lengthSlider"
          min={minLength}
          max={maxLength}
          value={value}
          onChange={handleChange}
          className={styles.slider}
          style={sliderStyle}
        />
        <span className={styles.counter}>
          {value}/{maxLength}
        </span>
      </div>
    </div>
  );
}
