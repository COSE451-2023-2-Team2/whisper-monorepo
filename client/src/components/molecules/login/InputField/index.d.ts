import { ChangeEventHandler } from "react";

export interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
  isCorrect?: boolean;
  onChange?: ChangeEventHandler;
}
