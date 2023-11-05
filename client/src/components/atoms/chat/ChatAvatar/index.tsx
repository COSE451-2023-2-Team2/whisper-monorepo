import Image from "next/image";
import s from "./index.module.scss";

export interface ChatAvatarProps {
  userName: string;
}

export default function ChatAvatar(props: ChatAvatarProps) {
  const avatarIndex =
    props.userName
      .split("")
      .map((char) => char.charCodeAt(0))
      .reduce((acc, val) => acc + val, 0) % 9;

  const image = require(`../../../../../public/assets/avatar/avatar${avatarIndex}.png`).default;

  return (
    <div className={s.avatar}>
      <Image src={image} alt={`Avatar for ${props.userName}`} width={30} height={30} />
    </div>
  );
}
