import axios from "axios";
import { load } from "cheerio";

export const crawlSiteInteractor = async (url: string) => {
  const getSite = await axios.get(url);
  const { data } = getSite;

  const $ = load(data);
  const title = $("title").text();
  
}