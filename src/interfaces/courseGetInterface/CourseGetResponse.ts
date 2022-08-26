export interface CourseGetResponse {
  id: string;
  title: string;
  imageUrl: string;
  videoUrl: string;
  description?: string;
  shortDescription?: string;
  vote?: number;
  during?: string;
  createdAt: string;
  updatedAt: string;
  promoCode?: string;
  price?: number;
};