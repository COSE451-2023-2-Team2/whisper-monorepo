import s from "./index.module.scss";

// NOTE: version 1에서는 미완성
export default function ChatInfo() {
  return (
    <div className={s.chat_info}>
      <div className={s.info_text}>
        <div className={s.info_code}>COSE441</div>
        <div className={s.info_subject}>Software Security</div>
      </div>
      <div className={s.divider} />
    </div>
  );
}
