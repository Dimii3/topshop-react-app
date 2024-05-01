import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainMenu.module.css";
import { GENDERS } from "../../contants/categories";

export default function MainMenu() {
  return (
    <ul className={styles.mainMenu}>
      {GENDERS.map((category) => {
        return (
          <li key={category.path}>
            <NavLink to={category.path}>{category.categoryName}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
