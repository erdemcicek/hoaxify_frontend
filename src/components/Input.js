import React from "react";

const Input = (props) => {
  const { label, error, name, onChange, type, defaultValue } = props;
  const inputClassName = error ? "form-control is-invalid" : "form-control";
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className={inputClassName}
        name={name}
        onChange={onChange}
        type={type}
        defaultValue={defaultValue}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default Input;
