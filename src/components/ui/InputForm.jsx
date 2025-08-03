import { InputFormBox } from "@/styles/Ui.styles";
import React from "react";
import Button from "./Button";

const InputForm = ({ placeHolder, btnText }) => {
  return (
    <InputFormBox>
      <form action="">
        <input type="text" placeholder={placeHolder} />
        <div>
          <Button>{btnText}</Button>
        </div>
      </form>
    </InputFormBox>
  );
};

export default InputForm;
