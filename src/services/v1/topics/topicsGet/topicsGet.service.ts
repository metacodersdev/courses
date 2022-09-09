import { Course, Topic } from "../../../../dataMockup/DataMockupInterface";
import { concat, uniqBy } from "../../../../pkgs/lodash";
import { Injectable } from "@nestjs/common";
import { DataMockupService } from "../../../../dataMockup/dataMockup.service";

@Injectable()
export class TopicsGetService {
  constructor(private dataMockupService: DataMockupService) {}

  execute(): Topic[] {
    const data = this.dataMockupService.excute();
    const topics = concat(...data.map((item) => item.topics));
    const topicsGet = uniqBy(topics, (topic) => topic.topic_name);
    if (!topicsGet || topicsGet.length === 0) {
      return [];
    }
    return topicsGet;
  }
}