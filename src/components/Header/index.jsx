import styles from "./style.module.scss";
import NuLogo from "../../assets/Nu Kenzie.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <img src={NuLogo} alt="Logo Nu Kenzie" />
      </div>
      
    </header>
  );
};
