import { ModalContext } from "@/store/GlobalContext";
import { useContext } from "react";
import Modal from "./Modal";
import ButtonFixedM from "../atoms/button/ButtonFixedM";
import s from "./MessageModal.module.scss";

export interface MessageModalProps {
  messageType: MessageType;
}

export type MessageType = "login" | "register_fail" | "register_success";

export type ModalMessageType = {
  [key in MessageType]: {
    title: string;
    content: string;
  };
};

export default function MessageModal(props: MessageModalProps) {
  const [, setModal] = useContext(ModalContext);

  const modalMessages: ModalMessageType = {
    login: {
      title: "Login Failed",
      content: "Your login attempt was unsuccessful. Please check your username and password and try again."
    },
    register_fail: {
      title: "Registration Failed",
      content: "Your email or username is already taken. Or if you are already a registered member, please log in."
    },
    register_success: {
      title: "Registration Success",
      content: "Thank you for joining us! Your registration has been completed successfully."
    }
  };

  const onClickHandler = () => {
    setModal(null);
  };

  return (
    <Modal
      closeable={false}
      onClose={() => {
        setModal(null);
      }}
    >
      <div className={s.wrapper}>
        <div className={s.title}>{modalMessages[props.messageType].title}</div>
        <div className={s.content}>{modalMessages[props.messageType].content}</div>
        <ButtonFixedM name="Close" onClick={onClickHandler}></ButtonFixedM>
      </div>
    </Modal>
  );
}
