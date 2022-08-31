import { Request, Response, Router } from "express";
import { Configs } from "../../configs/Configs";
import { Course } from "../../dataMockup/DataMockupInterface";
import { crawlUdemyIteractor } from "./crawlUdemy/crawlUdemyIteractor";

interface CrawlPayload {
  url: string;
}

export const crawlRouters = (
  router: Router,
  configs: Configs,
  data: Course[]
) => {
  const { routerPathV1: path } = configs;

  router.post(
    `${path}/crawl/udemy`,
    async (req: Request<{}, {}, CrawlPayload>, res: Response) => {
      const { url } = req.body;
      const response = await crawlUdemyIteractor(data, url);
      return res.status(200).json(response);
    }
  );

  return router;
};
