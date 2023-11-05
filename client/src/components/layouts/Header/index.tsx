import Image from "next/image";
import Whisper from "@/public/assets/Whisper.png";
import Github from "@/public/assets/github.png";

import s from "./index.module.scss";

export default function Header() {
  return (
    <div className={s.header}>
      <Image src={Whisper} alt={"Whisper"} width={101}></Image>
      <a href="https://github.com/COSE451-2023-2-Team2">
        <Image src={Github} alt={"Github"} width={30}></Image>
      </a>
    </div>
  );
}
