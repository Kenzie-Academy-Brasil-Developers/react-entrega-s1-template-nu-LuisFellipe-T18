import styles from "./style.module.scss";

export const NuCard = ({ description, value, typeValue, deleteResume, id }) => {
  const valueBrazil = Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  
  typeValue === "Entrada" ? "border__green" : "border__red"
  
  return (
    <li className={styles.flexBox__container}>
      <div className={typeValue === "Entrada" ? "border__green" : "border__red"}>
        <div className={styles.flexBox__card}>
          <h2 className="title3">{description}</h2>
          <span className="font__body">{valueBrazil}</span>
        </div>
        <div className={styles.flexBox__card}>
          <h3 className="font__body">{typeValue}</h3>
          
          <button
            className="delete__value btn"
            onClick={() => deleteResume(id)}
          >
            Excluir
          </button>
        </div>
      </div>
    </li>
  );
};
