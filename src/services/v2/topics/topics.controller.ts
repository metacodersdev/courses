import { Controller, Get } from "@nestjs/common";
import { TopicDto } from "../interface/CourseGetResponse";
import { TopicsGetService } from "./topicsGet/topicsGet.service";

@Controller({ path: "topics", version: ["v2"] })
export class TopicsController {
  constructor(private topicsGetService: TopicsGetService) {}

  @Get("")
  async topicsGet(): Promise<TopicDto[]> {
    return this.topicsGetService.execute();
  }
}