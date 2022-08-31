import { Course } from "../../../dataMockup/DataMockupInterface";

export const countsCourseInteractor = (data: Course[]): number => {
  return data.length;
}