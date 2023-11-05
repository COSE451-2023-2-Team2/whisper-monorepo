import { ComponentProps } from "react";
import s from "./index.module.scss";
import Button from "../Button";

type Props = ComponentProps<typeof Button> & {
  isLoginToRegister: boolean;
};

export default function ButtonLoginSwitch(props: Props) {
  return (
    <div className={s.button_login_switch}>
      <span>
        {props.isLoginToRegister
          ? "Don't have an account ?"
          : "Already have an account ?"}
      </span>
      <Button onClick={props.onClick}>
        {props.isLoginToRegister ? "Register" : "Login"}
      </Button>
    </div>
  );
}
