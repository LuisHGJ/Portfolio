import styles from "./KaizenPeriodizacao.module.css";

export function KaizenPeriodizacaoThumb() {
  return (
    <div className={styles.wrapper}>
      <img
        src="/kaizen-periodizacao.jpg"
        alt="Fundamentos da Periodização — Kaizen Powerlifting"
        className={styles.image}
      />
    </div>
  );
}
