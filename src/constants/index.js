import {
  design,
  analysis,
  reader,
  web,
  javascript,
  typescript,
  html,
  css,
  bootstrap,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  vscode,
  iiitkota,
  neon,
  project,
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
    id: "projects",
    title: "Projects",
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
    title: "UX/UI Designer",
    icon: design,
  },
  {
    title: "Data Analysis Enthusiast",
    icon: analysis,
  },
  {
    title: "Bibliophile & Ailurophile ",
    icon: reader,
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
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "VSCode",
    icon: vscode,
  },
];

const experiences = [
  {
    title: "Junior UX/UI designer",
    company_name: "Official Web Team - IIIT KOTA",
    icon: iiitkota,
    iconBg: "#ffffff",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Worked closely with team's developers to ensure smooth design-to-code implementation.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Continuously learning and adapting to improve user experience and accessibility.",
    ],
  },
  {
    title: "Content Script Writer",
    company_name: "NEON Cinematics - IIIT Kota",
    icon: neon,
    iconBg: "#ffffff",
    date: "Sept. 2023 - July 2024",
    points: [
      "Crafted engaging and well-structured scripts for short films, festiv videos, and creative stories.",
      "Collaborating with teams to ensure that the scripts were seamlessly integrated with visual elements, enhancing the overall storytelling experience.",
      "Focused on enhancing creativity and storytelling impact through engaging narratives.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Projects",
    icon: project,
    iconBg: "#383E56",
    date: "Aug. 2023 - Present",
    points: [
      "Designed intuitive and visually appealing user interfaces while focusing on enhancing user experience through research and iterative improvements.",
      "Created interactive prototypes using Figma, refining designs based on usability testing and feedback from friends around.",
      "Independently developed the frontend using HTML, CSS, JavaScript, and React to bring designs to life.",
      "Explored various design principles, accessibility standards, and best practices to improve usability and functionality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Someone really dedicated to her work and brought next level creativity to the table.",
    name: "Harshit Jeph",
    designation: "Coordinator",
    company: "NEON Cinematics",
  },
];

const projects = [
  {
    name: "Library Website",
    description:
      "A simple library website that allows users to browse, search, and borrow books online. It features an interactive UI for searching, categorizing, and viewing book details, making it ideal for small-scale digital libraries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: "../library.png",
    //source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
