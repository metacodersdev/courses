import { Module } from "@nestjs/common";
import { PrismaService } from "src/services/prismaService/prisma.service";
import { TopicsController } from "./topics.controller";
import { TopicsGetService } from "./topicsGet/topicsGet.service";

@Module({
  imports: [],
  controllers: [TopicsController],
  providers: [PrismaService, TopicsGetService]
})
export class TopicsModule {}
