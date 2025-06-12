"use client";
import * as Select from "@radix-ui/react-select";
import styles from "@/styles/ToneSelector.module.css";

const tones = [
  { label: "Friendly", emoji: "😊" },
  { label: "Funny", emoji: "😂" },
  { label: "Casual", emoji: "😌" },
  { label: "Excited", emoji: "🤩" },
  { label: "Professional", emoji: "💼" },
  { label: "Witty", emoji: "😏" },
  { label: "Luxury", emoji: "💎" },
  { label: "Adventurous", emoji: "🏔️" },
  { label: "Sarcastic", emoji: "🙃" },
  { label: "Feminine", emoji: "💃" },
  { label: "Masculine", emoji: "🧔" },
  { label: "Persuasive", emoji: "🧠" },
  { label: "Bold", emoji: "🔥" },
  { label: "Dramatic", emoji: "🎭" },
  { label: "Grumpy", emoji: "😠" },
  { label: "Secretive", emoji: "🤫" },
];

type ToneSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function ToneSelector({ value, onChange }: ToneSelectorProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Choose a tone</h2>
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger className={styles.trigger} aria-label="Tone">
          <Select.Value placeholder="Example: 😊 Friendly" />
          <Select.Icon className={styles.icon}>▼</Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={styles.content} position="popper">
            <Select.ScrollUpButton className={styles.scrollButton}>
              ↑
            </Select.ScrollUpButton>
            <Select.Viewport className={styles.viewport}>
              {tones.map((tone) => (
                <Select.Item
                  key={tone.label}
                  value={tone.label}
                  className={styles.item}
                >
                  <Select.ItemText>
                    {tone.emoji} {tone.label}
                  </Select.ItemText>
                  <Select.ItemIndicator className={styles.indicator}>
                    ✓
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
