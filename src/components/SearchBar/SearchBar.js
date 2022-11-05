import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.search}>
      <form className={styles.search__form}>
        <input type="text" className={styles.search__field} />
      </form>
    </div>
  );
}
