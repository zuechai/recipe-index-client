import { Link } from "react-router-dom";

import "./NavBar.scss";

export default function NavBar() {
  return (
    <header className="nb-header">
      <div className="nb-logo__wrapper">
        <h1 className="nb-logo__text">Rcp Indx</h1>
      </div>
      <div className="nb-searchbar">{/* Hidden Search Bar */}</div>
      <ul className="nb-nav">
        <li className="nb-nav__item">
          <Link to="/recipes" className="nb-nav__link">
            Index
          </Link>
        </li>
        <li className="nb-nav__item">
          <Link to="/account" className="nb-nav__link">
            Account
          </Link>
        </li>
      </ul>
    </header>
  );
}
