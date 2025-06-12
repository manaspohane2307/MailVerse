"use client";

import Button from "@/components/Button/Button";
import { Clock } from "lucide-react";

export default function HistoryButton() {
  const handleClick = () => {
    alert("Viewing email history...");
  };

  return (
    <Button onClick={handleClick} icon={<Clock size={16} />}>
      History
    </Button>
  );
}
