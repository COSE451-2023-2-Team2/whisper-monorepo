import InputChat from "@/components/atoms/input/InputChat";
import s from "./index.module.scss";
import { ChatInputFieldProps } from "./index.d";
import Image from "next/image";
import ImageAdder from "@/public/assets/paperclip.png";

export default function ChatInputField(props: ChatInputFieldProps) {
  return (
    <div className={s.chat_input_field}>
      <Image className={s.chat_image} src={ImageAdder} alt="Add image" width={20} height={20}></Image>
      <div className={s.chat_input}>
        <InputChat
          value={props.value}
          keyDown={props.keyDown}
          placeholder="Enter your message here..."
          onChange={props.onChange}
        ></InputChat>
      </div>
    </div>
  );
}
