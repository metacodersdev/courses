import { Injectable } from "@nestjs/common";
import { DataMockupService } from "../../../dataMockup/dataMockup.service";
import { Course } from "../../../dataMockup/DataMockupInterface";
import { filter } from "../../../pkgs/lodash";
import { CoursesGetByOffsetService } from "../common/coursesGetByOffset.service";
import { InterleaveCoursesBySiteService } from "../common/interleaveCoursesBySite.service";

@Injectable()
export class CoursesGetByTopicService {
  constructor(
    private dataMockupService: DataMockupService,
    private interleaveCoursesBySite: InterleaveCoursesBySiteService,
    private coursesGetByOffset: CoursesGetByOffsetService
  ) {}

  execute(topicName: string, limit: number, offset?: number): Course[] {
    const data = this.dataMockupService.excute();
    const courseGetByTopic = filter(data, { topics: [{ topic_name: topicName }] });

    if (!offset) {
      return this.interleaveCoursesBySite.execute(courseGetByTopic);
    }

    const coursesGet = this.coursesGetByOffset.execute(courseGetByTopic, limit, offset);
  return this.interleaveCoursesBySite.execute(coursesGet);
  }
}
