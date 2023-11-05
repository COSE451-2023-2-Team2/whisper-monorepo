import { ModalContext } from "@/store/GlobalContext";
import { Fragment, PropsWithChildren, useContext } from "react";
import s from "./Modal.module.scss";

type Props = PropsWithChildren<{ closeable?: boolean; onClose?: () => void }>;

export default function Modal({ children, closeable = true, onClose }: Props) {
  const [, setModal] = useContext(ModalContext);

  return (
    <Fragment>
      <div className={s.modal_content} tabIndex={0}>
        {children}
      </div>
      <div
        className={s.modal_background}
        onClick={() => {
          if (!closeable) return;
          onClose?.() || setModal(null);
        }}
      />
    </Fragment>
  );
}
