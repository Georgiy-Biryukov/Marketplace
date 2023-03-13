import React, { useContext } from "react";

import { Context } from "helpers/MenuContext";
import { useAppSelector, useMediaQuery } from "hooks";
import { Product } from "components/product";
import { Form } from "components/form";
import { SortStrip } from "components/sortStrip";

import styles from "./ProductsPage.module.scss";

export const Products: React.FC = () => {
  const electronics = useAppSelector((state) => state.products.electronics);
  const { isOpen } = useContext(Context);
  const isDesktop = useMediaQuery("(min-width: 767px)");

  return (
    <>
      <SortStrip />
      <div className={styles.productPage__holder}>
        <aside
          className={
            isOpen || isDesktop ? styles.sidebarOpen : styles.sidebarClose
          }
        >
          <Form />
        </aside>
        <div className={styles.content}>
          <ul>
            {electronics.map((item) => {
              return (
                <li key={item.id}>
                  <Product {...item} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
