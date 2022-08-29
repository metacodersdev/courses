import { Course } from "../../../dataMockup/DataMockupInterface";
import { chunk, flatten, zip } from "../../../pkgs/lodash";

const coursesGetBySite = (data: Course[], siteName: string): Course[] => {
  return data.filter((item) => item.site.site_name === siteName);
};

const interleaveCoursesBySite = (data: Course[]): Course[] => {
  const coursesGetByYoutube = coursesGetBySite(data, "youtube");
  const coursesGetByUdemy = coursesGetBySite(data, "udemy");

  const courses = zip(coursesGetByYoutube, coursesGetByUdemy);
  const interleaveCourses = flatten(courses).filter(
    (course) => course
  ) as Course[];
  return interleaveCourses;
};

const coursesGetByOffet = (
  data: Course[],
  limit: number,
  offset: number
): Course[] => {
  if (offset === 1) {
    const courses = chunk(data, limit)[0];
    return courses || data;
  }
  const courses = chunk(data, (offset - 1) * limit)[1];
  return courses || [];
};

export const coursesGetInteractor = (
  data: Course[],
  limit: number,
  offset?: number
): Course[] => {
  if (!offset) {
    return interleaveCoursesBySite(data);
  }

  const coursesGet = coursesGetByOffet(data, limit, offset);
  return interleaveCoursesBySite(coursesGet);
};
