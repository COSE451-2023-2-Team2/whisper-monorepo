import React from "react";
import s from "./index.module.scss";
import { ChatElementProps } from "./index.d";

export default function ChatElement(props: ChatElementProps) {
  return (
    <div className={`${s.chat_message} ${props.isLast ? "" : s.not_last}`}>
      <div className={`${s.bubble} ${props.isMine ? s.mine : s.others}`} />
      <div className={`${s.message} ${props.isMine ? s.mine : s.others}`}>
        {props.isFirst && !props.isMine ? <div className={s.user_name}>{props.userName}</div> : ""}
        {props.message}
      </div>
    </div>
  );
}
