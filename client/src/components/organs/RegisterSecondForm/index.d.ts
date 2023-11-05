import { ChangeEvent } from "react";

export interface Lecture {
  id: number;
  title: string;
  selected: boolean;
}

export interface RegisterSecondFormProps {
  userName: string;
  isValidUserName: string;
  userNameChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  confirmHandler: () => void;
}
