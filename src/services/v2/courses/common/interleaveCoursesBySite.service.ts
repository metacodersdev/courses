import { Injectable } from "@nestjs/common";
import { flatten, zip } from "src/pkgs/lodash";
import { CourseGetResponse } from "../../interface/CourseGetResponse";

@Injectable()
export class InterleaveCoursesBySiteService {
  execute(courses: CourseGetResponse[]) {
    const coursesGetByYoutube = this.coursesFilterBySite(courses, "youtube");
    const coursesGetByUdemy = this.coursesFilterBySite(courses, "udemy");
    const mergeCourses = zip(coursesGetByYoutube, coursesGetByUdemy);
    const interleaveCourses = flatten(mergeCourses).filter(
      (course) => course
    ) as CourseGetResponse[];
    return interleaveCourses;
    }
  coursesFilterBySite(courses: CourseGetResponse[], siteName: string) {
    return courses.filter((course) => course.site.site_name === siteName);
  }
}