import React from "react";
import { Link } from "react-router-dom";

import styles from "./Product.module.scss";

export interface Iproduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  discription?: string;
  src?: string;
  details: {
    searchName: string;
    category: string;
    type: string;
    material: string;
    design: string;
  };
}

export const Product: React.FC<Iproduct> = (props) => {
  const { src, name, discription, price, brand, id } = props;

  return (
    <div className={styles.product}>
      <div className={styles.img__holder}>
        <Link to={`/Electronics/${id}`}>
          <img src={src} alt="product-img" />
        </Link>
      </div>
      <div className={styles.product__item__discription}>
        <p className={styles.product__name}>{name}</p>
        <span className={styles.product__price}>${price}</span>
        <span className={styles.product__brand}>{brand}</span>
        <p className={styles.product__discription}>{discription}</p>
        <Link to={`/Electronics/${id}`} className={styles.product__link}>
          View details
        </Link>
      </div>
    </div>
  );
};
