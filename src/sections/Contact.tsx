import { ArrowUp, Mail, Linkedin, Github, MessageCircle, type LucideIcon } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { contacts } from "@/lib/portfolio-data";
import styles from "./Contact.module.css";

interface ContactProps {
  back: () => void;
}

const d = (ms: number): React.CSSProperties => ({ animationDelay: `${ms}ms` });

const iconMap: Record<string, LucideIcon> = {
  "E-mail": Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
  WhatsApp: MessageCircle,
};

export function Contact({ back }: ContactProps) {
  return (
    <div className={`${styles.wrapper} scroll-area`} data-scroll="">
      <div className={`${styles.backRow} rise`} style={d(100)}>
        <BackButton onClick={back} icon={ArrowUp} />
      </div>

      <div className={styles.body}>
        <h2 className={`${styles.title} rise`} style={d(200)}>
          Vamos <em>conversar.</em>
        </h2>

        <div className={styles.grid}>
          {contacts.map((contact, index) => {
            const Icon = iconMap[contact.label];
            const isExternal = contact.href.startsWith("http");

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className={`${styles.link} rise`}
                style={d(400 + index * 100)}
              >
                <div className={styles.linkLeft}>
                  <span className={styles.linkIcon}>
                    {Icon && <Icon size={18} strokeWidth={1.5} />}
                  </span>
                  <div className={styles.linkMeta}>
                    <p className={styles.linkLabel}>{contact.label}</p>
                    <p className={styles.linkValue}>{contact.value}</p>
                  </div>
                </div>
                <span className={styles.linkArrow}>↗</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
