import React from "react";
import CenteredContent from "../CenteredContent/CenteredContent";
import styles from "./CartProductsList.module.css";
import CartProduct from "../CartProduct/CartProduct";
export default function CartProductsList({ products }) {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione produkty</h2>
        <div>
          {products.map((product) => (
            <CartProduct
              key={product.id}
              favouriteProduct={product}
            ></CartProduct>
          ))}
        </div>
      </div>
    </CenteredContent>
  );
}
