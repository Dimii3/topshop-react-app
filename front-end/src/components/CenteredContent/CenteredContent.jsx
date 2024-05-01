import React from "react";
import styles from "./CenteredContent.module.css";

export default function CenteredContent({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
