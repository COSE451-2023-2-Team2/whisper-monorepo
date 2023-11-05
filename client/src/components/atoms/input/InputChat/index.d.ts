import { ChangeEventHandler, KeyboardEventHandler } from "react";

export interface InputChatProps {
  value?: string;
  placeholder?: string;
  keyDown?: KeyboardEventHandler;
  onChange?: ChangeEventHandler;
}
