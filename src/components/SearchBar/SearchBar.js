import "./SearchBar.module.scss";

export default function SearchBar() {
  return (
    <div className="search__container">
      <form className="search__form">
        <input type="text" className="search__field" />
      </form>
    </div>
  );
}
