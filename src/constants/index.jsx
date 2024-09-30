import { Link } from 'react-router-dom';
import {
  threedicon,
  cloud,
  pcbuilder,
  web,
  questionmark,
  jerseyflag,
  highlands,
  blender,
  axesshowcase,
  oldwebsite,
  tripguide,
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
    icon: highlands,
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
    icon: blender,
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
    icon: questionmark,
    iconBg: "#E6DEDD",
    date: "Present - ♾️",
    points: [
      "Not really sure what's to come, I love working with anything related to technology/computers. I love innovation and new ideas/ways to work. We'll see what happens. ",
    ],
  },
];

const projects = [
  {
    name: "Jersey Heritage",
    description: (
      <>
        I've worked with Jersey Heritage for a few years during college to help them 3D scan some historical objects and what uses these may have.
        Some of the uses we found for them was displaying them on a web browser which is shown
        <a href="https://ericgoncalvesje.github.io/Jersey-Heritage-3DModels-Showcase/" target="_blank" className="text-white underline ml-1">here</a>
      </>
    ),
    tags: [
      {
        name: "3D scanning",
        color: "blue-text-gradient",
      },
      {
        name: "accessibility",
        color: "green-text-gradient",
      },
    ],
    image: axesshowcase,
    source_code_link: "https://github.com/EricGoncalvesJE/Jersey-Heritage-3DModels-Showcase",
  },
  {
    name: "My original portfolio",
    description: (
      <>
        This was essentially a summer project. I used to learn HTML, CSS and JS while showing off my work and skills, all in one page.
        I also used a bit as a playground to test cool new ideas. It taught me a lot about problem solving and to be creative.<span></span>
        <a href="https://ericgoncalvesje.github.io/mypersonalportfolio/" target="_blank" className="text-white underline ml-1">Check it out!</a>
      </>
    ),
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: oldwebsite,
    source_code_link: "https://github.com/EricGoncalvesJE/mypersonalportfolio",
  },
  {
    name: "This website",
    description: (
      <>
        This is basically a second version of my original version.
        The main difference is that it looks more modern and I'm using React, Tailwind, and ThreeJs to give users a more interactive experience.
        It's a work in progress and was based on
        <a href="https://www.youtube.com/watch?v=0fYi8SGA20k&t=2519s" target="_blank" className="text-white underline ml-1">this YouTube video.-</a>
      </>
    ),
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "Web Design",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/EricGoncalvesJE/ReactPortfolio",
  },
];

export { services, experiences, projects };
