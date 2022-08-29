import { PrismaClient } from "@prisma/client";

export const seedData = async (prismaClient: PrismaClient) => {
  await prismaClient.$transaction(async (prisma) => {
    await prisma.site.createMany(
      {
        data: [
          {
            site_name: "youtube",
            site_url: "https://www.youtube.com/",
            keywords: "youtobe",
          },
          {
            site_name: "udemy",
            site_url: "https://www.udemy.com",
            keywords: "udemy",
          }
        ]
      }
    );
    const sites = await prisma.site.findMany();
    if (!sites || !sites[0] || !sites[1]) {
      throw new Error("site table does not data yet");
    }

    await prisma.category.create(
      {
        data: {
          title: "development"
        }
      }
    );
    const categories = await prisma.category.findMany();
    if (!categories || !categories[0]) {
      throw new Error("category table does not data yet");
    }

    await prisma.topic.createMany(
      {
        data: [
          {
            title: "React"
          },
          {
            title: "Javascript"
          }
        ]
      }
    );
    const topics = await prisma.topic.findMany();
    if (!topics || !topics[0] || !topics[1]) {
      throw new Error("topic table does not data yet");
    }

    await prisma.course.createMany(
      {
        data: [
          {
            title: "React Crash Course for Beginners 2021 - Learn ReactJS from Scratch in this 100% Free Tutorial!",
            img_url: "https://i.ytimg.com/vi/Dorf8i6lCuk/maxresdefault.jpg",
            video_url: "https://www.youtube.com/embed/Dorf8i6lCuk",
            description:
              "Get Started with React.js and learn how to build amazing websites with ReactJS! Full Project included, 100% free!Join our bestselling ReactJS course",
            site_id: sites[0].id,
            category_id: categories[0].id,
          },
          {
            title: "Javascript for Beginners",
            img_url: "https://img-c.udemycdn.com/course/480x270/8324_fa84_13.jpg",
            video_url: "https://www.youtube.com/embed/Dorf8i6lCuk",
            description:
              "Learn javascript online and supercharge your web design with this Javascript for beginners training course.",
              site_id: sites[1].id,
              category_id: categories[0].id,
          }
        ]
      }
    );
    const courses = await prisma.course.findMany();
    if (!courses || !courses[0] || !courses[1]) {
      throw new Error("course table does not data yet");
    }

    const topicCourseCreated = await prisma.topicCourse.createMany(
      {
        data: [
          {
            topic_id: topics[0].id,
            course_id: courses[0].id,
          },
          {
            topic_id: topics[1].id,
            course_id: courses[1].id,
          },
        ]
      }
    );
    if (!topicCourseCreated) {
      throw new Error("Error while create data for topicCourse");
    }
  });
  await prismaClient.$disconnect();
}
