import { Heading3, InputBox } from "@/styles/Ui.styles";
import React from "react";

const InputField = ({ label, placeHolder, error, name, type }) => {
  const inputId = `input-${name}`;

  return (
    <InputBox>
      <label htmlFor={inputId}>{label}</label>
      <input
        type={type}
        id={inputId}
        name={name}
        placeholder={placeHolder}
        aria-describedby={error ? `${inputId}-error` : undefined}
        aria-invalid={!!error}
      />
      {error && (
        <p className="error" id={`${inputId}-error`}>
          {error}
        </p>
      )}
    </InputBox>
  );
};

export default InputField;
