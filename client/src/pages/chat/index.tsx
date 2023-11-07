import { Header } from "@/components/layouts";
import Popup from "@/components/popup";
import ChatTemplate from "@/components/templates/ChatTemplate";
import s from "./index.module.scss";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/store/GlobalContext";
import { Router, useRouter } from "next/router";

export default function Chat() {
  const [, , userNameContext] = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (userNameContext.trim() === "") {
      router.push("/login");
    }
  }, [userNameContext, router]);

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
}
