import { ChatContext, SocketConnectionContext } from "@/store/GlobalContext";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

// NOTE: formatted with server type
export type MessageReq = {
  MessageType: string;
  id: string;
  message: string;
  input?: string;
};

export type LoginReq = {
  MessageType: string;
  id: string;
  pw: string;
};

export type RegisterReq = {
  MessageType: string;
  email: string;
  id: string;
  pw: string;
};

export default function useSocket() {
  const [socket, setSocket, isSocketConnected, setIsSocketConnected] = useContext(SocketConnectionContext);
  const [, storeChat] = useContext(ChatContext);

  const socketInitializer = useCallback(async () => {
    const socket = new WebSocket("ws://localhost:8000");

    socket.addEventListener("open", (event) => {
      setSocket(socket);
      setIsSocketConnected(true);
    });

    socket.addEventListener("message", (event: MessageEvent) => {
      // NOTE 서버에서 input으로 내려오는 문제
      const message = JSON.parse(event.data);
      if (message.MessageType === "message") {
        storeChat({
          userName: message.id,
          message: message.message === undefined ? message.input : message.message,
          date: new Date()
        });
      }
    });
  }, [setSocket, setIsSocketConnected, storeChat]);

  const requestSendMessage = (req: MessageReq) => {
    if (socket) {
      socket.send(JSON.stringify(req));
    }
  };

  const requestAuth = async (req: LoginReq | RegisterReq): Promise<boolean> => {
    return new Promise((resolve) => {
      if (socket) {
        socket.send(JSON.stringify(req));

        socket.addEventListener("message", (event: MessageEvent) => {
          const messageType = JSON.parse(event.data).MessageType;
          if (messageType === "success") {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      } else {
        resolve(false);
      }
    });
  };

  useEffect(() => {
    if (!isSocketConnected) {
      socketInitializer();
    }
  }, [isSocketConnected, socketInitializer]);

  return {
    isSocketConnected,
    requestSendMessage,
    requestAuth
  };
}
