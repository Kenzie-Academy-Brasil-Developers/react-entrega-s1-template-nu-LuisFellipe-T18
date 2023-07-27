import { useState } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { NuForm } from "../../components/NuForm";
import { NuList } from "../../components/NuList";
import { TotalMoney } from "../../components/TotalMoney";
import styles from "./style.module.scss";
import { v4 as uuidv4 } from "uuid";

export const HomePage = () => {
  const [resumeFinance, setResumeFinance] = useState([]);

  const addResume = (formData) => {
    console.log(formData)
    const newResume = { ...formData, id: uuidv4() };

    setResumeFinance([...resumeFinance, newResume]);
  };

  const deleteResume = (removeId) => {
    const newResumeList = resumeFinance.filter(
      (resume) => resume.id !== removeId
    );
    setResumeFinance(newResumeList);
  };

  return (
    <DefaultTemplate>
      <div className={styles.flexBox} >
        <NuForm addResume={addResume} />
        <NuList resumeFinance={resumeFinance} deleteResume={deleteResume} />
      </div>

      <div>
        <TotalMoney resumeFinance={resumeFinance} />
      </div>
    </DefaultTemplate>
  );
};
