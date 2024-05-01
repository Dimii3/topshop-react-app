import React from "react";
import styles from "./Hero.module.css";
import CenteredContent from "../CenteredContent/CenteredContent";
import FullWidthButton from "../FullWidthButton/FullWidthButton";

export default function Hero({ heroImage }) {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <CenteredContent>
        <div className={styles.contentWrapper}>
          <h2>Letnia promocja do -60%</h2>
          <p>Tylko najkorzystniejsze okazje!</p>
          <FullWidthButton>Sprawdź nasze produkty</FullWidthButton>
        </div>
      </CenteredContent>
    </div>
  );
}
