import { Module } from "@nestjs/common";
import { PrismaModule } from "src/services/prismaService/prisma.module";
import { PrismaService } from "src/services/prismaService/prisma.service";
import { CountsController } from "./counts.controller";
import { CountsGetService } from "./countsGet/countsGet.service";

@Module({
  imports: [PrismaModule],
  controllers: [CountsController],
  providers: [CountsGetService, PrismaService]
})
export class CountsModule {}
