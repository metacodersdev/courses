import { PrismaClient } from "@prisma/client";
import { CourseGetResponse } from "../../interfaces/courseGetInterface/CourseGetResponse";
import { TopicGetResponse } from "../../interfaces/topicGetResponse/TopicGetResponse";

interface CoursesGetByTopicReponse extends TopicGetResponse {
  courses?: CourseGetResponse[],
};

export const coursesGetByTopic = async (prismaClient: PrismaClient, topic: string): Promise<CoursesGetByTopicReponse> => {
  const topicGet = await prismaClient.topic.findFirst({
    where: {
      title: topic,
    },
    include: {
      courses: {
        select: {
          course: true,
        }
      },
    },
  });

  if (!topicGet) {
    throw Error("Topic is not found");
  }

  const response: CoursesGetByTopicReponse = {
    id: topicGet.id.toString(),
    title: topicGet.title,
    description: topicGet.description || "",
    createdAt: topicGet.created_at.toISOString(),
    updatedAt: topicGet.updated_at.toISOString(),
  };

  const courses = topicGet.courses;
  if (!courses || courses.length === 0) {
    response.courses = []
  }

  response.courses = courses.map((item) => {
    const course = item.course;
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
    };
  });

  return response;
}