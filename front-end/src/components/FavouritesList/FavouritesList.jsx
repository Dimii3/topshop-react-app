import React from "react";
import CenteredContent from "../CenteredContent/CenteredContent";
import FavouriteProduct from "../FavouriteProduct/FavouriteProduct";
import styles from "./FavouritesList.module.css";
export default function FavouritesList({ products }) {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione produkty</h2>
        <div>
          {products.map((product) => (
            <FavouriteProduct
              key={product.id}
              favouriteProduct={product}
            ></FavouriteProduct>
          ))}
        </div>
      </div>
    </CenteredContent>
  );
}
