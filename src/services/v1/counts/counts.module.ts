import { Module } from "@nestjs/common";
import { DataMockupModule } from "src/dataMockup/dataMockup.module";
import { CountsController } from "./counts.controller";
import { CountsCoursesService } from "./countsCourses/countsCourses.service";

@Module({
  imports: [DataMockupModule],
  controllers: [CountsController],
  providers: [CountsCoursesService],
})

export class CountsMockupModule {}
