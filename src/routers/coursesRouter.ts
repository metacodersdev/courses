import { PrismaClient } from "@prisma/client";
import console from "console";
import { Request, Response, Router } from "express";
import { courseGetByIdInteractor } from "../interactors/courseGet/courseGetByIdInteractor";
import { coursesGetInteractor } from "../interactors/coursesGet/coursesGetInteractor";

export const coursesRouter = (router: Router, path: string, prismaClient: PrismaClient) => {
  router.get(`${path}/courses/:courseId`, async (req: Request, res: Response) => {
    const courseId = req.params["courseId"];
    if (!courseId) {
      throw new Error("CourseId should not is empty");
    }
    const response = await courseGetByIdInteractor(prismaClient, courseId);
    return res.status(200).json(response);
  });

  router.get(`${path}/courses`, async (req: Request, res: Response) => {
    const response = await coursesGetInteractor(prismaClient);
    return res.status(200).json(response);
  })

  return router;
}