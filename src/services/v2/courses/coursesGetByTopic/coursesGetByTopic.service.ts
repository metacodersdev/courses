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
          TopicCourse: {
            every: {
              Topic: {
                title: topicName
              }
            }
          }
        },
        include: {
          TopicCourse: {
            include: {
              Topic: true
            }
          },
          AuthorCourse: {
            include: {
              Author: true
            }
          },
          Site: true,
        }
      });

      if (!coursesGet) {
        return [];
      }

      const response = coursesGet.map((course) => {
        const topics = course.TopicCourse.map((topic) => topic.Topic);
        const authors = course.AuthorCourse.map((author) => author.Author);
        return this.courseResponseBuilderService.execute({...course}, topics, course.Site, authors)
      });

      return this.interleaveCoursesBySiteService.execute(response);
    }

    const coursesGet = await this.prismaService.course.findMany({
      where: {
        TopicCourse: {
          every: {
            Topic: {
              title: topicName
            }
          }
        }
      },
      include: {
          TopicCourse: {
            include: {
              Topic: true
            }
          },
          AuthorCourse: {
            include: {
              Author: true
            }
          },
          Site: true,
        }
    });

    if (!coursesGet) {
      return [];
    }

    const response = coursesGet.map((course) => {
        const topics = course.TopicCourse.map((topic) => topic.Topic);
        const authors = course.AuthorCourse.map((author) => author.Author);
        return this.courseResponseBuilderService.execute({...course}, topics, course.Site, authors)
      });

      return this.interleaveCoursesBySiteService.execute(response);
  }
}