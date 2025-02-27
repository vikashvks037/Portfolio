import {mobile,backend,creator,Shop,web,javascript,html,css,reactjs,redux,tailwind,nodejs,mongodb,git,Mern,Frontend,Flutter,Android,Full,tripguide,threejs,} from "../assets";

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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "FullStack Developer",
    icon: mobile,
  },
  {
    title: "Android Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: creator,
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
];

const experiences = [
  {
    title: "Frontend Developer",
    // company_name: "",
    icon: Frontend,
    iconBg: "#383E56",
    date: "May 2024 - June 2024",
    points: [
      "Developing web page using React.js.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Android Developer",
    // company_name: "",
    icon: Android,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Nov 2024",
    points: [
      "Developing Android applications using xml and Java.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FullStack Developer",
    // company_name: "",
    icon: Mern,
    iconBg: "#383E56",
    date: "Dec 2024 - Feb 2025",
    points: [
      "Developing web applications using React.js , Node.js , Express.js and MongoDB.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Flutter Developer",
    // company_name: "Meta",
    icon: Flutter,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Present",
    points: [
      "Developing applications using dart.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


const project = [
  {
    name: "My Tribe",
    description:
      "Android Application that allows users to create community and work together on project.",
    tags: [
      {
        name: "xml",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Vansh-2005/My_Tribe",
  },
  {
    name: "EditMantra",
    description:
      "It is online coding patform that enables users to collaborative coding and also available coding questions and quiz to improve skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: Full,
    source_code_link: "https://editmantra-frontend.onrender.com",
  },
  {
    name: "Shopping Application",
    description:
      "It is an flutter using Shopping application that allows users Buy products and also add product on card.",
    tags: [
      {
        name: "xml",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: Shop,
    source_code_link: "https://github.com/vikashvks037",
  },
];

export { services, technologies, experiences, project };
