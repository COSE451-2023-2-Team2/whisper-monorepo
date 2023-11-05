import { ChangeEventHandler, KeyboardEventHandler } from "react";

export interface ChatInputFieldProps {
  value?: string;
  keyDown: KeyboardEventHandler;
  onChange?: ChangeEventHandler;
}
