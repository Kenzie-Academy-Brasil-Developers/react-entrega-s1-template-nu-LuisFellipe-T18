import { NuCard } from "../NuCard";
import styles from "./style.module.scss";

export const NuList = ({ resumeFinance, deleteResume }) => {
  return (
    <section className={styles.flexBox}>
      <div className="container" >
        <h1>Resumo financeiro</h1>
        {resumeFinance.length > 0 ? (
          <ul className={`${styles.flexBox}`}>
            {resumeFinance.map((resume) => (
              <NuCard
                id={resume.id}
                key={resume.id}
                description={resume.description}
                value={resume.value}
                typeValue={resume.typeValue}
                deleteResume={deleteResume}
              />
            ))}
          </ul>
        ) : (
          <p className="title3 ">Você ainda não possui nenhum lançamento</p>
        )}
      </div>
    </section>
  );
};
