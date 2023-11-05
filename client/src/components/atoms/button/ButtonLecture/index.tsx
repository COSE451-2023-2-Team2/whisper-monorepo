import { ComponentProps } from "react";
import Button from "../Button";
import s from "./index.module.scss";

export default function ButtonLecture(
  props: ComponentProps<typeof Button> & {
    isSelected: boolean;
  }
) {
  console.log(props.isSelected);
  return (
    <div
      className={`${s.button_lecture} ${props.isSelected ? s.selected : ""}`}
    >
      <Button onClick={props.onClick}>{props.name}</Button>
    </div>
  );
}
