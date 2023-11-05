import { Chat } from "@/store/GlobalContext.d";
export interface ChatContainerProps {
  chats: Chat[];
}

export type GroupedChat = {
  userName: string;
  messages: Message[];
};

type Message = {
  message: string;
  date: Date;
};
