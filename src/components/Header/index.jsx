import styles from "./style.module.scss";
import NuLogo from "../../assets/Nu Kenzie.svg";

export const Header = () => {
  return (
    <header className={styles.flexBox}>
      <div className="container">
        <img src={NuLogo} alt="Logo Nu Kenzie" />
      </div>
      <div className={`${styles.gradient}`}></div>
    </header>
  );
};
