import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function mainSeed () {
  await prisma.$transaction(async (prismaClient) => {
    await prismaClient.site.createMany(
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
    const sites = await prismaClient.site.findMany();
    if (!sites || !sites[0] || !sites[1]) {
      throw new Error("site table does not data yet");
    }

    await prismaClient.category.create(
      {
        data: {
          title: "development"
        }
      }
    );
    const categories = await prismaClient.category.findMany();
    if (!categories || !categories[0]) {
      throw new Error("category table does not data yet");
    }

    await prismaClient.topic.createMany(
      {
        data: [
          {
            id: 1,
            title: "react"
          },
          {
            id: 2,
            title: "javascript"
          },
          {
            id: 3,
            title: "html",
          },
          {
            id: 4,
            title: "css",
          },
          {
            id: 5,
            title: "python",
          },
          {
            id: 6,
            title: "nodejs",
          },
          {
            id: 7,
            title: "typescript",
          },
          {
            id: 8,
            title: "vue",
          },
          {
            id: 9,
            title: "angular",
          },
          {
            id: 10,
            title: "django"
          }
        ]
      }
    );
    const topics = await prismaClient.topic.findMany();
    if (!topics || topics.length === 0) {
      throw new Error("topic table does not data yet");
    }

    await prismaClient.course.createMany(
      {
        data: [
          {
            id: 1,
            title:
              "React Crash Course for Beginners 2021 - Learn ReactJS from Scratch in this 100% Free Tutorial!",
            course_url:
              "https://www.youtube.com/watch?v=Dorf8i6lCuk&ab_channel=Academind",
            img_url: "https://i.ytimg.com/vi/Dorf8i6lCuk/maxresdefault.jpg",
            video_url: "https://www.youtube.com/embed/Dorf8i6lCuk",
            description:
              "Get Started with React.js and learn how to build amazing websites with ReactJS! Full Project included, 100% free!Join our bestselling ReactJS course",
            count_like: "19633",
            count_comment: "924",
            count_views: 1101601,
            last_updated: "May 5, 2021",
            during: "3:51:55",
            price: "free",
            site_id: sites[0].id,
            category_id: categories[0].id,
          },
          {
            id: 2,
            title: "Learn Modern Javascript (Build and Test Apps) - Full Course",
            course_url:
              "https://www.udemy.com/course/the-complete-javascript-course/",
            img_url: "https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg",
            description:
              "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
            count_reviews: 148566,
            count_views: 668083,
            rating: "4.8",
            last_updated: "6/2022",
            during: "69:00:00",
            price: "$9.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 3,
            title: "Become a Certified Web Developer: Web Developer Certification",
            course_url:
              "https://www.udemy.com/course/become-a-certified-web-developer/",
            img_url: "https://img-c.udemycdn.com/course/480x270/11475_9dac_14.jpg",
            description:
              "Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications",
            count_reviews: 2770,
            count_views: 33514,
            rating: "4.4",
            last_updated: "11/2020",
            during: "45:30:00",
            price: "$9.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 4,
            title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
            course_url: "https://www.udemy.com/course/100-days-of-code/",
            img_url: "https://img-b.udemycdn.com/course/480x270/2776760_f176_10.jpg",
            description:
              "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
            count_reviews: 132029,
            count_views: 586762,
            rating: "4.7",
            last_updated: "12/2021",
            during: "60:00:00",
            price: "$9.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 5,
            title: "Javascript for Beginners Learn by Doing Practical Exercises",
            course_url:
              "https://www.udemy.com/course/javascript-for-beginners-introduction-learn-fast-easy/",
            img_url: "https://img-b.udemycdn.com/course/480x270/405818_aa3f_3.jpg",
            description:
              "JavaScript for Beginners : Work closely with me doing exercises & learn more. I make Javascript easy for you guaranteed.",
            count_reviews: 14245,
            count_views: 35103,
            rating: "4.3",
            last_updated: "01/2022",
            during: "04:00:00",
            price: "$13.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 6,
            title: "Node JS Training: Learn and Understand Node JS",
            course_url: "https://www.udemy.com/course/understand-nodejs/",
            img_url: "https://img-c.udemycdn.com/course/480x270/461160_8d87_6.jpg",
            description:
              "Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more.",
            count_reviews: 27336,
            count_views: 120325,
            rating: "4.5",
            last_updated: "09/2020",
            during: "13:00:00",
            price: "$9.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 7,
            title: "The Complete Node.js Developer Course (3rd Edition)",
            course_url:
              "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/",
            img_url: "https://img-c.udemycdn.com/course/480x270/922484_52a1_8.jpg",
            description:
              "Learn Node.js by building real-world applications with Node JS, Express, MongoDB, Jest, and more!",
            count_reviews: 67043,
            count_views: 280306,
            rating: "4.6",
            last_updated: "03/2021",
            during: "35:00:00",
            price: "$9.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 8,
            title: "Introduction to TypeScript Development",
            course_url:
              "https://www.udemy.com/course/introduction-typescript-development/",
            img_url: "https://img-c.udemycdn.com/course/480x270/999200_ae6d_4.jpg",
            description:
              "Get ready to build React, Vue and Angular web and mobile applications by learning the TypeScript programming language.",
            count_reviews: 3255,
            count_views: 12213,
            rating: "4.3",
            last_updated: "04/2021",
            during: "08:00:00",
            price: "$9.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 9,
            title: "React JS - Mastering Redux",
            course_url: "https://www.udemy.com/course/react-js-mastering-redux/",
            img_url: "https://img-c.udemycdn.com/course/480x270/1252630_a81f.jpg",
            description:
              "Build the React JS and Redux apps of your dreams! Learn JavaScript, ES6, APIs, and Full Web App Development in ReactJS!",
            count_reviews: 1488,
            count_views: 13531,
            rating: "4.4",
            last_updated: "07/2017",
            during: "05:00:00",
            price: "$9.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 10,
            title: "CSS Layouts Masterclass: Build Responsive-Adaptive Websites",
            course_url: "https://www.udemy.com/course/css-layouts-masterclass/",
            img_url: "https://img-c.udemycdn.com/course/480x270/4656094_e2b4_3.jpg",
            description:
              "Learn & Master Responsive, Adaptive & Mobile-First Layouts to Build Real-World Websites with Flexbox, Grid & Sass",
            count_reviews: 24,
            count_views: 591,
            rating: "4.8",
            last_updated: "08/2022",
            during: "49h 26m",
            price: "$9.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 11,
            title: "JavaScript: Understanding the Weird Parts",
            course_url: "https://www.udemy.com/course/understand-javascript/",
            img_url: "https://img-c.udemycdn.com/course/480x270/364426_2991_6.jpg",
            description:
              "An advanced JavaScript course for everyone! Scope, closures, prototypes, 'this', build your own framework, and more.",
            count_reviews: 45301,
            count_views: 178397,
            rating: "4.7",
            last_updated: "07/2022",
            during: "12h 13m",
            price: "$9.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 12,
            title: "Python and Django Full Stack Web Developer Bootcamp",
            course_url: "https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/",
            img_url: "https://img-b.udemycdn.com/course/480x270/822444_a6db.jpg",
            description:
              "Learn to build websites with HTML , CSS , Bootstrap , Javascript , jQuery , Python 3 , and Django!",
            count_reviews: 44415,
            count_views: 182884,
            rating: "4.6",
            last_updated: "09/2019",
            during: "31h 54m",
            price: "$9.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 13,
            title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More",
            course_url: "https://www.udemy.com/course/advanced-css-and-sass/",
            img_url: "https://img-b.udemycdn.com/course/480x270/1026604_790b_2.jpg",
            description:
              "The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.",
            count_reviews: 37401,
            count_views: 173725,
            rating: "4.8",
            last_updated: "06/2022",
            during: "28h 9m",
            price: "$9.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 14,
            title: "Learn TypeScript (Ditch JavaScript)",
            course_url: "https://www.udemy.com/course/understanding-typescript/",
            img_url: "https://img-c.udemycdn.com/course/480x270/947098_02ec_2.jpg",
            description:
              "Boost your JavaScript projects with TypeScript: Learn all about core types, generics, TypeScript + React or Node & more!",
            count_reviews: 34123,
            count_views: 164736,
            rating: "4.7",
            last_updated: "06/2022",
            during: "14h 58m",
            price: "$9.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 15,
            title: "Typescript In Hindi",
            course_url: "https://www.udemy.com/course/typescript-in-hindi/",
            img_url: "https://img-c.udemycdn.com/course/480x270/4818922_2c22_3.jpg",
            description:
              "Learn the concepts of javascript and typescript in hindi",
            count_reviews: 0,
            count_views: 0,
            rating: "0.0",
            last_updated: "08/2022",
            during: "14h 58m",
            price: "$9.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 16,
            title: "HTML and CSS ( 2 in 1 ) course from zero for beginners 2022.",
            course_url: "https://www.udemy.com/course/html-and-css-2-in-1-course-from-zero-for-beginners-2022/",
            img_url: "https://img-c.udemycdn.com/course/480x270/4550210_d97b_3.jpg",
            description:
              "Learn HTML and CSS  from zero for beginners on this  (2 in 1) course 2022.",
            count_reviews: 20,
            count_views: 2009,
            rating: "4.2",
            last_updated: "08/2022",
            during: "4h 57m",
            price: "$9.99",
            site_id: sites[1].id,
            category_id: categories[0].id,
          },
          {
            id: 17,
            title:
              "TypeScript Tutorial for Beginners [2022]",
            course_url:
              "https://www.youtube.com/watch?v=d56mG7DezGs",
            img_url: "https://i.ytimg.com/vi/d56mG7DezGs/maxresdefault.jpg",
            video_url: "https://www.youtube.com/embed/d56mG7DezGs",
            description:
              "TypeScript Tutorial for Beginners. Learn TypeScript to write better large-scale JavaScript apps. This tutorial helps you get started quickly.- Get the comple...",
            count_like: "5.1K",
            count_comment: "562",
            count_views: 198417,
            last_updated: "May 23, 2022",
            during: "1:04:27",
            price: "free",
            site_id: sites[0].id,
            category_id: categories[0].id,
          },
          {
            id: 18,
            title:
              "Code Cùng Code Dạo - Tự Học JavaScript Cơ Bản trong 15 phút",
            course_url:
              "https://www.youtube.com/watch?v=ZIgDYEZl1VE",
            img_url: "https://i.ytimg.com/vi/ZIgDYEZl1VE/maxresdefault.jpg",
            video_url: "https://www.youtube.com/embed/ZIgDYEZl1VE",
            description:
              "Hôm nay, Code Dạo một lần làm clip lạ để xem các bạn có trầm trồ. (Cố ý để font nhỏ để các bạn xem trên máy tính và code theo nhe)Tụi mình sẽ cùng học JavaSc...",
            count_like: "10K",
            count_comment: "779",
            count_views: 387642,
            last_updated: "Jun 4, 2019",
            during: "15:02",
            price: "free",
            site_id: sites[0].id,
            category_id: categories[0].id,
          }
        ]
      }
    );
    const courses = await prismaClient.course.findMany();
    if (!courses || courses.length === 0) {
      throw new Error("course table does not data yet");
    }

    await prismaClient.author.createMany(
      {
        data: [
          {
            id: 1,
            name: "Academind",
            url: "https://www.youtube.com/c/Academind",
            subscribe: "817K",
          },
          {
            id: 2,
            name: "Jonas Schmedtmann",
            url: "https://www.udemy.com/user/jonasschmedtmann/",
            subscribe: "1461297",
          },
          {
            id: 3,
            name: "Tech Learning Network",
            url: "https://www.udemy.com/user/marklassoff/",
            subscribe: "310690",
          },
          {
            id: 4,
            name: "Dr. Angela Yu",
            url: "https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/",
            subscribe: "1585531",
          },
          {
            id: 5,
            name: "Edwin Diaz",
            url: "https://www.udemy.com/user/edwin166/",
            subscribe: "827403",
          },
          {
            id: 6,
            name: "Anthony Alicea",
            url: "https://www.udemy.com/user/anthonypalicea/",
            subscribe: "316528",
          },
          {
            id: 7,
            name: "Rob Percival",
            url: "https://www.udemy.com/user/robpercival/",
            subscribe: "2235483",
          },
          {
            id: 8,
            name: "Jordan Hudgens",
            url: "https://www.udemy.com/user/jordanhudgens/",
            subscribe: "86304",
          },
          {
            id: 9,
            name: "David Joseph Katz",
            url: "https://www.udemy.com/user/54cd8dd54e49b/",
            subscribe: "284810",
          },
          {
            id: 10,
            name: "Muslim Helalee",
            url: "https://www.udemy.com/user/muslim-helalee-2/",
            subscribe: "7160",
          },
          {
            id: 11,
            name: "Jose Portilla",
            url: "https://www.udemy.com/user/joseportilla/",
            subscribe: "2995964",
          },
          {
            id: 12,
            name: "Maximilian Schwarzmüller",
            url: "https://www.udemy.com/user/maximilian-schwarzmuller/",
            subscribe: "2116964",
          },
          {
            id: 13,
            name: "Neeraj Dana",
            url: "https://www.udemy.com/user/neeraj-dana-2/",
            subscribe: "0",
          },
          {
            id: 14,
            name: "Zaid Smadi",
            url: "https://www.udemy.com/user/zaid-858/",
            subscribe: "2009",
          },
          {
            id: 15,
            name: "Programming with Mosh",
            url: "https://www.youtube.com/c/programmingwithmosh",
            subscribe: "2.72M",
          },
          {
            id: 16,
            name: "Phạm Huy Hoàng",
            url: "https://www.youtube.com/c/t%C3%B4i%C4%91icoded%E1%BA%A1oblog",
            subscribe: "277k",
          },
        ]
      }
    );
    const authors = await prismaClient.author.findMany();
    if (!authors || authors.length === 0) {
      throw new Error("authors table does not data yet");
    }

    const topicCourseCreated = await prismaClient.topicCourse.createMany(
      {
        data: [
          {
            topic_id: 1,
            course_id: 1,
          },
          {
            topic_id: 2,
            course_id: 2,
          },
          {
            topic_id: 2,
            course_id: 3,
          },
          {
            topic_id: 3,
            course_id: 3,
          },
          {
            topic_id: 4,
            course_id: 3,
          },
          {
            topic_id: 5,
            course_id: 4,
          },
          {
            topic_id: 2,
            course_id: 5,
          },
          {
            topic_id: 6,
            course_id: 6,
          },
          {
            topic_id: 6,
            course_id: 7,
          },
          {
            topic_id: 1,
            course_id: 8,
          },
          {
            topic_id: 7,
            course_id: 8,
          },
          {
            topic_id: 8,
            course_id: 8,
          },
          {
            topic_id: 9,
            course_id: 8,
          },
          {
            topic_id: 1,
            course_id: 9,
          },
          {
            topic_id: 2,
            course_id: 9,
          },
          {
            topic_id: 4,
            course_id: 10,
          },
          {
            topic_id: 2,
            course_id: 11,
          },
          {
            topic_id: 5,
            course_id: 12,
          },
          {
            topic_id: 10,
            course_id: 12,
          },
          {
            topic_id: 4,
            course_id: 13,
          },
          {
            topic_id: 7,
            course_id: 14,
          },
          {
            topic_id: 7,
            course_id: 15,
          },
          {
            topic_id: 3,
            course_id: 16,
          },
          {
            topic_id: 4,
            course_id: 16,
          },
          {
            topic_id: 7,
            course_id: 17,
          },
          {
            topic_id: 7,
            course_id: 18,
          },
        ]
      }
    );
    if (!topicCourseCreated) {
      throw new Error("Error while create data for topicCourse");
    }

    const authorCourseCreated = await prismaClient.authorCourse.createMany(
      {
        data: [
          {
            course_id: 1,
            author_id: 1,
          },
          {
            course_id: 2,
            author_id: 2,
          },
          {
            course_id: 3,
            author_id: 3,
          },
          {
            course_id: 4,
            author_id: 4,
          },
          {
            course_id: 5,
            author_id: 5,
          },
          {
            course_id: 6,
            author_id: 6,
          },
          {
            course_id: 7,
            author_id: 7,
          },
          {
            course_id: 8,
            author_id: 8,
          },
          {
            course_id: 9,
            author_id: 9,
          },
          {
            course_id: 10,
            author_id: 10,
          },
          {
            course_id: 11,
            author_id: 6,
          },
          {
            course_id: 12,
            author_id: 11,
          },
          {
            course_id: 13,
            author_id: 2,
          },
          {
            course_id: 14,
            author_id: 12,
          },
          {
            course_id: 15,
            author_id: 13,
          },
          {
            course_id: 16,
            author_id: 14,
          },
          {
            course_id: 17,
            author_id: 15,
          },
          {
            course_id: 18,
            author_id: 16,
          },
        ]
      }
    );
    if (!authorCourseCreated) {
      throw new Error("Error while create data for topicCourse");
    }
  });
}

mainSeed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
