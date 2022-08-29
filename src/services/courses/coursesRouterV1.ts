import { Request, Response, Router } from "express";
import { Configs } from "../../configs/Configs";
import { Course } from "../../dataMockup/DataMockupInterface";
import { coursesGetInteractor } from "./coursesGet/coursesGetInteractor";

export const coursesRouterV1 = (
  router: Router,
  configs: Configs,
  dataMockup: Course[]
) => {
  const path = configs.routerPathV1;

  router.get(`${path}/courses`, (req: Request, res: Response) => {
    const limit = configs.paginationLimit;
    const offset = (Number(req.query["page"]) as number) || undefined;
    const response = coursesGetInteractor(dataMockup, limit, offset);
    return res.status(200).json(response);
  });

  return router;
};
