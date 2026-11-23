import type { LucideIcon } from "lucide-react";
import styles from "./BackButton.module.css";

interface BackButtonProps {
  onClick: () => void;
  icon: LucideIcon;
  label?: string;
}

export function BackButton({ onClick, icon: Icon, label = "Voltar" }: BackButtonProps) {
  return (
    <button onClick={onClick} className={styles.btn} aria-label={label}>
      <span className={styles.icon}>
        <Icon size={16} strokeWidth={1.5} />
      </span>
      {label}
    </button>
  );
}
