import "./App.css";
import ProjectCard from "./components/ProjectCard";
import ExpCard from "./components/ExpCard";
import { icons } from "./icons";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

import IEMlogo from "./assets/iem-logo-removebg-preview.png";
import illini from "./assets/illini-logo.png";
import portpic from "./assets/portfolio-pic.jpg";
import { useRef } from "react";
import { useIsVisible } from "./util/visibilityDetector";

import { FaHome } from "react-icons/fa";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import { LuPenTool } from "react-icons/lu";
import { FaSpotify } from "react-icons/fa";
import { FaVolleyball } from "react-icons/fa6";
import { TbArrowUpRight } from "react-icons/tb";

function App() {
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
          } transition-all duration-1000 flex flex-col text-center justify-center items-center lg:w-2/3 mx-10 text-black dark:text-white mt-50 mb-20`}
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
          } flex flex-col justify-center my-10 text-black dark:text-white transition-all duration-1000 lg:w-2/3 mx-10 mb-20`}
        >
          <span className="dark:text-white mb-5 text-black italic text-5xl">
            skills
          </span>
          <Banner icons={icons} />
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
            Leading the website redesign team in a complete overhaul of the club
            website using React and TailwindCSS. Collaborating with club leads
            to ensure consistent progress and accurate representation of the
            club. Notably, implemented a 3D showcase of the car and deployed on
            AWS.
          </ExpCard>
          <ExpCard label="CS124 Course Staff" imgLink={illini}>
            Held 1-on-1 tutoring sessions with a class of 1000+ students.
            Assisted students with programming basics in Java, teaching topics
            ranging from types and loops to encapsulation and inheritance.
            Provided guidance on an end-of-year project in Android Studio,
            covering web fundamentals like HTTP and callbacks.
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
            Link is a full stack social community platform built for
            centralizing events for clubs. User authentication was implemented
            with both JWTs and OAuth2.0's sign in with Google. Currently working
            on a team functionality, where users can specify team size and roles
            and Link automatically generates random teams.
          </ProjectCard>
          <ProjectCard
            label="Chat App"
            techs="Go, Next.js, TypeScript"
            githubURL="https://github.com/mtsun05/chat-app"
          >
            This chat application uses WebSockets and Go channels to enable
            low-latency communication between multiple users. Manages multiple
            concurrent connections using a custom connection pool struct.
            Looking into supporting multiple pools for a Discord/GroupMe kind of
            functionality.
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
              className="rounded-lg object-cover size-[2/3] lg:size-1/3 lg:mr-10 lg:mb-0 mb-10"
              src={portpic}
              alt=""
            />
            <div className="flex flex-col gap-3">
              <div className="flex flex-row justify-between gap-10">
                <FaHome className="size-[70px]" />
                <span className="text-xl text-neutral-500 dark:text-neutral-400">
                  I'm from Barrington, IL, a suburb 45 minutes away from
                  Chicago. I've lived in the Chicagoland area my whole life.
                </span>
              </div>
              <div className="flex flex-row justify-between gap-10">
                <HiOutlineSwitchHorizontal className="size-[70px]" />
                <span className="text-xl text-neutral-500 dark:text-neutral-400">
                  I entered UIUC as a Psychology major, but decided it wasn't
                  for me and pivoted to Computer Science.
                </span>
              </div>
              <div className="flex flex-row justify-between gap-10">
                <MdComputer className="size-[70px]" />
                <span className="text-xl text-neutral-500 dark:text-neutral-400">
                  I've learned everything I know about computer science and
                  software engineering in the last two years.
                </span>
              </div>
              <div className="flex flex-row justify-between gap-10">
                <LuPenTool className="size-[70px]" />
                <span className="text-xl text-neutral-500 dark:text-neutral-400">
                  I have a strong background in graphic design, utilizing
                  technologies like Adobe Illustrator and Figma.
                </span>
              </div>
              <div className="flex flex-row justify-between gap-10">
                <FaSpotify className="size-[70px]" />
                <span className="text-xl text-neutral-500 dark:text-neutral-400">
                  To name a few, my favorite artists include Nujabes, The
                  Strokes, MF DOOM, and other indie artists from various genres.
                </span>
              </div>
              <div className="flex flex-row justify-between gap-10">
                <FaVolleyball className="size-[70px]" />
                <span className="text-xl text-neutral-500 dark:text-neutral-400">
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
