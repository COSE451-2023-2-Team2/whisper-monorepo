import { Dispatch, SetStateAction } from "react";

export type AuthContextType = [boolean, Dispatch<SetStateAction<boolean>>, string, Dispatch<SetStateAction<string>>];

export type ModalContextType = [ModalContextChildren, Dispatch<SetStateAction<ModalContextChildren>>];
export type ModalContextChildren = React.ReactNode | null | React.ReactNode[] | null[];

export type Chat = {
  userName: string;
  message: string;
  date: Date;
};

export type ChatContextType = [Chat[], (chat: Chat) => void];

export type SocketConnectionContextType = [
  WebSocket | undefined,
  Dispatch<SetStateAction<WebSocket | undefined>>,
  boolean,
  Dispatch<SetStateAction<boolean>>
];
