import {
  mobile,
  backend,
  creator,
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
  trustnet,
  sdcwebsite,
  beatbot,
  terminal,
  sdc,
  discord,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI agent Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML Enthusiast",
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
    title: "Full Stack Developer",
    company_name: "SDC, Manipal University Jaipur",
    icon: sdc,
    iconBg: "white",
    date: "May 2024 - Present",
    points: [
      "Improved the SDC website with front-end and back-end work using Next.js and MongoDB.",
      "Designed and developed a “Join SDC” application page to streamline student role applications with secure data storage.",
      "Collaborated with DevOps to containerize the app using Docker and improve deployment workflows.",
      "Worked closely in a team environment using Git, participating in discussions and code reviews for seamless integration.",
    ],
  },
  {
    title: "Discord Bot Developer",
    company_name: "Freelance",
    icon: discord,
    iconBg: "white",
    date: "Dec 2022 - Feb 2024",
    points: [
      "Developed and maintained custom Discord bots to automate server tasks.",
      "Integrated APIs and created interactive bot commands.",
      "Enhanced user experience with real-time features and moderation tools.",
      "Managed deployments and updates independently.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TrustNet'26",
    description:
      "Official website for the International Conference on Trusted Network and Intelligent Systems organized by MUJ.",
    tags: [
      {
        name: "next.js",
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
    image: trustnet,
    source_code_link: "https://trustnetcon.in/",
  },
  {
    name: "SDC Website",
    description:
      "Developed the official SDC MUJ website to streamline information access, showcase projects, and enhance community collaboration.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: sdcwebsite,
    source_code_link: "https://sdcmuj.com",
  },
  {
    name: "Terminal Portfolio",
    description:
      "A command-line inspired portfolio where users can browse my projects and profile through simple typed commands.",
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
    image: terminal,
    source_code_link: "https://portfolio.gayathrii.dev/",
  },
  {
    name: "BeatBot",
    description:
      "A simple Discord bot that fetches YouTube links based on user search queries using !yt <query>, returning the top result or notifying if none is found.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "spotifyAPI",
        color: "green-text-gradient",
      },
      {
        name: "discord.js",
        color: "pink-text-gradient",
      },
    ],
    image: beatbot,
    source_code_link: "https://github.com/InternetMadeCoder/beatbot",
  },
];

export { services, technologies, experiences, testimonials, projects };
