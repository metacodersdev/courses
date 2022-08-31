//import { Prisma, PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import cors, { CorsOptions } from "cors";
import express, { Express, Request, Response, Router } from "express";
import { ConfigsEnvironment } from "./configs/ConfigsEnvironment";
import { dataMockup } from "./dataMockup/dataMockup";
import { coursesRouterV2 } from "./routers/coursesRouterV2";
import { seedData } from "./seedData";
import { countsRouter } from "./services/counts/countsRouter";
import { coursesRouterV1 } from "./services/courses/coursesRouterV1";
import { crawlRouters } from "./services/crawl/crawlRouters";
import { topicsRouterV1 } from "./services/topics/topicsRouterV1";

const server = (async () => {
  const configs = ConfigsEnvironment;

  //const prismaClient = new PrismaClient();
  // const allTables: Array<{ TABLE_NAME: string }> = await prismaClient.$queryRaw`
  //   SELECT TABLE_NAME FROM information_schema.tables
  //   WHERE table_schema = ${"metacourses"};
  // `;
  // const existsCourseData = await prismaClient.course.count();
  // const isDropData = existsCourseData && configs.nodeEnv === "development";
  // if (isDropData) {
  //   try {
  //     await prismaClient.$connect();
  //     await prismaClient.$transaction(async (prisma) => {
  //       await prisma.$queryRaw`
  //         SET FOREIGN_KEY_CHECKS=0;
  //       `;
  //       for (const table of allTables) {
  //         const truncateTableQuery = `TRUNCATE TABLE ${table.TABLE_NAME};`;
  //         await prisma.$queryRaw(Prisma.raw(truncateTableQuery));
  //       }
  //       await prisma.$queryRaw`
  //         SET FOREIGN_KEY_CHECKS=1;
  //       `;
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   await prismaClient.$disconnect();
  // }
  // await seedData(prismaClient);

  const app: Express = express();
  const corsOption: CorsOptions = {
    origin: "*",
  };
  app.use(cors(corsOption));
  app.use(bodyParser.json());
  const router = Router();

  // api v1
  app.get("/api/v1/", (req: Request, res: Response) => {
    res.status(200).json("hello "+ req.url);
  });

  const data = dataMockup();
  app.use(coursesRouterV1(router, configs, data));
  app.use(topicsRouterV1(router, configs, data));
  app.use(crawlRouters(router, configs, data));
  app.use(countsRouter(router, configs, data));

  // api v2
  //app.use(coursesRouterV2(router, configs, prismaClient));

  const port = configs.port;
  app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`);
  });
})();
