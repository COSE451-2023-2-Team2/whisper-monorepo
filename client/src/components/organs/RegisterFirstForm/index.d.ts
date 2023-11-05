import { ChangeEvent, ChangeEventHandler } from "react";

export interface RegisterFirstFormProps {
  email: string;
  password: string;
  confirmPassword: string;
  isValidEmail: string;
  isValidPassword: string;
  isConfirmSame: string;
  emailChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  passwordChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  confirmPasswordChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  confirmHandler: () => void;
}
