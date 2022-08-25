import { Prisma, PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import express, { Express, Request, Response, Router } from 'express';
import { ConfigsEnvironment } from './configs/ConfigsEnvironment';
import { coursesRouter } from './routers/coursesRouter';
import { seedData } from './seedData';

const server = (async () => {
  const { port, nodeEnv, routerPath } = ConfigsEnvironment;

  const prismaClient = new PrismaClient();
  const allTables: Array<{ TABLE_NAME: string }> = await prismaClient.$queryRaw`
    SELECT TABLE_NAME FROM information_schema.tables
    WHERE table_schema = ${"metacourses"};
  `;
  const existsCourseData = await prismaClient.course.count();
  const isDropData = existsCourseData && nodeEnv === "development";
  if (isDropData) {
    try {
      await prismaClient.$connect();
      await prismaClient.$transaction(async (prisma) => {
        await prisma.$queryRaw`
          SET FOREIGN_KEY_CHECKS=0;
        `;
        for (const table of allTables) {
          const truncateTableQuery = `TRUNCATE TABLE ${table.TABLE_NAME};`;
          await prisma.$queryRaw(Prisma.raw(truncateTableQuery));
        };
        await prisma.$queryRaw`
          SET FOREIGN_KEY_CHECKS=1;
        `;
      })
    } catch (error) {
      console.log(error);
    }
    await prismaClient.$disconnect();
  }
  await seedData(prismaClient);

  const app: Express = express();
  app.use(bodyParser.json());
  const router = Router();

  app.get('/api/v1/', (req: Request, res: Response) => {
    res.status(200).json("hello");
  });
  app.use(coursesRouter(router, routerPath, prismaClient))

  
  app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`);
  });
})();


