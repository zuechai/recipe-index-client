import "./IngredientCard.scss";

export default function IngredientCard({ ingredients }) {
  return (
    <section className="ic-section">
      <article className="ic-card">
        <div className="ic-card__header">
          <h3 className="ic-card__header-text">Ingredients</h3>
        </div>
        <ul className="ic-ingredient-list">
          {ingredients.map(({ quantity, unit, ingredient }) => {
            return (
              <li className="ic-ingredient-list__item">
                <span className="ic-ingredient-list__detail ic-ingredient-list__detail--quantity">
                  {quantity}
                </span>
                <span className="ic-ingredient-list__detail">{unit}</span>
                <span className="ic-ingredient-list__detail">{ingredient}</span>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}
