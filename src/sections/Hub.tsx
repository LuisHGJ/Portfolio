import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { HubArrow } from "@/components/HubArrow";
import { profile, type Dir } from "@/lib/portfolio-data";
import styles from "./Hub.module.css";

interface HubProps {
  go: (dir: Dir) => void;
}

const d = (ms: number): React.CSSProperties => ({ animationDelay: `${ms}ms` });

export function Hub({ go }: HubProps) {
  return (
    <div className={styles.hub}>
      <div className={styles.top}>
        <HubArrow
          onClick={() => go("up")}
          label="Início"
          icon={ArrowUp}
          delay={900}
          vertical
        />
      </div>

      <div className={styles.left}>
        <HubArrow
          onClick={() => go("left")}
          label="Projetos"
          icon={ArrowLeft}
          delay={600}
          nudgeLeft
        />
      </div>

      <div className={`${styles.center} scroll-area`} data-scroll="">
        <p className={`${styles.label} rise`} style={d(100)}>
          Sobre
        </p>
        <p className={`${styles.summary} rise`} style={d(250)}>
          {profile.summary}
        </p>
        <p className={`${styles.hint} rise`} style={d(500)}>
          Use o scroll, as setas do teclado ou toque nas direções.
        </p>
      </div>

      <div className={styles.right}>
        <HubArrow
          onClick={() => go("right")}
          label="Experiência"
          icon={ArrowRight}
          delay={700}
          reverse
        />
      </div>

      <div className={styles.bottom}>
        <HubArrow
          onClick={() => go("down")}
          label="Contato"
          icon={ArrowDown}
          delay={800}
          vertical
          reverse
        />
      </div>
    </div>
  );
}
