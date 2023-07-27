export const Input = ({ label, id, type, placeholder, state, setState }) => {
  return (
    <div>
      <label className="title4" htmlFor="description">
        {label}
      </label>
      <input
        value={state}
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
