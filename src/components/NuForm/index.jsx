import { useState } from "react";
import styles from "./style.module.scss";
import { Input } from "../Input";

export const NuForm = ({ addResume }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [typeValue, setTypeValue] = useState("Entrada");

  const submit = (event) => {
    event.preventDefault();
    addResume({ description, value, typeValue });
    setDescription("");
    setValue("");
  };

  return (
    <div>
      <form className={styles.flexForm} onSubmit={submit}>
        <Input
          label="Descrição"
          placeholder="  Digite aqui sua descrição"
          id="description"
          type="text"
          state={description}
          setState={setDescription}
          required={true}
        />
        <p className={styles.text__exemple}>Ex: Compra de roupas</p>
        <Input
          label="Valor (R$)"
          placeholder="  1"
          id="value"
          type="number"
          state={value}
          setState={setValue}
          required={true}
        />
        <p className="title4">Tipo de valor</p>
        <select
          className="select"
          name="typeValue"
          id="typeValue"
          value={typeValue}
          required={true}
          onChange={(event) => setTypeValue(event.target.value)}
        >
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>
        <button className="insert__value btn" type="submit">
          Inserir valor
        </button>
      </form>
    </div>
  );
};
