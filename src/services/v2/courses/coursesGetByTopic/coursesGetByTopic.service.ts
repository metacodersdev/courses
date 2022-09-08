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
          topics: {
            every: {
              topic: {
                title: topicName
              }
            }
          }
        },
        include: {
          topics: {
            include: {
              topic: true,
            },
          },
          authors: {
            include: {
              author: true,
            },
          },
          site: true,
        }
      });

      if (!coursesGet) {
        return [];
      }

      const response = coursesGet.map((course) => {
        const topics = course.topics.map((topic) => topic.topic);
        const authors = course.authors.map((author) => author.author);
        return this.courseResponseBuilderService.execute({...course}, topics, course.site, authors)
      });

      return this.interleaveCoursesBySiteService.execute(response);
    }

    const coursesGet = await this.prismaService.course.findMany({
      where: {
        topics: {
          every: {
            topic: {
              title: topicName
            }
          }
        }
      },
      include: {
          topics: {
            include: {
              topic: true,
            },
          },
          authors: {
            include: {
              author: true,
            },
          },
          site: true,
        }
    });

    if (!coursesGet) {
      return [];
    }

    const response = coursesGet.map((course) => {
        const topics = course.topics.map((topic) => topic.topic);
        const authors = course.authors.map((author) => author.author);
        return this.courseResponseBuilderService.execute({...course}, topics, course.site, authors)
      });

      return this.interleaveCoursesBySiteService.execute(response);
  }
}