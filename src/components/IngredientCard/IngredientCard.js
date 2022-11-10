import styles from "./IngredientCard.module.scss";

export default function IngredientCard({ ingredients }) {
  const tableRows = ingredients.map(
    ({ ingredientId, measurement, ingredient }) => {
      let quantity,
        unit = null;
      if (measurement !== null) {
        [quantity, unit] = measurement.split(" ");
      } else {
      }

      return (
        <tr key={ingredientId} className={styles.ingredientList__item}>
          <td className={styles.ingredientList__quantity}>{quantity}</td>
          <td className={styles.ingredientList__unit}>{unit}</td>
          <td className={styles.ingredientList__ingredient}>{ingredient}</td>
        </tr>
      );
    }
  );

  return (
    <section className={styles.section}>
      <article className={styles.card}>
        <div className={styles.card__header}>
          <h3 className={styles.card__headerText}>Ingredients</h3>
        </div>
        <table className={styles.ingredientList}>
          <tbody>{tableRows}</tbody>
        </table>
      </article>
    </section>
  );
}
