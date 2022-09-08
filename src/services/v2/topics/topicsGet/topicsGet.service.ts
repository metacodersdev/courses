import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prismaService/prisma.service";
import { TopicDto } from "../../interface/CourseGetResponse";

@Injectable()
export class TopicsGetService {
  constructor(private prismaService: PrismaService) {}

  async execute(): Promise<TopicDto[]> {
    const topicsGet = await this.prismaService.topic.findMany();

    if (!topicsGet) {
      return [];
    }

    const response: TopicDto[] = topicsGet.map((topic) => ({
      id: topic.id,
      topic_name: topic.title
    }));

    return response;
  }
}