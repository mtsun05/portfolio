import { FaGitAlt, FaNode, FaReact, FaDocker, FaAws } from "react-icons/fa";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import type { IconType } from "react-icons/lib";

export const icons: {
  icon: IconType;
  color: string;
  label: string;
  desc: string;
}[] = [
  {
    icon: FaReact,
    color: "#30eeff",
    label: "React",
    desc: "Frontend & UI",
  },
  {
    icon: SiTypescript,
    color: "#007acc",
    label: "TypeScript",
    desc: "Type-safe web dev",
  },
  {
    icon: SiExpress,
    color: "#ffe600",
    label: "Express.js",
    desc: "APIs & backend logic",
  },
  {
    icon: FaNode,
    color: "#11801a",
    label: "Node.js",
    desc: "Server-side JS",
  },
  {
    icon: RiTailwindCssFill,
    color: "#06b6d4",
    label: "TailwindCSS",
    desc: "Styling",
  },
  {
    icon: FaDocker,
    color: "#22a4f5",
    label: "Docker",
    desc: "Containerization & deployment",
  },
  {
    icon: SiMongodb,
    color: "#08522c",
    label: "MongoDB",
    desc: "Database",
  },
  {
    icon: FaAws,
    color: "#ff9900",
    label: "AWS",
    desc: "Deployment & storage",
  },
  {
    icon: FaGitAlt,
    color: "#F1502F",
    label: "Git",
    desc: "Version control",
  },
  {
    icon: IoLogoGithub,
    color: "",
    label: "Github",
    desc: "Collaboration",
  },
];
