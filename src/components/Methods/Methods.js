import styles from "./Methods.module.scss";

export default function Methods({ methods }) {
  console.log(methods);
  return (
    <section className={styles.section}>
      <header className={styles.section__header}>
        <h3 className={styles.section__headerText}>Method</h3>
        <div className={styles.section__headerDivider} />
      </header>
      <ul className={styles.list}>
        {methods.length > 0 &&
          methods.map(({ id, stepNum, method }) => {
            return (
              <li key={id} className={styles.listItem}>
                <div className={styles.listItem__step}>
                  {stepNum < 10 ? `0${stepNum}` : stepNum}
                </div>
                <div className={styles.listItem__method}>{method}</div>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
