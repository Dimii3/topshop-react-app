import React from "react";
import CenteredContent from "../CenteredContent/CenteredContent";
import Product from "../Product/Product";
import styles from "./Bestsellers.module.css";

export default function Bestsellers({ products, headerText }) {
  return (
    <CenteredContent>
      <h2 className={styles.bestsellersHeader}>{headerText}</h2>
      <div className={styles.productsWrapper}>
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </CenteredContent>
  );
}
