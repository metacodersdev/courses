import { Injectable } from "@nestjs/common";
import { Course } from "src/dataMockup/DataMockupInterface";
import { chunk } from "src/pkgs/lodash";

@Injectable()
export class CoursesGetByOffsetService {

  execute(data: Course[], limit: number, offset: number): Course[] {
    if (offset === 1) {
      const courses = chunk(data, limit)[0];
      return courses || data;
    }
    const courses = chunk(data, (offset - 1) * limit)[1];
    return chunk(courses, limit)[0] || [];
  }
}