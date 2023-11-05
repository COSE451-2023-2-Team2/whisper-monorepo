import s from "./index.module.scss";

// NOTE: version 1에서는 미완성
export default function ChatListTemplate() {
  return (
    <div className={s.chat_list_template}>
      <div className={s.chat_list_status}></div>
      <div className={s.chat_list}></div>
    </div>
  );
}
