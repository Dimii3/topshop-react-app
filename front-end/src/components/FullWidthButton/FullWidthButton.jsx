import React from "react";
import styles from "./FullWidthButton.module.css";

export default function FullWidthButton({ children, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}
