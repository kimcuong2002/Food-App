import React from "react";
import "./FormInput.css";

const FormInput = ({
  register,
  error,
  label,
  id,
  className,
  ...inputProps
}) => {
  return (
    <div className={`forminput ${className}`}>
      <label htmlFor="password">{label}</label>
      <input ref={register} id={id} {...inputProps} />
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default FormInput;
