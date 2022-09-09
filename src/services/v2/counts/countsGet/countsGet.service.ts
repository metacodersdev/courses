import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prismaService/prisma.service";
import { CountsGetResponse } from "./CountsGetResponse";

@Injectable()
export class CountsGetService {
  constructor(private prismaService: PrismaService) {}

  async execute(): Promise<CountsGetResponse> {
    const countCourses = await this.prismaService.course.count();
    return {
      courses: countCourses
    }
  }
}