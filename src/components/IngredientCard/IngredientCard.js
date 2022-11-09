import styles from "./IngredientCard.module.scss";

export default function IngredientCard({ ingredients }) {
  return (
    <section className={styles.section}>
      <article className={styles.card}>
        <div className={styles.card__header}>
          <h3 className={styles.card__headerText}>Ingredients</h3>
        </div>
        <table className={styles.ingredientList}>
          <tbody>
            {ingredients.map(({ ingredientId, measurement, ingredient }) => {
              const [quantity, unit] = measurement.split(" ");
              console.log(quantity, unit);
              return (
                <tr key={ingredientId} className={styles.ingredientList__item}>
                  <td className={styles.ingredientList__quantity}>
                    {quantity}
                  </td>
                  <td className={styles.ingredientList__unit}>{unit}</td>
                  <td className={styles.ingredientList__ingredient}>
                    {ingredient}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </section>
  );
}
