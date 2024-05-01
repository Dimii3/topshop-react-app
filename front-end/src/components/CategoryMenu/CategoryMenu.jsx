import React from "react";
import { CATEGORIES } from "../../contants/categories";
import { NavLink } from "react-router-dom";
import styles from "./CategoryMenu.module.css";

export default function CategoryMenu() {
  return (
    <div className={styles.categoryMenu}>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.categoryName}>
              <NavLink to={category.path}>{category.categoryName}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
