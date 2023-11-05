import s from "./index.module.scss";
import { InputChatProps } from "./index.d";
import { useState } from "react";

export default function InputChat(props: InputChatProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`${s.input_chat} ${isFocused ? s.focused : ""}`}>
      <input
        value={props.value}
        placeholder={props.placeholder}
        onKeyDown={props.keyDown}
        onChange={props.onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
    </div>
  );
}
