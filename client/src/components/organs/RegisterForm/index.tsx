import { useCallback, useContext, useState } from "react";
import RegisterFirstForm from "../RegisterFirstForm";
import RegisterSecondForm from "../RegisterSecondForm";
import useInputValidation from "@/hooks/useInputValidation";
import { ModalContext } from "@/store/GlobalContext";
import ErrorModal from "@/components/popup/MessageModal";
import useSocket from "@/hooks/useSocket";

export interface RegisterFormProps {
  changeLoginState: () => void;
}

export default function RegisterForm(props: RegisterFormProps) {
  const [, setModal] = useContext(ModalContext);
  const [isRegisterFirstPage, setIsRegisterFirstPage] = useState(true);

  const emailChecker = useCallback((email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }, []);

  const passwordChecker = useCallback((password: string) => {
    return password.length >= 8 ? true : false;
  }, []);

  const {
    input: email,
    isValidInput: isValidEmail,
    inputChangeHandler: emailChangeHandler
  } = useInputValidation(emailChecker);

  const {
    input: password,
    isValidInput: isValidPassword,
    inputChangeHandler: passwordChangeHandler
  } = useInputValidation(passwordChecker);

  const confirmPasswordChecker = useCallback(
    (confirmPassword: string) => {
      return confirmPassword === password ? true : false;
    },
    [password]
  );

  const {
    input: confirmPassword,
    isValidInput: isConfirmSame,
    inputChangeHandler: confirmPasswordChangeHandler
  } = useInputValidation(confirmPasswordChecker);

  const userNameChecker = (userName: string) => {
    return userName.length > 0 ? true : false;
  };

  const {
    input: userName,
    isValidInput: isValidUserName,
    inputChangeHandler: userNameChangeHandler
  } = useInputValidation(userNameChecker);

  const moveToNextPage = () => {
    setIsRegisterFirstPage(false);
  };

  const { requestAuth } = useSocket();

  const submitHandler = async () => {
    if (isValidEmail === "true" && isValidPassword === "true" && isConfirmSame === "true") {
      const success = await requestAuth({ MessageType: "register", email, pw: password, id: userName });
      if (success) {
        setModal(<ErrorModal messageType="register_success" />);
        setIsRegisterFirstPage(false);
        props.changeLoginState();
      } else {
        setModal(<ErrorModal messageType="register_fail" />);
      }
    }
  };

  return (
    <>
      {isRegisterFirstPage ? (
        <RegisterFirstForm
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          isValidEmail={isValidEmail}
          isValidPassword={isValidPassword}
          isConfirmSame={isConfirmSame}
          emailChangeHandler={emailChangeHandler}
          passwordChangeHandler={passwordChangeHandler}
          confirmPasswordChangeHandler={confirmPasswordChangeHandler}
          confirmHandler={moveToNextPage}
        />
      ) : (
        <RegisterSecondForm
          userName={userName}
          isValidUserName={isValidUserName}
          userNameChangeHandler={userNameChangeHandler}
          confirmHandler={submitHandler}
        />
      )}
    </>
  );
}
