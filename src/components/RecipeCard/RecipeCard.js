import styles from "./RecipeCard.module.scss";

export default function RecipeCard({ id, title, image }) {
  const imgOverlay =
    "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))";
  const testImg = "http://localhost:5050/static/images/dashi-16-9.jpg";
  return (
    <article
      className={styles.card}
      style={{ backgroundImage: `${imgOverlay}, url(${testImg})` }}
    >
      <header className={styles.card__header}>
        <h3 className={styles.card__headerText}>{title}</h3>
      </header>
    </article>
  );
}
