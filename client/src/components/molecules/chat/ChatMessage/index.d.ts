export type Message = {
  message: string;
  date: Date;
};

export interface ChatMessageProps {
  isMine: boolean;
  userName: string;
  messages: Message[];
}
