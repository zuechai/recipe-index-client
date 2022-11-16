import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.logo__wrapper}>
          <h3 className={styles.logo__text}>Recipe Index</h3>
        </div>
        <div className={styles.copyright}>
          <p className={styles.copyright__text}>
            <span className={styles.copyright__span}>&copy;</span> Anthony Zuech
          </p>
        </div>
      </div>
      <ul className={styles.nav}>
        <li className={styles.nav__item}>
          <a href="https://github.com/zuechai" className={styles.nav__link}>
            GitHub
          </a>
        </li>
        <li className={styles.nav__item}>
          <a
            href="https://www.linkedin.com/in/zuechai"
            className={styles.nav__link}
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.nav__item}>
          <a href="mailto:zuechai@gmail.com" className={styles.nav__link}>
            zuechai@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
}
