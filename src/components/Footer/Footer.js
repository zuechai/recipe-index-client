import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="f-footer">
      <div className="f-column">
        <div className="f-logo__wrapper">
          <h3 className="f-logo__text">Recipe Index</h3>
        </div>
        <div className="f-copyright">
          <p className="f-copyright__text">
            <span className="f-copyright__span">&copy;</span> Anthony Zuech
          </p>
        </div>
      </div>
      <ul className="f-nav">
        <li className="f-nav__item">
          <a href="https://github.com/zuechai" className="f-nav__link">
            GitHub
          </a>
        </li>
        <li className="f-nav__item">
          <a href="https://www.linkedin.com/in/zuechai" className="f-nav__link">
            LinkedIn
          </a>
        </li>
        <li className="f-nav__item">
          <a href="mailto:zuechai@gmail.com" className="f-nav__link">
            zuechai@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
}
