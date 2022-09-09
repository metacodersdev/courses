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
  count_reviews?: string;
  rating?: string;
  count_like?: string;
  count_comment?: string;
  count_views: string;
  last_updated: string;
  total_time: string;
  price: string;
  coupon?: string;
  author_id: string;
  author_name: string;
  subscribers_count: string;
};

export interface CourseGetResponse extends CourseDto {
  topics: TopicDto[],
  site: SiteDto,
};
