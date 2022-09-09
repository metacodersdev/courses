import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prismaService/prisma.service";
import { CourseResponseBuilderService } from "../common/courseResponseBuilder.service";
import { InterleaveCoursesBySiteService } from "../common/interleaveCoursesBySite.service";

@Injectable()
export class CoursesGetByTopicService {
  constructor(
    private prismaService: PrismaService,
    private courseResponseBuilderService: CourseResponseBuilderService,
    private interleaveCoursesBySiteService: InterleaveCoursesBySiteService
  ) {}

  async execute(topicName: string, limit: number, page?: number) {
    if (page) {
      const coursesGet = await this.prismaService.course.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where: {
          Site: {
            keywords: topicName 
          }
        },
        include: {
          Site: true,
        }
      });

      if (!coursesGet) {
        return [];
      }

      return coursesGet;
    }

    const coursesGet = await this.prismaService.course.findMany({
      where: {
        Site: {
          keywords: topicName 
        }
      },
      include: {
        Site: true,
      }
    });

    if (!coursesGet) {
      return [];
    }

    return coursesGet;
  }
}