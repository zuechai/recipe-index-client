// import { Link } from "react-router-dom";

import "./NavBar.scss";

export default function NavBar() {
  return (
    <header className="nb-header">
      <div className="nb-logo__wrapper">
        <h1 className="nb-logo__text">Logo</h1>
      </div>
      <div className="nb-searchbar">{/* Hidden Search Bar */}</div>
      <ul className="nb-nav">
        <li className="nb-nav__item">
          <a href="/" className="nb-nav__link">
            Index
          </a>
        </li>
        <li className="nb-nav__item">
          <a href="/" className="nb-nav__link">
            Account
          </a>
        </li>
      </ul>
    </header>
  );
}
