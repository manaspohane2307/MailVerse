// components/Navbar/LogoutButton.tsx
import { logout } from "@/utils/firebaseAuth";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import Button from "@/components/Button/Button";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login"); // or your desired post-logout route
  };

  return (
    <Button onClick={handleLogout} icon={<LogOut size={16} />}>
      Logout
    </Button>
  );
}
