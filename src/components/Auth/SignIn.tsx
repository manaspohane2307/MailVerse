"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmail, signInWithGoogle } from "@/utils/firebaseAuth";
import styles from "@/styles/SignIn.module.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleEmailLogin = async () => {
    try {
      await signInWithEmail(email, password);
      router.push("/");
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      router.push("/");
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Welcome Back</h2>

        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.button} onClick={handleEmailLogin}>
          Sign In
        </button>

        <div className={styles.divider}>OR</div>

        <button className={styles.googleButton} onClick={handleGoogleLogin}>
          Sign in with Google
        </button>

        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
}
