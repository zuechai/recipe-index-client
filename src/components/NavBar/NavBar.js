import { Link } from "react-router-dom";

import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo__wrapper}>
        <h1 className={styles.logo__text}>Rcp Indx</h1>
      </div>
      <div className={styles.searchbar}>{/* Hidden Search Bar */}</div>
      <ul className={styles.nav}>
        <li className={styles.nav__item}>
          <Link to="/" className={styles.nav__link}>
            Index
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/" className={styles.nav__link}>
            Account
          </Link>
        </li>
      </ul>
    </header>
  );
}
