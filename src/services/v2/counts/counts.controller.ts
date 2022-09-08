import { Controller, Get } from "@nestjs/common";
import { CountsGetService } from "./countsGet/countsGet.service";
import { CountsGetResponse } from "./countsGet/CountsGetResponse";

@Controller({ path: "counts", version: ["v2"] })
export class CountsController {
  constructor(private countsGetService: CountsGetService) {}

  @Get("")
  async countsGet(): Promise<CountsGetResponse> {
    return this.countsGetService.execute();
  }
}