import ChatAvatar from "@/components/atoms/chat/ChatAvatar";
import { ChatMessageProps } from "./index.d";
import s from "./index.module.scss";
import ChatElement from "@/components/atoms/chat/ChatElement";
import ChatTime from "@/components/atoms/chat/ChatTime";

export default function ChatMessage(props: ChatMessageProps) {
  const cx = `${props.isMine ? s.mine : s.others}`;

  return (
    <div className={`${s.message_container} ${cx}`}>
      {props.isMine ? "" : <ChatAvatar userName={props.userName}></ChatAvatar>}

      <div className={`${s.messages} ${cx}`}>
        {props.messages.map((message, index) => (
          <ChatElement
            key={index}
            isFirst={index === 0}
            isLast={index === props.messages.length - 1}
            isMine={props.isMine}
            userName={props.userName}
            message={message.message}
          />
        ))}
        <div className={`${s.message_time} ${cx}`}>
          <ChatTime time={props.messages.slice(-1)[0].date} />
        </div>
      </div>
    </div>
  );
}
