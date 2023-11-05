import ChatMessage from "@/components/molecules/chat/ChatMessage";
import s from "./index.module.scss";
import { ChatContainerProps, GroupedChat } from "./index.d";
import { Chat } from "@/store/GlobalContext.d";
import { useCallback, useContext, useEffect, useRef } from "react";
import { AuthContext } from "@/store/GlobalContext";

export default function ChatContainer(props: ChatContainerProps) {
  const [, , userNameContext] = useContext(AuthContext);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  const chatsToGroupChats = useCallback((chats: Chat[]): GroupedChat[] => {
    if (chats.length === 0) {
      return [];
    }

    const groupedChats: GroupedChat[] = [];
    let currentGroup: GroupedChat | null = null;

    for (const chat of chats) {
      if (currentGroup === null || currentGroup.userName !== chat.userName) {
        // Start a new group
        currentGroup = {
          userName: chat.userName,
          messages: []
        };
        groupedChats.push(currentGroup);
      }

      if (currentGroup) {
        // Add the message to the current group
        currentGroup.messages.push({
          message: chat.message,
          date: chat.date
        });
      }
    }

    return groupedChats;
  }, []);

  const messages = chatsToGroupChats(props.chats).map((groupedChat, index) => (
    <ChatMessage
      key={index}
      isMine={userNameContext === groupedChat.userName}
      userName={groupedChat.userName}
      messages={groupedChat.messages}
    ></ChatMessage>
  ));
  console.log(messages);

  return (
    <div className={s.chat_container} ref={containerRef}>
      {messages}
    </div>
  );
}
