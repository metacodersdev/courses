export interface CourseGetResponse {
  id: string;
  title: string;
  imageUrl: string;
  videoUrl: string;
  description?: string;
  short_description?: string;
  vote?: number;
  during?: string;
  createdAt: string;
  updatedAt: string;
  promo_code?: string;
  price?: number;
};

export interface SiteGetResponse {
  id: string;
  siteName: string;
  siteUrl: string;
  keywords: string;
  createdAt: string;
  updatedAt: string;
};

export interface CourseGetBySiteResponse extends CourseGetResponse {
  site: SiteGetResponse;
};