import "./RecipeCard.module.scss";

export default function RecipeCard({ title, image }) {
  return (
    <article className="card" style={{ backgroundImage: image }}>
      <header className="card__header">
        <h3 className="card__header-text">{title}</h3>
      </header>
    </article>
  );
}
