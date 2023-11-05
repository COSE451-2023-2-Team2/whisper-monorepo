import { createContext, useRef, useState } from "react";
import {
  AuthContextType,
  Chat,
  ChatContextType,
  ModalContextChildren,
  ModalContextType,
  SocketConnectionContextType
} from "./GlobalContext.d";

export const AuthContext = createContext<AuthContextType>([false, () => null, "", () => null]);
export const ModalContext = createContext<ModalContextType>([null, () => null]);
export const ChatContext = createContext<ChatContextType>([[], () => null]);
export const SocketConnectionContext = createContext<SocketConnectionContextType>([
  undefined,
  () => null,
  false,
  () => null
]);

export default function GlobalStateContext(props: { children: React.ReactNode | null }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userNameContext, setUserNameContext] = useState<string>("");
  const [modalContext, setModalContext] = useState<ModalContextChildren>(null);
  const [chatContext, setChatContext] = useState<Chat[]>([]);
  const [isSocketConnected, setIsSocketConnected] = useState<boolean>(false);
  const [socket, setSocket] = useState<WebSocket>();

  const storeChat = (chat: Chat) => {
    setChatContext((prevChats) => [...prevChats, chat]);
  };

  return (
    <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn, userNameContext, setUserNameContext]}>
      <ModalContext.Provider value={[modalContext, setModalContext]}>
        <ChatContext.Provider value={[chatContext, storeChat]}>
          <SocketConnectionContext.Provider value={[socket, setSocket, isSocketConnected, setIsSocketConnected]}>
            {props.children}
          </SocketConnectionContext.Provider>
        </ChatContext.Provider>
      </ModalContext.Provider>
    </AuthContext.Provider>
  );
}
