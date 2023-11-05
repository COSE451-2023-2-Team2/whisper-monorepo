import { ChangeEventHandler } from "react";

export interface InputFormProps {
  id: string;
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
}
