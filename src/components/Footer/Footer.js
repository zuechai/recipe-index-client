export default function Footer() {
  return (
    <footer className="f-footer">
      <div className="f-logo__wrapper">
        <h3 className="f-logo__text">Recipe Index</h3>
      </div>
      <ul className="f-nav">
        <li className="f-nav__items">
          <a href="/" className="f-nav__link">
            zuechai@gmail.com
          </a>
        </li>
        <li className="f-nav__items">
          <a href="/" className="f-nav__link">
            GitHub
          </a>
        </li>
        <li className="f-nav__items">
          <a href="/" className="f-nav__link">
            LinkedIn
          </a>
        </li>
      </ul>
      <div className="f-copyright">
        <p className="f-copyright__text">
          <span className="f-copyright__span">c</span> Anthony Zuech
        </p>
      </div>
    </footer>
  );
}
