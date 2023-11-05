import { Fragment } from "react";
import s from "./index.module.scss";

export interface LoginTextFieldProps {
  registerState: boolean;
}

export default function LoginTextField(props: LoginTextFieldProps) {
  return (
    <Fragment>
      <div className={s.login_welcome}>Welcome !</div>
      <div className={s.login_title}>Sign {!props.registerState ? "in" : "up"} to Whisper</div>
      <div className={s.login_description}>Your first anonymous group chat for class.</div>
    </Fragment>
  );
}
