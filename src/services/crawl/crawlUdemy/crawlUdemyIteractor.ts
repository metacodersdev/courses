import axios from "axios";
import { load } from "cheerio";
import { Course } from "../../../dataMockup/DataMockupInterface";

const crawlSite = async (url: string) => {
  const { data: html } = await axios.get(url);
  if (!html) {
    return "load site fail";
  }
  console.log("html---------------", html);

  const $ = load(html);
  const title = $('[property="og:title"]').attr("content");
  const courseUrl = $('[property="og:url"]').attr("content");
  const imageUrl = $('[property="og:image"]').attr("content");
  const description = $('[property="og:description"]').attr("content");
  const rating = $('[data-purpose="rating-number"]').text();
  const countReviews = $('a[data-purpose="rating"] > span:nth-child(2)')
    .text()
    .replace(/[^\d]/g, "");
  const countViews = $("div .enrollment").text().split(" ")[0];
  const totalTime = $('div[data-purpose="curriculum-stats"]').find("span");
  console.log("totalTime-------------------", totalTime);

  const lastUpdated = $("div .last-update-date > span").text().split(" ")[2];

  return {
    title,
    courseUrl,
    imageUrl,
    description,
    rating,
    countReviews,
    countViews: countViews ? countViews.replace(/[^\d]/g, "") : "",
    lastUpdated,
  };
};

export const crawlUdemyIteractor = async (
  data: Course[],
  url: string
): Promise<string> => {
  const crawlData = await crawlSite(url);
  console.log(data);
  return JSON.stringify(crawlData);

  // const course: Course = {
  //   id: data.length + 1,
  //   title: title || "",
  //   course_url: courseUrl || "",
  //   img_url: imageUrl || "",
  //   description: description || "",
  //   count_views: 0,
  //   last_updated: "",
  //   total_time: "",
  //   price: "",
  //   site: {
  //     id: 2,
  //     site_name: "udemy",
  //     url: "https://www.udemy.com/",
  //   },
  //   topics: [
  //     {
  //       id: 1,
  //       topic_name: "react",
  //     },
  //   ],
  //   authors: [
  //     {
  //       id: 9,
  //       name: "David Joseph Katz",
  //       url: "https://www.udemy.com/user/54cd8dd54e49b/",
  //       subscribe: 284810,
  //     },
  //   ],
  // };

  // return course;
};
