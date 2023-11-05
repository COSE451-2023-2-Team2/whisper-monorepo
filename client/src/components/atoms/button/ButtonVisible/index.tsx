import { ComponentProps } from "react";
import Button from "../Button";
import Image from "next/image";
import Visible from "@/public/assets/visible.png";
import Invisible from "@/public/assets/invisible.png";
import s from "./index.module.scss";

export default function ButtonVisible(
  props: ComponentProps<typeof Button> & {
    isVisible: boolean;
    clickHandler: () => void;
  }
) {
  return (
    <Button
      className={s.button_visible}
      onClick={() => {
        props.clickHandler();
      }}
    >
      <Image
        src={props.isVisible ? Visible : Invisible}
        alt="Visible Icon"
        width={17}
      ></Image>
    </Button>
  );
}
