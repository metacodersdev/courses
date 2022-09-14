import { Injectable } from "@nestjs/common";
import { flatten, zip } from "src/pkgs/lodash";
import { Course } from "@prisma/client";

@Injectable()
export class InterleaveCoursesBySiteService {
  execute(coursesGetByYoutube: Course[], coursesGetByUdemy: Course[]): Course[] {
    const mergeCourses = zip(coursesGetByYoutube, coursesGetByUdemy);
    const interleaveCourses = flatten(mergeCourses).filter(
      (course) => course
    );
    return interleaveCourses;
  }
}