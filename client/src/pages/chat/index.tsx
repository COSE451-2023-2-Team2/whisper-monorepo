import ButtonFixedS from "@/components/atoms/button/ButtonFixedS";
import { Header } from "@/components/layouts";
import ChatInputField from "@/components/molecules/chat/ChatInputField";
import ChatMessage from "@/components/molecules/chat/ChatMessage";
import ChatContainer from "@/components/organs/ChatContainer";
import ChatInputForm from "@/components/organs/ChatInputForm";
import Popup from "@/components/popup";
import ChatListTemplate from "@/components/templates/ChatListTemplate";
import ChatTemplate from "@/components/templates/ChatTemplate";
import s from "./index.module.scss";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/store/GlobalContext";
import { Router, useRouter } from "next/router";

export default function Chat() {
  const [, , userNameContext] = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    // userName이 빈 문자열인 경우, /login 페이지로 리다이렉트
    if (userNameContext.trim() === "") {
      router.push("/login");
    }
  }, [userNameContext]);

  return (
    <div className={s.chat}>
      <Header></Header>
      <Popup></Popup>
      <div className={s.chat_content}>
        {/* <ChatListTemplate /> */}
        <ChatTemplate />
      </div>
    </div>
  );

  // return <ChatListTemplate />;
}
