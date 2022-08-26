import { Course, PrismaClient } from "@prisma/client";
import { CourseGetResponse } from "../../interfaces/courseGetInterface/CourseGetResponse";

const buildResponse = (courses: Course[]): CourseGetResponse[] => {
  return courses.map((course) => {
    return {
      id: course.id.toString(),
      title: course.title,
      imageUrl: course.img_url,
      videoUrl: course.video_url,
      description: course.description || "",
      shortDescription: course.short_description || "",
      vote: course.vote || 0,
      during: course.during || "",
      createdAt: course.created_at.toISOString(),
      updatedAt: course.updated_at.toISOString(),
      promoCode: course.promo_code || "",
      price: course.price || 0,
    }
  });
}

const coursesGetAll = async (prismaClient: PrismaClient): Promise<CourseGetResponse[]> => {
  const courses = await prismaClient.course.findMany();
  if (!courses || courses.length === 0) {
    return [];
  }

  return buildResponse(courses);
}

const coursesGetByLinitAndOffset = async (prismaClient: PrismaClient, offset: number, limit: number): Promise<CourseGetResponse[]> => {
  const courses = await prismaClient.course.findMany({
    skip:(offset - 1) * limit,
    take: limit,
    orderBy: {
      title: "desc",
    },
  });
  if (!courses || courses.length === 0) {
    return [];
  }

  return buildResponse(courses);
}

export const coursesGetInteractor = async (prismaClient: PrismaClient, limit: number, offset?: number): Promise<CourseGetResponse[]> => {
  if (!offset) {
    return coursesGetAll(prismaClient);
  }

  return coursesGetByLinitAndOffset(prismaClient, offset, limit);
}
