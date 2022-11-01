import "./Methods.scss";

export default function Methods({ methods }) {
  return (
    <section className="m-section">
      <header className="m-section__header">
        <h3 className="m-section__header-text">Method</h3>
        <div className="m-section__header-divider" />
      </header>
      <ul className="m-list">
        {methods.length > 0 &&
          methods.map(({ id, stepNum, method }) => {
            return (
              <li key={id} className="m-list-item">
                <p className="m-list-item__step">
                  {stepNum < 10 ? `0${stepNum}` : stepNum}
                </p>
                <p className="m-list-item__method">{method}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
