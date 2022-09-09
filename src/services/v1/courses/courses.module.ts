import { Module } from "@nestjs/common";
import { DataMockupModule } from "src/dataMockup/dataMockup.module";
import { CoursesController } from "./courses.controller";
import { CoursesGetService } from "./coursesGet/coursesGet.service";
import { CoursesGetByOffsetService } from "./common/coursesGetByOffset.service";
import { CoursesGetByTopicService } from "./coursesGetByTopic/coursesGetByTopic.service";
import { InterleaveCoursesBySiteService } from "./common/interleaveCoursesBySite.service";

@Module({
  imports: [DataMockupModule],
  controllers: [CoursesController],
  providers: [
    CoursesGetService,
    CoursesGetByTopicService,
    CoursesGetByOffsetService,
    InterleaveCoursesBySiteService,
  ]
})

export class CoursesMockupModule {}
