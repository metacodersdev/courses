import { Module } from "@nestjs/common";
import { DataMockupService } from "./dataMockup.service";

@Module({
  exports: [DataMockupService],
  providers: [DataMockupService]
})

export class DataMockupModule {}
