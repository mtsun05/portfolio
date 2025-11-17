import IconLink from "./IconLink";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import LightDarkToggle from "./LightDarkToggle";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center text-3xl p-9 fixed left-0 right-0 top-0 dark:border-[#f3f4f66f] z-50 text-black dark:text-white drop-shadow-xl drop-shadow-black/10 transition-all duration-300">
      <div className="flex flex-row">
        <div className="group flex flex-col mx-2 w-fit">
          <a
            className="bg-neutral-300/70 dark:bg-neutral-700/70 italic rounded-full dark:hover:bg-neutral-700 hover:bg-neutral-300 hover:ring-2 ring-neutral-500/30 dark:ring-neutral-200/50 origin-center px-3 py-1 text-[20px] mb-0 transition-all duration-300"
            href="#"
          >
            home
          </a>
        </div>
        <div className="group flex flex-col mx-2 w-fit">
          <a
            className="bg-neutral-300/70 dark:bg-neutral-700/70 italic rounded-full dark:hover:bg-neutral-700 hover:bg-neutral-300 hover:ring-2 ring-neutral-500/30 dark:ring-neutral-200/50 origin-center px-3 py-1 text-[20px] mb-0 transition-all duration-300"
            href="#experience"
          >
            experience
          </a>
        </div>
        <div className="group flex flex-col mx-2 w-fit">
          <a
            className="bg-neutral-300/70 dark:bg-neutral-700/70 italic rounded-full dark:hover:bg-neutral-700 hover:bg-neutral-300 hover:ring-2 ring-neutral-500/30 dark:ring-neutral-200/50 origin-center px-3 py-1 text-[20px] mb-0 transition-all duration-300"
            href="#projects"
          >
            projects
          </a>
        </div>
        <div className="group flex flex-col mx-2 w-fit">
          <a
            className="bg-neutral-300/70 dark:bg-neutral-700/70 italic rounded-full dark:hover:bg-neutral-700 hover:bg-neutral-300 hover:ring-2 ring-neutral-500/30 dark:ring-neutral-200/50 origin-center px-3 py-1 text-[20px] mb-0 transition-all duration-300"
            href="#about"
          >
            about
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <div className="pr-3 border-r items-center flex">
          <LightDarkToggle />
        </div>
        <div className="flex ml-3">
          <IconLink
            icon={FaLinkedin}
            color="#0A66C2"
            path="https://linkedin.com/in/michael-t-sun"
          />
          <IconLink
            icon={FaGithub}
            color=""
            path="https://github.com/mtsun05"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
