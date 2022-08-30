import { Request, Response, Router } from "express";
import { Configs } from "../../configs/Configs";
import { Course } from "../../dataMockup/DataMockupInterface";
import { topicsGetInteractor } from "./topicsGet/topicsGetInteractor";

export const topicsRouterV1 = (
  router: Router,
  configs: Configs,
  dataMockup: Course[]
) => {
  const path = configs.routerPathV1;

  router.get(`${path}/topics`, (req: Request, res: Response) => {
    const response = topicsGetInteractor(dataMockup);
    console.log(req);
    return res.status(200).json(response);
  });

  return router;
};
