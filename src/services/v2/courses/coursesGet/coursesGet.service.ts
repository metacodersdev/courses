import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prismaService/prisma.service";
import { InterleaveCoursesBySiteService } from "../common/interleaveCoursesBySite.service";
import { CourseGetResponse } from "../../interface/CourseGetResponse";
import { flattenDeep } from "src/pkgs/lodash";

@Injectable()
export class CoursesGetService {
  constructor(
    private prismaService: PrismaService,
    private interleaveCoursesBySiteService: InterleaveCoursesBySiteService
  ) {}

  async execute(limit: number, page?: number) {
    if (page) {
      const coursesGet = await this.prismaService.course.findMany({
        skip: (page - 1) * limit,
        take: limit,
        include: {
          Site: true
        },
      });

      if (!coursesGet) {
        return [];
      }

      return coursesGet
    }

    const coursesGet = await this.prismaService.course.findMany({
      include: {
          Site: true,
        }
    });

    if (!coursesGet) {
      return [];
    }

    return coursesGet
  }
}
