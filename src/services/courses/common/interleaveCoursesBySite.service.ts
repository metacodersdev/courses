import { Injectable } from "@nestjs/common";
import { DataMockupService } from "../../../dataMockup/dataMockup.service";
import { Course } from "../../../dataMockup/DataMockupInterface";
import { flatten, zip } from "../../../pkgs/lodash";

@Injectable()
export class InterleaveCoursesBySiteService {

  execute(data: Course[]): Course[] {
    const coursesGetByYoutube = this.coursesGetBySite(data, "youtube");
    const coursesGetByUdemy = this.coursesGetBySite(data, "udemy");
    const courses = zip(coursesGetByYoutube, coursesGetByUdemy);
    const interleaveCourses = flatten(courses).filter(
      (course) => course
    ) as Course[];
    return interleaveCourses;
  }

  coursesGetBySite(data: Course[], siteName: string): Course[] {
    return data.filter((item) => item.site.site_name === siteName);
  }
}