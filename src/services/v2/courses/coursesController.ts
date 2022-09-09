import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Configs } from "src/configs/Configs";
import { CoursesGetService } from "./coursesGet/coursesGet.service";
import { CoursesGetByTopicService } from "./coursesGetByTopic/coursesGetByTopic.service";
import { CourseGetResponse } from "../interface/CourseGetResponse";

@Controller({ path: "courses", version: ["v2"] })
export class CoursesController {
  constructor(
    private configService: ConfigService<Configs>,
    private coursesGetService: CoursesGetService,
    private coursesGetByTopicService: CoursesGetByTopicService,
  ) {}

  @Get('')
  async coursesGet(@Query("page", new DefaultValuePipe(0), ParseIntPipe) page?: number) {
    const limit = this.configService.get("paginationLimit");
    return this.coursesGetService.execute(limit, page);
  };

  @Get('/:topicName')
  async coursesGetByTopic(
    @Param("topicName") topicName: string,
    @Query("page", new DefaultValuePipe(0), ParseIntPipe) page?: number
  ) {
    const limit = this.configService.get("paginationLimit");
    return this.coursesGetByTopicService.execute(topicName, limit, page);
  }
}
