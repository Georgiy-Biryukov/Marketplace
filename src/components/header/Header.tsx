import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";

import logo from "assets/icons/logo.png";
import { BackArrow } from "components/icons";
import { useMediaQuery } from "hooks";

import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 767px)");
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className="container">
        {isDesktop ? (
          <div className={styles.header__content__desktop}>
            <div className="logo-wpapper">
              <Link to="/">
                <img src={logo} alt="logo" className={styles.logo} />
              </Link>
            </div>
            <h1>
              Frontend task | <span>Biriukov Georgiy</span>
            </h1>
          </div>
        ) : (
          <div className={styles.header__content__mobile}>
            <Button
              type="link"
              className={styles.iconHolder}
              icon={<BackArrow />}
              onClick={() => navigate(-1)}
            />
            <span>Electronics</span>
          </div>
        )}
      </div>
    </header>
  );
};
