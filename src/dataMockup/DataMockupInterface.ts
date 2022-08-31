interface Site {
  id: number;
  site_name: string;
  url: string;
}

export interface Topic {
  id: number;
  topic_name: string;
}

export interface Author {
  id: number;
  name: string;
  subscribe: number | string;
  url: string;
}

export interface Course {
  id: number;
  title: string;
  course_url: string;
  img_url: string;
  video_url?: string;
  description: string;
  count_reviews?: number;
  rating?: number;
  count_like?: number;
  count_comment?: number;
  count_views: number;
  last_updated: string;
  total_time: string;
  price: string;
  coupon?: string;
  topics: Topic[];
  site: Site;
  authors: Author[];
}
