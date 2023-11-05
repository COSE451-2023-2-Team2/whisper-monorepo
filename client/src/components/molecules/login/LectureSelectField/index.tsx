import ButtonLecture from "@/components/atoms/button/ButtonLecture";
import { LectureSelectFieldProps } from "./index.d";
import s from "./index.module.scss";
import { MouseEvent } from "react";

export default function LectureSelectField(props: LectureSelectFieldProps) {
  const lectureButtons = props.lectureList.map((lecture, index) => (
    <ButtonLecture
      key={lecture.id}
      name={lecture.title}
      isSelected={lecture.selected}
      onClick={() => props.lectureClickHandler(index)}
    ></ButtonLecture>
  ));

  return (
    <div className={s.lecture_select_field}>
      <div className={s.lecture_label}>{props.label}</div>
      <div className={s.lecture_list}>{lectureButtons}</div>
    </div>
  );
}
