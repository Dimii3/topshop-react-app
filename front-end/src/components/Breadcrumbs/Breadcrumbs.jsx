import React from "react";
import styles from "./Breadcrumbs.module.css";
import ARROW_RIGHT from "../../assets/arrow-right.svg";
import { NavLink } from "react-router-dom";
export default function Breadcrumbs() {
  const breadcrumbs = [
    {
      categoryName: "Kobieta",
      path: "kobieta",
    },
    {
      categoryName: "Odzież",
      path: "odziez",
    },
    {
      categoryName: "Swetry",
      path: "swetry",
    },
  ];

  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb) => {
        return (
          <li key={breadcrumb.path}>
            <NavLink to={breadcrumb.path}>
              {breadcrumb.categoryName}
              <img src={ARROW_RIGHT} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
