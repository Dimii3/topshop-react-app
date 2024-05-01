import React from "react";
import BAG_ICON from "../../assets/bag.svg";
import HEART from "../../assets/heart.svg";
import { Link } from "react-router-dom";
import styles from "./IconMenu.module.css";

export default function IconMenu() {
  const cartItems = 2;
  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to={"/ulubione"}>
          <img src={HEART} alt="ulubione" />
        </Link>
      </li>
      <li>
        <Link to={"/koszyk"}>
          <img src={BAG_ICON} alt="koszyk" />
          <div className={styles.numberOfProducts}>{cartItems}</div>
        </Link>
      </li>
    </ul>
  );
}
