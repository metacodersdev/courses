import { PrismaClient } from "@prisma/client";
import console from "console";
import { Request, Response, Router } from "express";
import { courseGetBySiteInteractor } from "../interactors/coursesGetBySite/coursesGetBySiteInteractor";

export const coursesRouter = (router: Router, path: string, prismaClient: PrismaClient) => {
  router.get(`${path}/:courseId/:siteName`, async (req: Request, res: Response) => {
    const courseId = req.params["courseId"];
    const siteName = req.params["siteName"];
    if (!courseId || !siteName) {
      throw new Error("CourseId or site name should not is empty");
    }
    const response = await courseGetBySiteInteractor(prismaClient, courseId, siteName);
    return res.status(200).json(response);
  });

  return router;
}