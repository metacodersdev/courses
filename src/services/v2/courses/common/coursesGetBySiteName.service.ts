import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prismaService/prisma.service";
import { Course } from "@prisma/client";

@Injectable()
export class CoursesGetBySiteNameService {
  constructor(private prismaService: PrismaService) {}

  async execute(siteName: string, limit: number, page: number, topic?: string): Promise<Course[]> {
    if (topic) {
      const courses = await this.prismaService.course.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where: {
          Site: {
            AND: [
              {
                keywords: topic
              },
              {
                site_name: siteName
              }
            ]
          }
        },
        include: {
          Site: true,
        }
      });
  
      if (!courses) {
        return [];
      }
      return courses;
    }
    
    const courses = await this.prismaService.course.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        Site: {
          site_name: siteName
        }
      },
      include: {
        Site: true,
      }
    });

    if (!courses) {
      return [];
    }
    return courses;
  }
}