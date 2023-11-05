import s from "./index.module.scss";
import Background from "@/public/assets/background.png";
import Image from "next/image";
import Header from "@/components/layouts/Header";
import LoginTemplate from "@/components/templates/LoginTemplate";
import Popup from "@/components/popup";
import useSocket from "@/hooks/useSocket";

export default function Login() {
  useSocket();

  return (
    <div className={s.login}>
      <Header></Header>
      <Popup></Popup>
      <div className={s.login_content}>
        <LoginTemplate></LoginTemplate>
        <Image className={s.login_image} src={Background} alt="background" width={650} height={500}></Image>
      </div>
    </div>
  );
}
