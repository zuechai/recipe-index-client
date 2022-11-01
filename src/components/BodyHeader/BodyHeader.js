import "./BodyHeader.scss";

export default function BodyHeader({ recipe }) {
  return (
    <header className="bh-header">
      <div className="bh-header__title">
        <h2 className="bh-header__name">{recipe.name}</h2>
      </div>
      {/* <div className="bh-crumb__wrapper">
        <ol className="bh-crumb__list">
          <li className="bh-crumb__item">bread</li>
          <li className="bh-crumb__item">crumb</li>
          <li className="bh-crumb__item">links</li>
        </ol>
      </div> */}
    </header>
  );
}
