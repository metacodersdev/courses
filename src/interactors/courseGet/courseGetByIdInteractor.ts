import { PrismaClient } from "@prisma/client";
import { CourseGetResponse } from "../../interfaces/courseGetInterface/CourseGetResponse";

export const courseGetByIdInteractor = async (prismaClient: PrismaClient, courseId: string): Promise<CourseGetResponse> => {
  const course = await prismaClient.course.findUnique({
    where: {
      id: Number(courseId)
    },
  });
  if (!course) {
    throw new Error("Course is not found");
  }

  const response: CourseGetResponse = {
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

  return response;
}