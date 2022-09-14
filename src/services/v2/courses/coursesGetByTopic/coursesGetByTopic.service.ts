import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prismaService/prisma.service";
import { CoursesGetBySiteNameService } from "../common/coursesGetBySiteName.service";
import { InterleaveCoursesBySiteService } from "../common/interleaveCoursesBySite.service";
import { Course } from "@prisma/client";

@Injectable()
export class CoursesGetByTopicService {
  constructor(
    private prismaService: PrismaService,
    private coursesGetBySiteNameService: CoursesGetBySiteNameService,
    private interleaveCoursesBySiteService: InterleaveCoursesBySiteService
  ) {}

  async execute(topicName: string, limit: number, page?: number): Promise<Course[]> {
    if (page) {
      const udemyLimit = Math.round(limit / 2);
      const youtubeLimit = limit - udemyLimit;
      const coursesGetByUdemy = await this.coursesGetBySiteNameService.execute("udemy", udemyLimit, page, topicName);
      const coursesGetByYoutube = await this.coursesGetBySiteNameService.execute("youtube", youtubeLimit, page, topicName);
      const courses = this.interleaveCoursesBySiteService.execute(coursesGetByYoutube, coursesGetByUdemy);

      return courses;
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

    const coursesGetByUdemy = coursesGet.filter((course) => course.Site.site_name === "udemy");
    const coursesGetByYoutube = coursesGet.filter((course) => course.Site.site_name === "youtube");
    const courses = this.interleaveCoursesBySiteService.execute(coursesGetByYoutube, coursesGetByUdemy);

    return courses;
  }
}