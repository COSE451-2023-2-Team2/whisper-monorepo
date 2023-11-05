import { ComponentProps, InputHTMLAttributes } from "react";
import { InputFormProps } from "./index.d";
import s from "./index.module.scss";

export default function InputForm(props: InputFormProps) {
  return (
    <div className={s.input_form}>
      <input
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
      ></input>
    </div>
  );
}
