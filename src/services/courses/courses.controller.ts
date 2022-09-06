import { Controller, Get, Param, Query, Req } from "@nestjs/common";
import { Course } from "../../dataMockup/DataMockupInterface";
import { CoursesGetService } from "./coursesGet/coursesGet.service";
import { CoursesGetByTopicService } from "./coursesGetByTopic/coursesGetByTopic.service";

@Controller('courses')
export class CoursesController {
  constructor(
    private coursesGetService: CoursesGetService,
    private coursesGetByTopicService: CoursesGetByTopicService
  ) {}

  @Get('')
  coursesGet(@Query("page") page?: number): Course[] {
    const limit = 16;
    return this.coursesGetService.execute(limit, page);
  }

  @Get("/:topicName")
  coursesGetByTopic(
    @Param("topicName") topicName: string,
    @Query("page") page?: number
  ): Course[] {
    const limit = 16;
    return this.coursesGetByTopicService.execute(topicName, limit, page);
  }
}