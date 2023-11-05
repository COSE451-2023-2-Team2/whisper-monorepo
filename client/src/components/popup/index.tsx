import { Fragment, useContext } from "react";
import { ModalContext } from "@/store/GlobalContext";

export default function Popup() {
  const [modal] = useContext(ModalContext);

  return <Fragment>{modal}</Fragment>;
}
