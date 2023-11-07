import ChatInfo from "@/components/organs/ChatInfo";
import s from "./index.module.scss";
import ChatContainer from "@/components/organs/ChatContainer";
import ChatInputForm from "@/components/organs/ChatInputForm";
import { ChatContext } from "../../../store/GlobalContext";
import { useContext } from "react";
import { Chat } from "@/store/GlobalContext.d";

export default function ChatTemplate() {
  const [chatContext] = useContext(ChatContext);

  return (
    <div className={s.chat_template}>
      <ChatInfo></ChatInfo>
      <ChatContainer chats={chatContext}></ChatContainer>
      <ChatInputForm></ChatInputForm>
    </div>
  );
}
