import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query, Req } from "@nestjs/common";
import { Course } from "src/dataMockup/DataMockupInterface";
import { CoursesGetService } from "./coursesGet/coursesGet.service";
import { CoursesGetByTopicService } from "./coursesGetByTopic/coursesGetByTopic.service";

@Controller({ path: 'courses', version: ["v1"] })
export class CoursesController {
  constructor(
    private coursesGetService: CoursesGetService,
    private coursesGetByTopicService: CoursesGetByTopicService
  ) {}

  @Get('')
  coursesGet(@Query("page", new DefaultValuePipe(0), ParseIntPipe) page?: number): Course[] {
    const limit = 16;
    return this.coursesGetService.execute(limit, page);
  }

  @Get("/:topicName")
  coursesGetByTopic(
    @Param("topicName") topicName: string,
    @Query("page", new DefaultValuePipe(0), ParseIntPipe) page?: number
  ): Course[] {
    const limit = 16;
    return this.coursesGetByTopicService.execute(topicName, limit, page);
  }
}