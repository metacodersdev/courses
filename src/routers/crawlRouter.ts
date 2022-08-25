import { Request, Response, Router } from "express";
import { crawlSiteInteractor } from "../interactors/crawlSite/crawlSiteInteractor";
import { CrawlSiteInterface } from "../interfaces/crawlSite/CrawlSiteInterface";

export const crawlRouter = (router: Router) => {
  router.post("/api/v1/crawl", async (req: Request<{}, {}, CrawlSiteInterface>, res: Response) => {
    const { url } = req.body;
    await crawlSiteInteractor(url);
    
    return res.status(200).json("crawl youtobe hahaha");
  });

  return router;
}