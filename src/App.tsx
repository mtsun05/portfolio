import "./App.css";
import ProjectCard from "./components/ProjectCard";
import ExpCard from "./components/ExpCard";
import Navbar from "./components/Navbar";

import { useTheme } from "./themeContext";
import { useRef, useState } from "react";
import { useIsVisible } from "./util/visibilityDetector";

import IEMlogo from "./assets/iem-logo-removebg-preview.png";
import illini from "./assets/illini-logo.png";
import portpic from "./assets/portfolio-pic.jpg";

import { icons } from "./icons";
import { FaHome } from "react-icons/fa";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import { LuPenTool } from "react-icons/lu";
import { FaSpotify } from "react-icons/fa";
import { FaVolleyball } from "react-icons/fa6";
import { TbArrowUpRight } from "react-icons/tb";
import { IconContext } from "react-icons/lib";

function App() {
  const { dark } = useTheme();
  const [active, setActive] = useState<number>(-1);

  const homeRef = useRef<HTMLDivElement>(null);
  const homeVisible = useIsVisible(homeRef, 0.3);

  const skillsRef = useRef<HTMLDivElement>(null);
  const skillsVisible = useIsVisible(skillsRef, 0.3);

  const projectsRef = useRef<HTMLDivElement>(null);
  const projectsVisible = useIsVisible(projectsRef, 0.3);

  const experienceRef = useRef<HTMLDivElement>(null);
  const experienceVisible = useIsVisible(experienceRef, 0.3);

  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutVisible = useIsVisible(aboutRef, 0.3);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mx-auto mb-10 bg-radial-[at_50%_10%] from-10% dark:from-[#202020] dark:to-black from-white to-neutral-100">
        <div
          ref={homeRef}
          id="home"
          className={`${
            homeVisible
              ? "opacity-100 blur-none translate-y-0"
              : "opacity-0 blur-lg translate-y-30"
          } transition-all duration-1000 flex flex-col text-center justify-center items-center lg:w-2/3 mx-10 text-black dark:text-white mt-70 mb-20`}
        >
          <span
            id="home"
            className="flex flex-row font-[700] text-7xl md:text-9xl z-10"
          >
            Michael Sun
          </span>
          <span className="fade-in ease-in text-center md:text-3xl text-black dark:text-gray-200 mb-3">
            I'm a junior at the University of Illinois Urbana Champaign. <br />{" "}
            My interests lie in large-scale full stack and frontend development.{" "}
            <br />
          </span>
          <div className="flex flex-col items-center md:flex-row md:gap-5">
            <a
              href=""
              className="group flex flex-row items-center text-neutral-400 lg:text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>mtsun05@gmail.com</span>
              <TbArrowUpRight className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
            <a
              href="https://github.com/mtsun05"
              className="group flex flex-row items-center text-neutral-400 lg:text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>github.com/mtsun05</span>
              <TbArrowUpRight className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/michael-t-sun"
              className="group flex flex-row items-center text-neutral-400 lg:text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>linkedin.com/in/michael-t-sun</span>
              <TbArrowUpRight className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
        <div
          ref={skillsRef}
          className={`${
            skillsVisible
              ? "opacity-100 blur-none translate-y-0"
              : "opacity-0 blur-lg translate-y-30"
          } flex flex-col justify-center my-10 transition-all duration-1000 lg:w-2/3 mx-10 mb-20`}
        >
          <div
            ref={skillsRef}
            className="flex flex-row flex-wrap gap-3 justify-center"
          >
            {icons.map(({ icon: Icon, color, label, desc }, index) => {
              return (
                <div
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(-1)}
                  className="flex flex-row bg-[#e6e6e6] dark:bg-[#121212] px-4 py-3 gap-5 w-[200px] rounded-lg items-center cursor-default transition-all duration-300"
                >
                  <IconContext.Provider
                    value={{
                      className: ``,
                    }}
                  >
                    <div className="flex flex-col size-[30px] justify-center items-center rounded-2xl transition-all duration-300 dark:text-white">
                      <Icon
                        color={
                          active == index ? color : dark ? "white" : "black"
                        }
                        className={"size-[70px] transition-all duration-300"}
                      />
                    </div>
                  </IconContext.Provider>
                  <div className="flex flex-col">
                    <span className="text-sm text-black dark:text-white">
                      {label}
                    </span>
                    <span className="text-wrap text-xs text-neutral-600 dark:text-neutral-400">
                      {desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          ref={experienceRef}
          id="experience"
          className={`${
            experienceVisible
              ? "opacity-100 blur-none translate-y-0"
              : "opacity-0 blur-lg translate-y-30"
          } flex flex-col lg:w-2/3 mx-10 mt-10 text-black dark:text-white transition-all duration-1000 mb-20`}
        >
          <span className="dark:text-white mb-5 text-black italic text-5xl">
            experience
          </span>
          <ExpCard label="Lead Frontend Developer" imgLink={IEMlogo}>
            Leading the website redesign team in a drastic improvement of the
            club website. Modernizing and improving UI, reorganizing information
            sections and making them more digestible, added a 3D showcase for
            the team car, and working on deploying with AWS S3.
          </ExpCard>
          <ExpCard label="CS124 Course Staff" imgLink={illini}>
            Taught beginner programmers in 1-on-1 sessions about core
            programming concepts in Java. Assisted students in an
            end-of-the-year Android project.
          </ExpCard>
        </div>
        <div
          ref={projectsRef}
          className={`${
            projectsVisible
              ? "opacity-100 blur-none translate-y-0"
              : "opacity-0 blur-lg translate-y-30"
          } flex flex-col lg:w-2/3 mx-10 mt-10 transition-all duration-1000 mb-20`}
        >
          <span
            id="projects"
            className="dark:text-white mb-5 text-black italic text-5xl"
          >
            projects
          </span>
          <ProjectCard
            label="Link"
            techs="React, Node.js, MongoDB, Express, Vercel, JWT, OAuth2.0"
            githubURL="https://github.com/mtsun05/link"
            websiteURL="https://link-sable-three.vercel.app"
          >
            Social community platform built for centralizing events for clubs.
            Implemented authentication with JWTs and OAuth2.0 (sign in with
            Google). Users can create and join communities, as well as start and
            register for events.
          </ProjectCard>
          <ProjectCard
            label="Chat App"
            techs="Go, Next.js, TypeScript"
            githubURL="https://github.com/mtsun05/chat-app"
          >
            Chat application that uses WebSockets and Go channels to enable
            low-latency communication between multiple users. Manages multiple
            concurrent connections using a custom connection pool struct.
          </ProjectCard>
        </div>
        <div
          ref={aboutRef}
          className={`${
            aboutVisible
              ? "opacity-100 blur-none translate-y-0"
              : "opacity-0 blur-lg translate-y-30"
          } flex flex-col lg:w-2/3 mx-10 mt-10 text-black dark:text-white transition-all duration-1000`}
        >
          <span
            id="about"
            className="dark:text-white mb-5 text-black italic text-5xl"
          >
            about
          </span>
          <div className="flex flex-col lg:flex-row items-center transition-all duration-1000">
            <img
              className="rounded-lg object-cover size-1/2 lg:mr-10 lg:mb-0 mb-10"
              src={portpic}
              alt=""
            />
            <div className="flex flex-col justify-between self-stretch gap-3">
              <div className="group flex flex-row justify-around items-center gap-10 bg-[#e6e6e6] dark:bg-neutral-700/50 px-5 py-3 rounded-2xl">
                <FaHome className="size-[70px]" />
                <span className=" dark:group-hover:text-neutral-300 group-hover:text-black text-neutral-500 dark:text-neutral-400 transition-all duration-500">
                  I'm from Barrington, IL, a suburb 45 minutes away from
                  Chicago. I've lived in around here my whole life.
                </span>
              </div>
              <div className="group flex flex-row justify-around items-center gap-10 bg-[#e6e6e6] dark:bg-neutral-700/50 px-5 py-3 rounded-2xl">
                <HiOutlineSwitchHorizontal className="size-[70px]" />
                <span className=" dark:group-hover:text-neutral-300 group-hover:text-black text-neutral-500 dark:text-neutral-400 transition-all duration-500">
                  I entered UIUC as a Psychology major, but decided it wasn't
                  for me and pivoted to Computer Science.
                </span>
              </div>
              <div className="group flex flex-row justify-around items-center gap-10 bg-[#e6e6e6] dark:bg-neutral-700/50 px-5 py-3 rounded-2xl">
                <MdComputer className="size-[70px]" />
                <span className=" dark:group-hover:text-neutral-300 group-hover:text-black text-neutral-500 dark:text-neutral-400 transition-all duration-500">
                  I've learned everything I know about computer science and
                  software engineering in the last two years.
                </span>
              </div>
              <div className="group flex flex-row justify-around items-center gap-10 bg-[#e6e6e6] dark:bg-neutral-700/50 px-5 py-3 rounded-2xl">
                <LuPenTool className="size-[70px]" />
                <span className=" dark:group-hover:text-neutral-300 group-hover:text-black text-neutral-500 dark:text-neutral-400 transition-all duration-500">
                  I have a strong background in graphic design, utilizing
                  technologies like Adobe Illustrator and Figma.
                </span>
              </div>
              <div className="group flex flex-row justify-around items-center gap-10 bg-[#e6e6e6] dark:bg-neutral-700/50 px-5 py-3 rounded-2xl">
                <FaSpotify className="size-[70px]" />
                <span className=" dark:group-hover:text-neutral-300 group-hover:text-black text-neutral-500 dark:text-neutral-400 transition-all duration-500">
                  My favorite artists are Nujabes and The Strokes, and I like
                  artists from various other genres.
                </span>
              </div>
              <div className="group flex flex-row justify-around items-center gap-10 bg-[#e6e6e6] dark:bg-neutral-700/50 px-5 py-3 rounded-2xl">
                <FaVolleyball className="size-[70px]" />
                <span className=" dark:group-hover:text-neutral-300 group-hover:text-black text-neutral-500 dark:text-neutral-400 transition-all duration-500">
                  I've been playing volleyball since high school. I mainly play
                  indoor but I'm down for any format. I enjoy many other sports
                  too!
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className="text-5xl mt-20 text-black dark:text-white transition-all duration-1000">
          Thank you for visiting!
        </span>
        <footer className="mb-10 mt-40 text-black dark:text-white transition-all duration-1000">
          Built by Michael Sun using React and TailwindCSS.
        </footer>
      </div>
    </>
  );
}

export default App;
