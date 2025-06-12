import styles from "@/styles/Navbar.module.css";
import Heading from "./Heading";
import LoadPreset from "./LoadPreset";
import HistoryButton from "./HistoryButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function Navbar() {
  const user = useCurrentUser();

  return (
    <nav className={styles.navbar}>
      <Heading />
      <div className={styles.rightButtons}>
        <LoadPreset />
        <HistoryButton />
        {user && <span className={styles.emailDisplay}>{user.email}</span>}
        <LogoutButton />
      </div>
    </nav>
  );
}
