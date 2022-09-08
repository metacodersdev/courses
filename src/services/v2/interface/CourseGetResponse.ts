export interface TopicDto {
  id: number;
  topic_name: string;
};

export interface SiteDto {
  id: number;
  site_name: string;
  url: string;
};

export interface AuthorDto {
  id: number;
  name: string;
  subscribe: number | string;
  url: string;
}

export interface CourseDto {
  id: number;
  title: string;
  course_url: string;
  img_url: string;
  video_url?: string;
  description: string;
  count_reviews?: number;
  rating?: string;
  count_like?: number | string;
  count_comment?: number | string;
  count_views: number;
  last_updated: string;
  total_time: string;
  price: string;
  coupon?: string;
};

export interface CourseGetResponse extends CourseDto {
  topics: TopicDto[],
  site: SiteDto,
  authors: AuthorDto[]
};
