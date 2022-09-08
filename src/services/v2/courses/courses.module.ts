import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { configsEnvironment } from "src/configs/ConfigsEnvironment";
import { PrismaModule } from "src/services/prismaService/prisma.module";
import { PrismaService } from "src/services/prismaService/prisma.service";
import { CourseResponseBuilderService } from "./common/courseResponseBuilder.service";
import { InterleaveCoursesBySiteService } from "./common/interleaveCoursesBySite.service";
import { CoursesController } from "./coursesController";
import { CoursesGetService } from "./coursesGet/coursesGet.service";
import { CoursesGetByTopicService } from "./coursesGetByTopic/coursesGetByTopic.service";

@Module({
  imports: [],
  controllers: [CoursesController],
  providers: [
    PrismaService,
    ConfigService,
    CoursesGetService,
    InterleaveCoursesBySiteService,
    CourseResponseBuilderService,
    CoursesGetByTopicService
  ]
})
export class CoursesModule {}
