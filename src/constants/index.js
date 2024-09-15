import {
  threedicon,
  cloud,
  pcbuilder,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  jerseyflag,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "3D Enthusiast",
    icon: threedicon,
  },
  {
    title: "Cloud Computing",
    icon: cloud,
  },
  {
    title: "Love for Innovation",
    icon: pcbuilder,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Moved to Jersey",
    company_name: "Everything is different",
    icon: jerseyflag,
    iconBg: "#383E56",
    date: "Aug 2016 - Sep 2018",
    points: [
      "New language, new teachers, new friends, new everything. Despite this, I've adapted fairly easily despite the new challenges. ",
      "During this time is where I learned a lot about myself and what I would like as a career.",
      "Finished my GCSEs and moved into Highlands the next year to study IT with a focus on game dev`development.",
    ],
  },
  {
    title: "Highlands College",
    company_name: "A path in the right direction",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2018 - Jul 2024",
    points: [
      "2018: Started by doing the level 2 IT course",
      "2019 - 2021: In the second year I did a game development course which taught me a lot about problem solving, teamwork and design/creativity.",
      "2021 - 2024: I continued my education by completing a degree in IT which finished with me getting a First Class Honours in Science of Digital Technologies.",
      "During these 6 years I've also been working during weekends in a Chinese Restaurant.",
    ],
  },
  {
    title: "Side projects",
    company_name: "Hobbies/passion projects",
    icon: shopify,
    iconBg: "#383E56",
    date: "2018 - Present",
    points: [
      "Alongside work and school, I've been learning 3D tools such as Blender and ThreeJS.",
      "Dabbled a bit into programming using C#, HTML/CSS and more recently React.",
      "Built my own personal PC from individual parts which was a big accomplishment for me.",
    ],
  },
  {
    title: "What's next",
    company_name: "The future",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Present - ♾️",
    points: [
      "Not really sure what's to come, I love working with anything related to technology/computers. I love innovation and new ideas/ways to work. We'll see what happens. ",
    ],
  },
];


const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
