import React from "react";
import { CURRENCIES } from "../../contants/currencies";
import styles from "./CurrencySelector.module.css";
export default function CurrencySelector() {
  return (
    <select className={styles.currencySelector}>
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
}
