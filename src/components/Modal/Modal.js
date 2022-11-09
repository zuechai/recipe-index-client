import styles from "./Modal.module.scss";

export default function Modal({ open, setOpen }) {
  if (!open) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={(e) => setOpen(false)}>
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal__header}>
          <h4 className={styles.modal__title}>Add or remove collaborators:</h4>
        </div>
        <div className={styles.modal__body}>
          <form
            className={styles.modal__form}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.modal__inputWrap}>
              <label htmlFor="textInput" className={styles.modal__inputLabel}>
                Find Users:
              </label>
              <input
                type="text"
                className={styles.modal__textInput}
                name="textInput"
                placeholder="Find Users"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    console.log("Enter");
                  }
                }}
              />
            </div>
            <div className={styles.modal__inputWrap}>
              <button
                className={styles.modal__button}
                onClick={() => {
                  console.log("clicked");
                  setOpen(false);
                }}
              >
                Find User
              </button>
            </div>
            <div className={styles.modal__divider} />
            <ul className="">
              <li className="" key={"id"}>
                <div className={styles.modal__inputWrap}>
                  <input type="checkbox" name={"id"} value={"id"} />
                  <label htmlFor={"id"} className="">
                    User name
                  </label>
                </div>
                <div className={styles.modal__inputWrap}>
                  <label htmlFor={"canEdit"} className="">
                    Give access to edit recipe:
                  </label>
                  <input type="checkbox" name={"canEdit"} value={"true"} />
                </div>
              </li>
            </ul>
            <div className={styles.modal__inputWrap}>
              <button
                className={styles.modal__button}
                onClick={() => {
                  console.log("clicked");
                  setOpen(false);
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
