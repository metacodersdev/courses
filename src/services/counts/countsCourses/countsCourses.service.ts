import { Injectable } from "@nestjs/common";
import { DataMockupService } from "../../../dataMockup/dataMockup.service";

@Injectable()
export class CountsCoursesService {
  constructor(private dataMockupService: DataMockupService) {}

  execute(): number {
    const courses = this.dataMockupService.excute();
    return courses.length;
  }
}
