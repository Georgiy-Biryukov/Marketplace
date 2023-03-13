import React from "react";
import { useParams } from "react-router-dom";
import { Button, Divider } from "antd";
import { useAppSelector } from "hooks";

import styles from "./ProductPage.module.scss";

export const Product: React.FC = () => {
  const { id } = useParams();

  const { electronics } = useAppSelector((state) => state.products);
  const singleProduct = electronics.find((el) => el.id === Number(id));

  return (
    <div className={styles.singleProductPage}>
      <div className={styles.singleProduct}>
        <div className={styles.singleProduct__image}>
          <img src={singleProduct?.src} alt="product-img" />
        </div>
        <div className={styles.singleProduct__desccription}>
          <h2 className={styles.singleProduct__name}>{singleProduct?.name}</h2>
          <h2 className={styles.singleProduct__price}>
            ${singleProduct?.price}
          </h2>
          <Button type="primary" className={styles.singleProduct__btn}>
            Buy
          </Button>
          <div className={styles.singleProduct__details}>
            <div className={styles.singleProduct__details__row}>
              <span>Category:</span>
              <span>{singleProduct?.details.category}</span>
            </div>
            <Divider className={styles.divider} />
            <div className={styles.singleProduct__details__row}>
              <span>Type:</span>
              <span>{singleProduct?.details.type}</span>
            </div>
            <div className={styles.singleProduct__details__row}>
              <span>Material:</span>
              <span>{singleProduct?.details.material}</span>
            </div>
            <div className={styles.singleProduct__details__row}>
              <span>Design:</span>
              <span>{singleProduct?.details.design}</span>
            </div>
            <Divider className={styles.divider} />
          </div>
        </div>
      </div>
      <div className={styles.singleProduct__description}>
        <p>{singleProduct?.discription}</p>
      </div>
    </div>
  );
};
