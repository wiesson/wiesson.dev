import { FunctionComponent } from "preact";
import styles from "./Badge.module.css";

const Badge: FunctionComponent = ({ children }) => {
  return <span className={styles.badge}>{children}</span>;
};

export default Badge;
