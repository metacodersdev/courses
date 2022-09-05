import { Course } from "../../dataMockup/DataMockupInterface";
import { flatten, zip } from "../../pkgs/lodash";

const coursesGetBySite = (data: Course[], siteName: string): Course[] => {
  return data.filter((item) => item.site.site_name === siteName);
};

export const interleaveCoursesBySite = (data: Course[]): Course[] => {
  const coursesGetByYoutube = coursesGetBySite(data, "youtube");
  const coursesGetByUdemy = coursesGetBySite(data, "udemy");

  const courses = zip(coursesGetByYoutube, coursesGetByUdemy);
  const interleaveCourses = flatten(courses).filter(
    (course) => course
  ) as Course[];
  return interleaveCourses;
};