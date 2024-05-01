import React from "react";
import styles from "./Footer.module.css";

const date = new Date().getFullYear();

export default function Footer() {
  return <footer className={styles.footer}>Copyright {date}</footer>;
}
