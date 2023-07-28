import styles from "./style.module.scss";

export const TotalMoney = ({ resumeFinance }) => {
  const totalValue = resumeFinance.reduce((acc, acv) => {
    return acv.typeValue === "Entrada"
      ? acc + Number(acv.value)
      : acc - Number(acv.value);
  }, 0);

  return (
    <section className={styles.flexBox}>
      <div className={styles.flexValue}>
        <h3 className="title3">Valor total:</h3>
        <span className="title3">R$ {totalValue.toFixed(2)}</span>
      </div>
      <div>
        <p className="title4">O valor se refere ao saldo</p>
      </div>
    </section>
  );
};
