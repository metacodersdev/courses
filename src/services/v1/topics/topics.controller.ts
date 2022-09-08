import { Controller, Get } from "@nestjs/common";
import { Topic } from "src/dataMockup/DataMockupInterface";
import { TopicsGetService } from "./topicsGet/topicsGet.service";

@Controller({ path: "topics", version: ["v1"] })
export class TopicsController {
  constructor(private topicsGetService: TopicsGetService) {}

  @Get("")
  topicsGet(): Topic[] {
    return this.topicsGetService.execute();
  }
}