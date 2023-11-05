interface Lecture {
  id: number;
  title: string;
  selected: boolean;
}

export interface LectureSelectFieldProps {
  label: string;
  lectureList: Lectures[];
  lectureClickHandler: (index: number) => void;
}
