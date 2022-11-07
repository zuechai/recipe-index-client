import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.search}>
      <form className={styles.search__form}>
        <label className={styles.search__input} aria-label="Search Bar" />
        <input
          type="text"
          className={styles.search__field}
          placeholder={"Search your recipes..."}
        />
      </form>
    </div>
  );
}
