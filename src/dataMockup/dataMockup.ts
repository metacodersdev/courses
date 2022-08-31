import { Course } from "./DataMockupInterface";

export const dataMockup = (): Course[] => {
  return [
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
      count_views: 1101601,
      last_updated: "May 5, 2021",
      total_time: "3:51:55",
      price: "free",
      topics: [
        {
          id: 1,
          topic_name: "react",
        },
      ],
      site: {
        id: 1,
        site_name: "youtube",
        url: "https://www.youtube.com/",
      },
      authors: [
        {
          id: 1,
          name: "Academind",
          url: "https://www.youtube.com/c/Academind",
          subscribe: "817K",
        },
      ],
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
      rating: 4.8,
      last_updated: "6/2022",
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
        url: "https://www.udemy.com/",
      },
      authors: [
        {
          id: 2,
          name: "Jonas Schmedtmann",
          url: "https://www.udemy.com/user/jonasschmedtmann/",
          subscribe: "1461297",
        },
      ],
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
      rating: 4.4,
      last_updated: "11/2020",
      total_time: "45:30:00",
      price: "$9.99",
      topics: [
        {
          id: 2,
          topic_name: "javascript",
        },
        {
          id: 3,
          topic_name: "html",
        },
        {
          id: 4,
          topic_name: "css",
        },
      ],
      site: {
        id: 2,
        site_name: "udemy",
        url: "https://www.udemy.com/",
      },
      authors: [
        {
          id: 3,
          name: "Tech Learning Network",
          url: "https://www.udemy.com/user/marklassoff/",
          subscribe: 310690,
        },
      ],
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
      rating: 4.7,
      last_updated: "12/2021",
      total_time: "60:00:00",
      price: "$9.99",
      topics: [
        {
          id: 5,
          topic_name: "python",
        },
      ],
      site: {
        id: 2,
        site_name: "udemy",
        url: "https://www.udemy.com/",
      },
      authors: [
        {
          id: 4,
          name: "Dr. Angela Yu",
          url: "https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/",
          subscribe: 1585531,
        },
      ],
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
      rating: 4.3,
      last_updated: "01/2022",
      total_time: "04:00:00",
      price: "$13.99",
      topics: [
        {
          id: 2,
          topic_name: "javascript",
        },
      ],
      site: {
        id: 2,
        site_name: "udemy",
        url: "https://www.udemy.com/",
      },
      authors: [
        {
          id: 5,
          name: "Edwin Diaz",
          url: "https://www.udemy.com/user/edwin166/",
          subscribe: 827403,
        },
      ],
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
      rating: 4.5,
      last_updated: "09/2020",
      total_time: "13:00:00",
      price: "$9.99",
      topics: [
        {
          id: 6,
          topic_name: "nodejs",
        },
      ],
      site: {
        id: 2,
        site_name: "udemy",
        url: "https://www.udemy.com/",
      },
      authors: [
        {
          id: 6,
          name: "Anthony Alicea",
          url: "https://www.udemy.com/user/anthonypalicea/",
          subscribe: 316528,
        },
      ],
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
      rating: 4.6,
      last_updated: "03/2021",
      total_time: "35:00:00",
      price: "$9.99",
      topics: [
        {
          id: 6,
          topic_name: "nodejs",
        },
      ],
      site: {
        id: 2,
        site_name: "udemy",
        url: "https://www.udemy.com/",
      },
      authors: [
        {
          id: 7,
          name: "Rob Percival",
          url: "https://www.udemy.com/user/robpercival/",
          subscribe: 2235483,
        },
      ],
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
      rating: 4.3,
      last_updated: "04/2021",
      total_time: "08:00:00",
      price: "$9.99",
      topics: [
        {
          id: 1,
          topic_name: "react",
        },
        {
          id: 7,
          topic_name: "typescript",
        },
        {
          id: 8,
          topic_name: "vue",
        },
        {
          id: 9,
          topic_name: "angular",
        },
      ],
      site: {
        id: 2,
        site_name: "udemy",
        url: "https://www.udemy.com/",
      },
      authors: [
        {
          id: 8,
          name: "Jordan Hudgens",
          url: "https://www.udemy.com/user/jordanhudgens/",
          subscribe: 86304,
        },
      ],
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
      rating: 4.4,
      last_updated: "07/2017",
      total_time: "05:00:00",
      price: "$9.99",
      topics: [
        {
          id: 1,
          topic_name: "react",
        },
        {
          id: 2,
          topic_name: "javascript",
        },
      ],
      site: {
        id: 2,
        site_name: "udemy",
        url: "https://www.udemy.com/",
      },
      authors: [
        {
          id: 9,
          name: "David Joseph Katz",
          url: "https://www.udemy.com/user/54cd8dd54e49b/",
          subscribe: 284810,
        },
      ],
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
      rating: 4.8,
      last_updated: "08/2022",
      total_time: "49h 26m",
      price: "$9.99",
      topics: [
        {
          id: 4,
          topic_name: "css",
        },
      ],
      site: {
        id: 2,
        site_name: "udemy",
        url: "https://www.udemy.com/",
      },
      authors: [
        {
          id: 10,
          name: "Muslim Helalee",
          url: "https://www.udemy.com/user/muslim-helalee-2/",
          subscribe: 7160,
        },
      ],
    },
  ];
};
