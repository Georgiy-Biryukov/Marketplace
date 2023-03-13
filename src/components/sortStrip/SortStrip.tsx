import React, { useContext } from "react";
import {
  SortDown,
  SortUp,
  OpenMenuIcon,
  CloseMenuIcon,
} from "components/icons";
import { Button, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import styles from "./SortStrip.module.scss";
import { sortByAscending, sortByDescending } from "store/slices/productsSlice";
import { useAppDispatch } from "hooks";
import { Context } from "helpers/MenuContext";

export const SortStrip: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(Context);

  const dispatch = useAppDispatch();

  const sortHigthToLow = () => {
    dispatch(sortByDescending());
  };

  const sortLowToHigth = () => {
    dispatch(sortByAscending());
  };

  return (
    <div className={styles.sortStrip}>
      <div className={styles.sortBtn__holder}>
        <Button
          icon={<SortUp />}
          className={styles.sortBtn}
          onClick={sortLowToHigth}
        >
          Price: Low to High
        </Button>
        <Button
          icon={<SortDown />}
          className={styles.sortBtn}
          onClick={sortHigthToLow}
        >
          Price: High to Low
        </Button>
        <Button
          className={styles.OpenMenuBtn}
          type="default"
          icon={isOpen ? <CloseMenuIcon /> : <OpenMenuIcon />}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
};
