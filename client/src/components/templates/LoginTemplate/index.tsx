import s from "./index.module.scss";
import ButtonLoginSwitch from "@/components/atoms/button/ButtonLoginSwitch";
import { useState } from "react";
import LoginForm from "@/components/organs/LoginForm";
import LoginTextField from "@/components/molecules/login/LoginTextField";
import RegisterFirstForm from "@/components/organs/RegisterFirstForm";
import RegisterSecondForm from "@/components/organs/RegisterSecondForm";
import RegisterForm from "@/components/organs/RegisterForm";

export default function LoginTemplate() {
  const [registerState, setRegisterState] = useState(false);

  const changeLoginState = () => {
    setRegisterState(!registerState);
  };

  return (
    <div className={s.login_box}>
      <LoginTextField registerState={registerState}></LoginTextField>
      <div className={s.login_form}>
        {!registerState ? <LoginForm /> : <RegisterForm changeLoginState={changeLoginState} />}
      </div>
      <ButtonLoginSwitch isLoginToRegister={!registerState} onClick={changeLoginState}></ButtonLoginSwitch>
    </div>
  );
}
