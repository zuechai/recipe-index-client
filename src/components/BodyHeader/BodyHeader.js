import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./BodyHeader.module.scss";

export default function BodyHeader({ header }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__title}>
        <h2 className={styles.header__name}>{header}</h2>
      </div>
      {header !== "Index" && (
        <div className={styles.header__edit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.header__editIcon}
            onClick={(e) => {
              console.log();
              setOpen(true);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
          <Modal open={open} setOpen={setOpen} />
        </div>
      )}
    </header>
  );
}
