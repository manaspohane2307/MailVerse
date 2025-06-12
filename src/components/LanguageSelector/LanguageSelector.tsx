"use client";

import * as Select from "@radix-ui/react-select";
import styles from "@/styles/LanguageSelector.module.css";

const languages = [
  { label: "English", emoji: "🇬🇧" },
  { label: "Spanish", emoji: "🇪🇸" },
  { label: "French", emoji: "🇫🇷" },
  { label: "German", emoji: "🇩🇪" },
  { label: "Hindi", emoji: "🇮🇳" },
  { label: "Chinese", emoji: "🇨🇳" },
  { label: "Japanese", emoji: "🇯🇵" },
  { label: "Korean", emoji: "🇰🇷" },
  { label: "Portuguese", emoji: "🇵🇹" },
  { label: "Russian", emoji: "🇷🇺" },
  { label: "Arabic", emoji: "🇸🇦" },
  { label: "Italian", emoji: "🇮🇹" },
  { label: "Bengali", emoji: "🇧🇩" },
  { label: "Turkish", emoji: "🇹🇷" },
  { label: "Dutch", emoji: "🇳🇱" },
];

type LanguageSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function LanguageSelector({
  value,
  onChange,
}: LanguageSelectorProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Choose a language</h2>
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger className={styles.trigger} aria-label="Language">
          <Select.Value placeholder="Example: 🇬🇧 English" />
          <Select.Icon className={styles.icon}>▼</Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={styles.content} position="popper">
            <Select.ScrollUpButton className={styles.scrollButton}>
              ↑
            </Select.ScrollUpButton>
            <Select.Viewport className={styles.viewport}>
              {languages.map((lang) => (
                <Select.Item
                  key={lang.label}
                  value={lang.label}
                  className={styles.item}
                >
                  <Select.ItemText>
                    {lang.emoji} {lang.label}
                  </Select.ItemText>
                  <Select.ItemIndicator className={styles.indicator}>
                    ✔
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton className={styles.scrollButton}>
              ↓
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
