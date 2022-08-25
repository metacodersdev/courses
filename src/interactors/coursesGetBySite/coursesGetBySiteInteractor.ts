import { PrismaClient } from "@prisma/client";
import { CourseGetBySiteResponse } from "./CourseGetBySiteResponse";

export const courseGetBySiteInteractor = async (prismaClient: PrismaClient, courseId: string, siteName: string): Promise<CourseGetBySiteResponse> => {
  const site = await prismaClient.site.findFirst({
    where: {
      site_name: siteName,
    },
    include: {
      courses: {
        where: {
          id: Number(courseId),
        }
      },
    },
  });
  if (!site) {
    throw new Error("Site is not found");
  }

  const course = site.courses[0];
  if (!course) {
    throw new Error("Course is not found");
  }

  const response: CourseGetBySiteResponse = {
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
    site: {
      id: site.id.toString(),
      siteName: site.site_name,
      siteUrl: site.site_url,
      keywords: site.keywords,
      createdAt: site.created_at.toISOString(),
      updatedAt: site.updated_at.toISOString(),
    }
  }

  return response;
}