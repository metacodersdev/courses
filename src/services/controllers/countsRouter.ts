import { Request, Response, Router } from "express";
import { Configs } from "../../configs/Configs";
import { Course } from "../../dataMockup/DataMockupInterface";
import { countsCourseInteractor } from "../counts/countsCourse/countsCourseInteractor";

export const countsRouter = (router: Router,configs: Configs, data: Course[]) => {
  const { routerPathV1: path } = configs;

  router.get(`${path}/counts`, (req: Request, res: Response) => {
    const response = countsCourseInteractor(data);
    console.log(req);
    return res.status(200).json(response);
  });

  return router;
}