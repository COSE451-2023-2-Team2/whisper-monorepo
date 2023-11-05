import Input from "@/components/molecules/login/InputField";
import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import { ModalContext } from "@/store/GlobalContext";
import { Fragment, useCallback, useContext } from "react";
import s from "./index.module.scss";
import { RegisterFirstFormProps } from "./index.d";
import InputField from "@/components/molecules/login/InputField";
import useInputValidation from "@/hooks/useInputValidation";
import ErrorModal from "@/components/popup/MessageModal";

export default function RegisterFirstForm(props: RegisterFirstFormProps) {
  return (
    <Fragment>
      <div className={s.register_input}>
        <InputField
          id="email"
          type="text"
          label="Email"
          placeholder="Enter your email address"
          value={props.email}
          isCorrect={props.isValidEmail === "default" || props.isValidEmail === "true"}
          onChange={props.emailChangeHandler}
        ></InputField>
        <InputField
          id="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={props.password}
          isCorrect={props.isValidPassword === "default" || props.isValidPassword === "true"}
          onChange={props.passwordChangeHandler}
        ></InputField>
        <InputField
          id="password"
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          value={props.confirmPassword}
          isCorrect={props.isConfirmSame === "default" || props.isConfirmSame === "true"}
          onChange={props.confirmPasswordChangeHandler}
        ></InputField>
      </div>
      <div className={s.register_button}>
        <ButtonSubmit
          name="Submit"
          disabled={
            !(props.isValidEmail === "true" && props.isValidPassword === "true" && props.isConfirmSame === "true")
          }
          onClick={props.confirmHandler}
        ></ButtonSubmit>
      </div>
    </Fragment>
  );
}
