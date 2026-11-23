import { ArrowLeft } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { experiences, skills } from "@/lib/portfolio-data";
import styles from "./Experience.module.css";

interface ExperienceProps {
  back: () => void;
}

const d = (ms: number): React.CSSProperties => ({ animationDelay: `${ms}ms` });

export function Experience({ back }: ExperienceProps) {
  return (
    <div className={`${styles.wrapper} scroll-area`} data-scroll="">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="rise" style={d(200)}>
            <BackButton onClick={back} icon={ArrowLeft} />
          </div>
          <h2 className={`${styles.title} rise`} style={d(100)}>
            Experiência
          </h2>
        </div>

        <div className={`${styles.cvBanner} rise`} style={d(300)}>
          <p className={styles.cvText}>Prefere tudo em um arquivo?</p>
          <a
            href="/curriculo-luis-henrique-gava-junior.pdf"
            download="Curriculo_Luis_Henrique_Gava_Junior.pdf"
            className={styles.cvBtn}
          >
            Baixar currículo ↓
          </a>
        </div>

        <ul className={styles.list}>
          {experiences.map((exp, index) => (
            <li
              key={exp.company}
              className={`${styles.item} rise`}
              style={d(400 + index * 150)}
            >
              <div className={styles.meta}>
                <p className={styles.period}>{exp.period}</p>
                <p className={styles.company}>{exp.company}</p>
              </div>
              <div>
                <h3 className={styles.role}>{exp.role}</h3>
                <ul className={styles.points}>
                  {exp.points.map((point) => (
                    <li key={point.text} className={styles.point}>
                      <span className={styles.pointLine} />
                      <div>
                        <p>{point.text}</p>
                        {point.stack && (
                          <p className={styles.pointStack}>{point.stack}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <div className={`${styles.skillsSection} rise`} style={d(900)}>
          <p className={styles.skillsLabel}>Ferramentas</p>
          <ul className={styles.skillsList}>
            {skills.map((skill) => (
              <li key={skill} className={styles.skillTag}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
