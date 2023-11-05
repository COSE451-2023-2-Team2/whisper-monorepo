import { useCallback } from "react";
import s from "./index.module.scss";

export interface ChatTimeProps {
  time: Date;
}

export default function ChatTime(props: ChatTimeProps) {
  const formatHourMinute = useCallback((time: Date): string => {
    const hour = time.getHours();
    const minute = time.getMinutes();
    const amPm = hour < 12 ? "am" : "pm";

    const formattedHour = hour % 12 === 0 ? "12" : (hour % 12).toString();
    const formattedMinute = minute < 10 ? `0${minute}` : minute.toString();

    return `${formattedHour}:${formattedMinute}${amPm}`;
  }, []);

  const formatTime = useCallback(
    (time: Date): string => {
      const now = new Date();
      const diff = now.getTime() - time.getTime();
      const daysAgo = Math.floor(diff / (1000 * 60 * 60 * 24));

      if (daysAgo === 0) {
        return `Today, ${formatHourMinute(time)}`;
      } else if (daysAgo === 1) {
        return `Yesterday, ${formatHourMinute(time)}`;
      } else {
        return `${daysAgo} days ago, ${formatHourMinute(time)}`;
      }
    },
    [formatHourMinute]
  );

  return <div className={s.chat_time}>{formatTime(props.time)}</div>;
}
