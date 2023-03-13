import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import { Seperator } from "components/icons";

import styles from "./Breadcrumbs.module.scss";

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathSnippets = [
    "Home",
    ...location.pathname.split("/").filter((i) => i),
  ];

  const routes = pathSnippets.map((_, index) => {
    return {
      title: pathSnippets[index],
    };
  });

  return (
    <div className={styles.breadcrumbs__holder}>
      <Breadcrumb
        items={routes}
        separator={<Seperator />}
        className={styles.breadcrumbs}
      />
    </div>
  );
};
