import ChatInfo from "@/components/organs/ChatInfo";
import s from "./index.module.scss";
import ChatContainer from "@/components/organs/ChatContainer";
import ChatInputForm from "@/components/organs/ChatInputForm";
import { ChatContext } from "../../../store/GlobalContext";
import { useContext } from "react";
import { Chat } from "@/store/GlobalContext.d";

export default function ChatTemplate() {
  const [chatContext] = useContext(ChatContext);

  // const mockingChat: Chat[] = [
  //   {
  //     userName: "Pengtoshi",
  //     message: "d",
  //     date: new Date()
  //   },
  //   {
  //     userName: "Pengtoshi",
  //     message: "d",
  //     date: new Date()
  //   },
  //   {
  //     userName: "Pengtoshi",
  //     message: "d",
  //     date: new Date()
  //   },
  //   {
  //     userName: "Pengtoshi",
  //     message: "d",
  //     date: new Date()
  //   },
  //   {
  //     userName: "Pengtoshi",
  //     message: "d",
  //     date: new Date()
  //   },
  //   {
  //     userName: "doyam",
  //     message: "d",
  //     date: new Date()
  //   },
  //   {
  //     userName: "doyam",
  //     message: "d",
  //     date: new Date()
  //   },
  //   {
  //     userName: "shubit2",
  //     message: "d",
  //     date: new Date()
  //   },
  //   {
  //     userName: "Pengtoshi",
  //     message: "d",
  //     date: new Date()
  //   },
  //   {
  //     userName: "shubit2",
  //     message: "d",
  //     date: new Date()
  //   },
  //   {
  //     userName: "Pengtoshi",
  //     message: "d",
  //     date: new Date()
  //   },
  //   {
  //     userName: "doyam",
  //     message: "d",
  //     date: new Date()
  //   }
  // ];

  return (
    <div className={s.chat_template}>
      <ChatInfo></ChatInfo>
      <ChatContainer chats={chatContext}></ChatContainer>
      <ChatInputForm></ChatInputForm>
    </div>
  );
}
