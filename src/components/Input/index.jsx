import styles from "./style.module.scss"

export const Input = ({ label, id, type, placeholder, state, setState ,required}) => {
  return (
    <div className={styles.flexBox}>
      <label className="title4" htmlFor="description">
        {label}
      </label>
      <input
        value={state}
        required={required}
        className="inputs"
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={(event) => setState(event.target.value)}
      />
    </div>
  );
};
