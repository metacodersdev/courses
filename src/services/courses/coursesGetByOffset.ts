import { Course } from "../../dataMockup/DataMockupInterface";
import { chunk } from "../../pkgs/lodash";

export const coursesGetByOffset = (data: Course[], limit: number, offset: number): Course[] => {
  if (offset === 1) {
  const courses = chunk(data, limit)[0];
  return courses || data;
  }
  const courses = chunk(data, (offset - 1) * limit)[1];
  return courses || [];
}