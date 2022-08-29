import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";
import { Configs } from "../configs/Configs";
import { courseGetByIdInteractor } from "../interactors/courseGet/courseGetByIdInteractor";
import { coursesGetInteractor } from "../interactors/coursesGet/coursesGetInteractor";
import { coursesGetByTopic } from "../interactors/coursesGetByTopic/coursesGetByTopicInteractor";

export const coursesRouterV2 = (
  router: Router,
  configs: Configs,
  prismaClient: PrismaClient
) => {
  const path = configs.routerPathV2;
  router.get(
    `${path}/courses/:courseId`,
    async (req: Request, res: Response) => {
      const courseId = req.params["courseId"];
      if (!courseId) {
        throw new Error("CourseId should not is empty");
      }
      const response = await courseGetByIdInteractor(prismaClient, courseId);
      return res.status(200).json(response);
    }
  );

  router.get(`${path}/courses`, async (req: Request, res: Response) => {
    const limit = configs.paginationLimit;
    const offset = (Number(req.query["page"]) as number) || undefined;
    const response = await coursesGetInteractor(prismaClient, limit, offset);
    return res.status(200).json(response);
  });

  router.get(
    `${path}/courses/topics/:topic`,
    async (req: Request, res: Response) => {
      const topic = req.params["topic"];
      if (!topic) {
        throw new Error("CourseId should not is empty");
      }
      const response = await coursesGetByTopic(prismaClient, topic);
      return res.status(200).json(response);
    }
  );

  return router;
};
