import { Injectable } from "@nestjs/common";
import { DataMockupService } from "../../../dataMockup/dataMockup.service";
import { Course } from "../../../dataMockup/DataMockupInterface";
import { CoursesGetByOffsetService } from "../common/coursesGetByOffset.service";
import { InterleaveCoursesBySiteService } from "../common/interleaveCoursesBySite.service";

@Injectable()
export class CoursesGetService {
  constructor(
    private dataMockupService: DataMockupService,
    private interleaveCoursesBySite: InterleaveCoursesBySiteService,
    private coursesGetByOffset: CoursesGetByOffsetService
  ) {}

  execute(limit: number, offset?: number): Course[] {
    const data = this.dataMockupService.excute();
    if (!offset) {
      return this.interleaveCoursesBySite.execute(data);
    }

    const coursesGet = this.coursesGetByOffset.execute(data, limit, offset);
    return this.interleaveCoursesBySite.execute(coursesGet);
  }
}

