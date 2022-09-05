import { Course } from "../../../dataMockup/DataMockupInterface";
import { coursesGetByOffset } from "../coursesGetByOffset";
import { interleaveCoursesBySite } from "../interleaveCoursesBySite";

export const coursesGetInteractor = (
  data: Course[],
  limit: number,
  offset?: number
): Course[] => {
  if (!offset) {
    return interleaveCoursesBySite(data);
  }

  const coursesGet = coursesGetByOffset(data, limit, offset);
  return interleaveCoursesBySite(coursesGet);
};

