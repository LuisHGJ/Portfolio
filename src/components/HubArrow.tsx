import type { LucideIcon } from "lucide-react";
import styles from "./HubArrow.module.css";

interface HubArrowProps {
  onClick: () => void;
  label: string;
  icon: LucideIcon;
  delay: number;
  vertical?: boolean;
  reverse?: boolean;
  nudgeLeft?: boolean;
}

export function HubArrow({
  onClick,
  label,
  icon: Icon,
  delay,
  vertical = false,
  reverse = false,
  nudgeLeft = false,
}: HubArrowProps) {
  const dirClass = vertical
    ? reverse
      ? styles["inner--col-reverse"]
      : styles["inner--col"]
    : reverse
      ? styles["inner--row-reverse"]
      : "";

  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={styles.btn}
    >
      <span
        className={`${styles.inner} ${dirClass} rise`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <span
          className={`${styles.circle} ${!vertical ? styles["circle--nudge-x"] : ""}`}
          style={
            !vertical
              ? ({ "--nudge-amount": nudgeLeft ? "-6px" : "6px" } as React.CSSProperties)
              : undefined
          }
        >
          <Icon size={16} strokeWidth={1.5} />
        </span>
        <span className={styles.label}>{label}</span>
      </span>
    </button>
  );
}
