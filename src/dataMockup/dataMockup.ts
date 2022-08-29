import { Course } from "./DataMockupInterface";

export const dataMockup: Course[] = [
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
    rating: 19633,
    views: 1101601,
    last_updated: "May 5, 2021",
    subscribe: 816973,
    total_time: "3:51:55",
    topics: [
      {
        id: 1,
        topic_name: "react",
      },
    ],
    site: {
      id: 1,
      site_name: "youtube",
    },
  },
  {
    id: 2,
    title: "Learn Modern Javascript (Build and Test Apps) - Full Course",
    course_url: "https://www.udemy.com/course/the-complete-javascript-course/",
    img_url: "https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg",
    description:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    rating: 148566,
    views: 668083,
    score: 4.8,
    last_updated: "6/2022",
    subscribe: 1459984,
    total_time: "69:00:00",
    price: "$9.99",
    topics: [
      {
        id: 2,
        topic_name: "javascript",
      },
    ],
    site: {
      id: 2,
      site_name: "udemy",
    },
  },
];
