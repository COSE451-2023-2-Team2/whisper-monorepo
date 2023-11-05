import s from "./index.module.scss";
import { ComponentProps } from "react";
import Button from "../Button";

export default function ButtonFixedS(props: ComponentProps<typeof Button>) {
  return (
    <Button className={s.button_fixed_s} disabled={props.disabled} onClick={props.onClick}>
      {props.name}
    </Button>
  );
}
