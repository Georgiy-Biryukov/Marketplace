import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "components/header";
import { Breadcrumbs } from "components/breadcrumbs";

import styles from "./Layout.module.scss";

export const Layout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className="main">
        <div className="container">
          <Breadcrumbs />
          <Outlet />
        </div>
      </main>
    </div>
  );
};
