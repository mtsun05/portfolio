import "./App.css";
import ProjectCard from "./components/ProjectCard";
import ExpCard from "./components/ExpCard";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills.tsx";
import About from "./components/About.tsx";

import { useRef } from "react";
import { useIsVisible } from "./util/visibilityDetector";

import IEMlogo from "./assets/iem-logo-removebg-preview.png";
import illini from "./assets/illini-logo.png";

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

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mx-auto mb-10 bg-radial-[at_50%_10%] from-10% dark:from-[#202020] dark:to-black from-white to-neutral-100 no-scrollbar">
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
          <Skills />
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
        <About />
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
