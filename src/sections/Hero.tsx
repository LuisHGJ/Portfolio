import { ArrowDown } from "lucide-react";
import { Pipes } from "@/components/Pipes";
import { profile } from "@/lib/portfolio-data";
import styles from "./Hero.module.css";

interface HeroProps {
  onNext: () => void;
}

const d = (ms: number): React.CSSProperties => ({ animationDelay: `${ms}ms` });

export function Hero({ onNext }: HeroProps) {
  return (
    <div className={styles.hero}>
      <div className={`${styles.scroll} scroll-area`} data-scroll="">
        <div className={styles.content}>
          <div className={`${styles.avatar} rise`} style={d(100)}>
            <img src="/retrato.png" alt="Luís Henrique Gava Junior" />
          </div>

          <p className={`${styles.location} rise`} style={d(300)}>
            {profile.location}
          </p>

          <h1 className={`${styles.name} rise`} style={d(450)}>
            Luís Henrique
            <br />
            <em>Gava Junior</em>
          </h1>

          <div className={`${styles.roleBlock} rise`} style={d(650)}>
            <p className={styles.role}>
              <Pipes text={profile.role} />
            </p>
            <p className={styles.focus}>
              <Pipes text={profile.focusLines[0]} />
              <span style={{ color: "var(--muted-foreground)" }}> |</span>
              <br />
              <Pipes text={profile.focusLines[1]} />
            </p>
          </div>

          <div className={`${styles.facts} rise`} style={d(900)}>
            {profile.facts.map((fact) => (
              <div key={fact.k}>
                <div className={styles.factValue}>{fact.v}</div>
                <div className={styles.factLabel}>{fact.k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        aria-label="Ir para o início"
        className={`${styles.nextBtn} rise`}
        style={d(1200)}
      >
        <span className={styles.nextBtnIcon}>
          <ArrowDown size={16} strokeWidth={1.5} />
        </span>
      </button>
    </div>
  );
}
