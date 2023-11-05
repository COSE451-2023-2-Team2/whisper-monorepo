import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import InputField from "@/components/molecules/login/InputField";
import LectureSelectField from "@/components/molecules/login/LectureSelectField";
import { ChangeEvent, Fragment, useEffect, useRef, useState } from "react";
import s from "./index.module.scss";
import useInputValidation from "@/hooks/useInputValidation";
import { Lecture, RegisterSecondFormProps } from "./index.d";

export default function RegisterSecondForm(props: RegisterSecondFormProps) {
  const [lectures, setLectures] = useState<Lecture[]>([]);

  const fetchLectures = async () => {
    // NOTE: 임시로 예시 강의 사용 - 실제로는 서버에서 강의 목록을 불러오는 방식
    setLectures([{ id: 0, title: "COSE441", selected: false }]);
  };

  const addLecture = (lectureId: number) => {
    console.log(lectures);
    setLectures((prevLectures) =>
      prevLectures.map((lecture) => (lecture.id === lectureId ? { ...lecture, selected: !lecture.selected } : lecture))
    );
  };

  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 강의 목록을 가져옴
    fetchLectures();
  }, []);

  return (
    <>
      <div className={s.register_input}>
        <InputField
          id="username"
          type="text"
          label="User name"
          placeholder="Enter your user name"
          value={props.userName}
          isCorrect={props.isValidUserName === "default" || props.isValidUserName === "true"}
          onChange={props.userNameChangeHandler}
        ></InputField>
        <LectureSelectField
          label="Choose class"
          lectureList={lectures}
          lectureClickHandler={addLecture}
        ></LectureSelectField>
      </div>
      <div className={s.register_button}>
        <ButtonSubmit name="Sign up" disabled={!props.isValidUserName} onClick={props.confirmHandler}></ButtonSubmit>
      </div>
    </>
  );
}
