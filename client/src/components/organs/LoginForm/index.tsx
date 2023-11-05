import Input from "@/components/molecules/login/InputField";
import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import { AuthContext, ModalContext } from "@/store/GlobalContext";
import { Fragment, useContext } from "react";
import s from "./index.module.scss";
import InputField from "@/components/molecules/login/InputField";
import ErrorModal from "@/components/popup/MessageModal";
import useInputValidation from "@/hooks/useInputValidation";
import { useRouter } from "next/router";
import useSocket from "@/hooks/useSocket";

export default function LoginForm() {
  const [, setIsLoggedIn, , setUserNameContext] = useContext(AuthContext);
  const [, setModal] = useContext(ModalContext);
  const router = useRouter();

  const {
    input: userName,
    isValidInput: isValidUserName,
    inputChangeHandler: userNameChangeHandler
  } = useInputValidation();

  const {
    input: password,
    isValidInput: isValidPassword,
    inputChangeHandler: passwordChangeHandler
  } = useInputValidation();

  const { requestAuth } = useSocket();

  const submitHandler = async () => {
    const success = await requestAuth({ MessageType: "login", pw: password, id: userName });
    if (success) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      setUserNameContext(userName);

      router.push({
        pathname: "/chat"
      });
    } else {
      setModal(<ErrorModal messageType="login" />);
    }
  };

  return (
    <div className={s.login_form}>
      <div className={s.login_input}>
        <InputField
          id="username"
          type="text"
          label="Username"
          placeholder="Enter your username"
          value={userName}
          isCorrect={isValidUserName === "default" || isValidUserName === "true"}
          onChange={userNameChangeHandler}
        ></InputField>
        <InputField
          id="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          isCorrect={isValidPassword === "default" || isValidPassword === "true"}
          onChange={passwordChangeHandler}
        ></InputField>
      </div>
      <div className={s.login_button}>
        <ButtonSubmit
          name="Login"
          disabled={!(isValidUserName === "true" && isValidPassword === "true")}
          onClick={submitHandler}
        ></ButtonSubmit>
      </div>
    </div>
  );
}
