import { FC } from "react";

import styles from "./Badge.module.css";

const Badge: FC = ({ children }) => {
  return <span className={styles.badge}>{children}</span>;
};

export default Badge;
