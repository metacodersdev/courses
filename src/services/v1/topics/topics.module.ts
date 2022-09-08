import { Module } from "@nestjs/common";
import { DataMockupModule } from "src/dataMockup/dataMockup.module";
import { TopicsController } from "./topics.controller";
import { TopicsGetService } from "./topicsGet/topicsGet.service";

@Module({
  imports: [DataMockupModule],
  controllers: [TopicsController],
  providers: [TopicsGetService]
})
export class TopicsMockupModule {}
