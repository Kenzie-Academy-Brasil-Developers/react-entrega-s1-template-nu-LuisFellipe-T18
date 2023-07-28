import { Header } from "../Header";
import styles from "./style.module.scss";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <div className={`${styles.gradient}`}></div>
      <main className={styles.flexBox} id="container">
        {children}
      </main>
    </>
  );
};
