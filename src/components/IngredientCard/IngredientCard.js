import "./IngredientCard.scss";

export default function IngredientCard({ ingredients }) {
  console.log(ingredients);
  return (
    <section className="ic-section">
      <article className="ic-card">
        <div className="ic-card__header">
          <h3 className="ic-card__header-text">Ingredients</h3>
        </div>
        <ul className="ic-ingredient-list">
          {ingredients.map(({ ingredientId, measurement, ingredient }) => {
            return (
              <li key={ingredientId} className="ic-ingredient-list__item">
                <div className="ic-ingredient-list__detail ic-ingredient-list__detail--quantity">
                  {measurement}
                </div>
                {/* <div className="ic-ingredient-list__detail">{unit}</div> */}
                <div className="ic-ingredient-list__detail">{ingredient}</div>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}
