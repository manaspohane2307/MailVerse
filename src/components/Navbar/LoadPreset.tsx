// components/Navbar/LoadPreset.tsx
import { ChevronDown } from "lucide-react";
import Button from "@/components/Button/Button";

export default function LoadPreset() {
  const handleSavePreset = () => {
    // Save preset logic
  };

  const handleLoadPreset = () => {
    // Load preset logic
  };

  return (
    <Button onClick={handleLoadPreset} icon={<ChevronDown size={16} />}>
      Load Preset
    </Button>
  );
}
