import { Injectable } from "@nestjs/common";
import { Author, Course, Site, Topic } from "@prisma/client";
import { AuthorDto, CourseGetResponse, SiteDto, TopicDto } from "../../interface/CourseGetResponse";

@Injectable()
export class CourseResponseBuilderService {
  // execute(course: Course, site: Site): CourseGetResponse {
  //   const siteResponse = this.siteResponseBuilder(site);
  //   // return {
  //   //   ...course,
  //   //   total_time: course.during,
  //   //   topics: topicsResponse,
  //   //   site: siteResponse,
  //   //   authors: authorsResponse,
  //   // }
  // }

  authorResponseBuilder(author: Author): AuthorDto {
    return {
      ...author
    }
  }

  topicResponseBuilder(topic: Topic): TopicDto {
    return {
      ...topic,
      topic_name: topic.title
    }
  }

  siteResponseBuilder(site: Site): SiteDto {
    return {
      ...site,
      url: site.site_url
    }
  }
}