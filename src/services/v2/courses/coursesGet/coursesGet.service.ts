import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prismaService/prisma.service";
import { CourseResponseBuilderService } from "../common/courseResponseBuilder.service";
import { InterleaveCoursesBySiteService } from "../common/interleaveCoursesBySite.service";
import { CourseGetResponse } from "../../interface/CourseGetResponse";

@Injectable()
export class CoursesGetService {
  constructor(
    private prismaService: PrismaService,
    private courseResponseBuilderService: CourseResponseBuilderService,
    private interleaveCoursesBySiteService: InterleaveCoursesBySiteService
  ) {}

  async execute(limit: number, page?: number): Promise<CourseGetResponse[]> {
    if (page) {
      const coursesGet = await this.prismaService.course.findMany({
        skip: (page - 1) * limit,
        take: limit,
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
          Site: true
        },
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
