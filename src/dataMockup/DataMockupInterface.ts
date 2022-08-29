interface Site {
  id: number;
  site_name: string;
}

export interface Topic {
  id: number;
  topic_name: string;
}

export interface Course {
  id: number;
  title: string;
  course_url: string;
  img_url: string;
  video_url?: string;
  description: string;
  rating: number;
  score?: number;
  views: number;
  last_updated: string;
  subscribe: number;
  total_time: string;
  site: Site;
  price?: string;
  coupon?: string;
  topics: Topic[];
}
