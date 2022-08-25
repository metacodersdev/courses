import { PrismaClient } from "@prisma/client";
import { CourseGetResponse } from "../../interfaces/courseGetInterface/CourseGetResponse";

export const coursesGetInteractor = async (prismaClient: PrismaClient): Promise<CourseGetResponse[]> => {
  const courses = await prismaClient.course.findMany();
  if (!courses || courses.length === 0) {
    return [];
  }

  const response = courses.map((course) => {
    return {
      id: course.id.toString(),
      title: course.title,
      imageUrl: course.img_url,
      videoUrl: course.video_url,
      description: course.description || "",
      short_description: course.short_description || "",
      vote: course.vote || 0,
      during: course.during || "",
      createdAt: course.created_at.toISOString(),
      updatedAt: course.updated_at.toISOString(),
      promo_code: course.promo_code || "",
      price: course.price || 0,
    }
  });

  return response;
}