import { useState } from "react";
import ButtonVisible from "../../../atoms/button/ButtonVisible";
import InputForm from "../../../atoms/input/InputForm/index";
import { InputFieldProps } from "./index.d";
import s from "./index.module.scss";

export default function InputField(props: InputFieldProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onClickHandler = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const boxClassName = `${s.input_box} ${
    props.isCorrect === false ? s.invalid : ""
  }`;

  return (
    <div className={s.input_field}>
      <label htmlFor={props.id}>{props.label}</label>
      {props.type === "password" ? (
        <div className={boxClassName}>
          <InputForm
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            type={isPasswordVisible ? "text" : "password"}
            onChange={props.onChange}
          ></InputForm>
          <ButtonVisible
            isVisible={isPasswordVisible}
            clickHandler={onClickHandler}
          ></ButtonVisible>
        </div>
      ) : (
        <div className={boxClassName}>
          <InputForm
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
          ></InputForm>
        </div>
      )}
    </div>
  );
}
