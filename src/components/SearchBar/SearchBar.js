import styles from "./SearchBar.module.scss";

export default function SearchBar({ setInputState }) {
  return (
    <div className={styles.search}>
      <form
        className={styles.search__form}
        onSubmit={(e) => e.preventDefault()}
      >
        <label className={styles.search__input} aria-label="Search Bar" />
        <input
          type="text"
          className={styles.search__field}
          placeholder={"Search your recipes..."}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setInputState(e.target.value);
              console.log("hit");
            }
          }}
          onChange={(e) => {
            if (e.target.value === "") {
              setInputState(null);
            }
          }}
        />
      </form>
    </div>
  );
}
