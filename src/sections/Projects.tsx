import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { thumbs } from "@/components/thumbs";
import { projects } from "@/lib/portfolio-data";
import styles from "./Projects.module.css";

interface ProjectsProps {
  back: () => void;
}

const d = (ms: number): React.CSSProperties => ({ animationDelay: `${ms}ms` });

export function Projects({ back }: ProjectsProps) {
  return (
    <div className={`${styles.wrapper} scroll-area`} data-scroll="">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={`${styles.title} rise`} style={d(100)}>
            Projetos
          </h2>
          <div className="rise" style={d(200)}>
            <BackButton onClick={back} icon={ArrowRight} />
          </div>
        </div>

        <p className={`${styles.intro} rise`} style={d(300)}>
          Alguns projetos pessoais, acadêmicos e sites que desenvolvi para outras pessoas e posso
          mostrar publicamente.
        </p>

        <ul className={styles.grid}>
          {projects.map((project, index) => {
            const Thumb = project.thumb ? thumbs[project.thumb] : null;
            return (
              <li
                key={project.title}
                className={`${styles.card} rise`}
                style={d(400 + index * 150)}
              >
                {/* thumb */}
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.thumb}
                    aria-label={`Abrir ${project.title}`}
                  >
                    {Thumb ? <Thumb /> : <div className={styles.thumbFallback} />}
                  </a>
                ) : (
                  <div className={styles.thumb}>
                    {Thumb ? <Thumb /> : <div className={styles.thumbFallback} />}
                  </div>
                )}

                {/* body */}
                <div className={styles.body}>
                  <div className={styles.bodyTop}>
                    <span className={styles.index}>0{index + 1}</span>
                    <span className={styles.year}>{project.year}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.tag}>{project.tag}</p>
                  <p className={styles.desc}>{project.desc}</p>
                  <p className={styles.stack}>{project.stack}</p>

                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.link}
                    >
                      Ver projeto
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
