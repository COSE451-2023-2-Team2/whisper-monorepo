import ChatInputField from "@/components/molecules/chat/ChatInputField";
import s from "./index.module.scss";
import ButtonFixedS from "@/components/atoms/button/ButtonFixedS";
import { ChangeEvent, FormEvent, useContext, useState, KeyboardEvent } from "react";
import { AuthContext, ChatContext } from "@/store/GlobalContext";
import { Chat } from "@/store/GlobalContext.d";
import useSocket from "@/hooks/useSocket";

export default function ChatInputForm() {
  const [, , userNameContext] = useContext(AuthContext);
  const [message, setMessage] = useState("");

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const { requestSendMessage } = useSocket();

  const submitHandler = () => {
    setMessage("");

    const newChat: Chat = {
      userName: userNameContext,
      message,
      date: new Date()
    };

    requestSendMessage({ MessageType: "message", id: userNameContext, message });
  };

  const clickHandler = (event: FormEvent) => {
    submitHandler();
  };

  const keyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitHandler();
    }
  };

  return (
    <div className={s.chat_input_form}>
      <div className={s.chat_input_field}>
        <ChatInputField value={message} keyDown={keyDownHandler} onChange={inputChangeHandler}></ChatInputField>
      </div>
      <ButtonFixedS name="Send" onClick={clickHandler} disabled={message === ""}></ButtonFixedS>
    </div>
  );
}
