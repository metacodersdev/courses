import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prismaService/prisma.service";
import { InterleaveCoursesBySiteService } from "../common/interleaveCoursesBySite.service";
import { CoursesGetBySiteNameService } from "../common/coursesGetBySiteName.service";
import { Course } from "@prisma/client";

@Injectable()
export class CoursesGetService {
  constructor(
    private prismaService: PrismaService,
    private coursesGetBySiteNameService: CoursesGetBySiteNameService,
    private interleaveCoursesBySiteService: InterleaveCoursesBySiteService
  ) {}

  async execute(limit: number, page?: number): Promise<Course[]> {
    if (page) {
      const udemyLimit = Math.round(limit / 2);
      const youtubeLimit = limit - udemyLimit;
      const coursesGetByUdemy = await this.coursesGetBySiteNameService.execute("udemy", udemyLimit, page);
      const coursesGetByYoutube = await this.coursesGetBySiteNameService.execute("youtube", youtubeLimit, page);
      const courses = this.interleaveCoursesBySiteService.execute(coursesGetByYoutube, coursesGetByUdemy);

      return courses;
    }

    const coursesGet = await this.prismaService.course.findMany({
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
