import React from "react";
import styles from "./CartProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";

export default function CartProduct({ favouriteProduct }) {
  return (
    <div className={styles.favouriteProduct}>
      <img
        src={favouriteProduct.photos[0]}
        alt={favouriteProduct.productName}
      />
      <div className={styles.favouriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {favouriteProduct.brand} {favouriteProduct.productName}
          </h3>
          <p>{favouriteProduct.pricePLN}zł</p>
        </div>
        <p className={styles.priceRow}>
          <span>Cena</span> {favouriteProduct.pricePLN}zł
        </p>
        <div className={styles.buttonRow}>
          <button>
            <img src={REMOVE_ICON} />
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
}
