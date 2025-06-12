import React, { ReactNode } from "react";
import styles from "@/styles/Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
}

export default function Button({ children, icon, ...rest }: ButtonProps) {
  return (
    <button className={styles.button} {...rest}>
      {icon && (
        <span
          style={{
            marginRight: "6px",
            display: "inline-flex",
            verticalAlign: "middle",
          }}
        >
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
