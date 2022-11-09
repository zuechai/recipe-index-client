import { useRef } from "react";
import styles from "./Modal.module.scss";

export default function Modal({ open, setOpen }) {
  const checkRef = useRef();

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
                id="textInput"
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
                  console.log("find users");
                  setOpen(false);
                }}
              >
                Find User
              </button>
            </div>
            <div className={styles.modal__divider} />
            <ul className="">
              {
                // map users here
                <li className={styles.modal__userItem} key={"id"}>
                  <div className={styles.modal__userOptions}>
                    <label htmlFor={"id"} className="">
                      User name
                    </label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={styles.modal__icon}
                      onClick={(e) => {
                        console.log("delete");
                        setOpen(false);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className={styles.modal__userOptions}>
                    <input
                      type="checkbox"
                      id={"canEdit"}
                      value="canEdit"
                      className={styles.modal__checkbox}
                      ref={checkRef}
                      onChange={(e) => console.log(checkRef.current.checked)}
                    />
                    <label htmlFor={"canEdit"} className="">
                      Give access to edit recipe
                    </label>
                  </div>
                </li>
              }
            </ul>
            <div className={styles.modal__inputWrap}>
              <button
                className={`${styles.modal__button} ${styles.modal__buttonSubmit}`}
                onClick={() => {
                  console.log("submit");
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
