import { Controller, Get } from "@nestjs/common";
import { CountsCoursesService } from "./countsCourses/countsCourses.service";

@Controller({ path: 'counts', version: ["v1"] })
export class CountsController {
  constructor (private countsCoursesService: CountsCoursesService) {}

  @Get('')
  getCountsCourses(): number {
    return this.countsCoursesService.execute();
  }
}