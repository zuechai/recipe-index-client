import "./BodyHeader.scss";

export default function BodyHeader({ header }) {
  return (
    <header className="bh-header">
      <div className="bh-header__title">
        <h2 className="bh-header__name">{header}</h2>
      </div>
    </header>
  );
}
