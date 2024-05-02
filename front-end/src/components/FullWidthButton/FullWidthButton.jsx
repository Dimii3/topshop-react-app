import React from "react";
import styles from "./FullWidthButton.module.css";

export default function FullWidthButton({ children, onClick, isBlack }) {
  return (
    <button
      className={`${styles.btn} ${isBlack && styles.black}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
