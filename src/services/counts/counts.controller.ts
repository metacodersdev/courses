import { Controller, Get } from "@nestjs/common";
import { CountsCoursesService } from "./countsCourses/countsCourses.service";

@Controller('counts')
export class CountsController {
  constructor (private countsCoursesService: CountsCoursesService) {}

  @Get('')
  getCountsCourses(): number {
    return this.countsCoursesService.execute();
  }
}