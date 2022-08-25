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