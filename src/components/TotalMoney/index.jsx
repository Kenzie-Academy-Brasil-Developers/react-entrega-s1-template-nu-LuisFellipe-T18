import styles from "./style.module.scss";

export const TotalMoney = ({ resumeFinance }) => {
    
    const totalValue = resumeFinance.reduce((previousValue, currentValue) => { 
       const valueTotal = Number(currentValue.value)
    return  previousValue + Number(valueTotal)}, 0)

  return (
    <section className={styles.flexBox}>
      <div className={styles.flexValue}>
        <h3 className="title3">Valor total:</h3>
        <span className="title3">R$ {totalValue.toFixed(2)}</span>
      </div>
    </section>
  );
};
