import IconLink from "./IconLink";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import LightDarkToggle from "./LightDarkToggle";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="flex flex-row fixed left-0 right-0 top-0 dark:border-[#f3f4f66f] z-50 text-black dark:text-white drop-shadow-xl drop-shadow-black/10 transition-all duration-300">
      <div className="hidden md:flex md:flex-row w-full justify-between items-center p-8 text-3xl">
        <div className="flex flex-row gap-3">
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
        <div className="flex flex-row justify-self-end">
          <div className="pr-3 border-r items-center flex">
            <LightDarkToggle />
          </div>
          <div className="flex ml-3">
            <IconLink
              icon={FaLinkedin}
              color=""
              path="https://linkedin.com/in/michael-t-sun"
            />
            <IconLink
              icon={FaGithub}
              color=""
              path="https://github.com/mtsun05"
            />
          </div>
        </div>
      </div>

      <div className="md:hidden flex m-0 flex-row w-full justify-end p-5">
        <div className="">
          {mobileMenuOpen ? (
            <FiX className="size-10" onClick={() => setMobileMenuOpen(false)} />
          ) : (
            <FiMenu
              className="size-10"
              onClick={() => setMobileMenuOpen(true)}
            />
          )}
        </div>

        <div
          className={`${mobileMenuOpen ? "max-h-250 opacity-100" : "max-h-0 opacity-0 invisible"} absolute w-screen bg-neutral-100 dark:bg-neutral-900 top-full left-0 right-0 flex flex-col items-center transition-all duration-300`}
        >
          <div className="flex flex-col w-full items-center p-4 gap-5">
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#"
              className="text-lg text-black dark:text-white rounded-full px-4 py-1 bg-neutral-300/70 dark:bg-neutral-700/70 hover:bg-neutral-700 hover:ring-2 ring-neutral-500/30 dark:ring-neutral-200/50 transition-all duration-300 cursor-pointer"
            >
              home
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#experience"
              className="text-lg text-black dark:text-white rounded-full px-4 py-1 bg-neutral-300/70 dark:bg-neutral-700/70 hover:bg-neutral-700 hover:ring-2 ring-neutral-500/30 dark:ring-neutral-200/50 transition-all duration-300 cursor-pointer"
            >
              experience
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#projects"
              className="text-lg text-black dark:text-white rounded-full px-4 py-1 bg-neutral-300/70 dark:bg-neutral-700/70 hover:bg-neutral-700 hover:ring-2 ring-neutral-500/30 dark:ring-neutral-200/50 transition-all duration-300 cursor-pointer"
            >
              projects
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#about"
              className="text-lg text-black dark:text-white rounded-full px-4 py-1 bg-neutral-300/70 dark:bg-neutral-700/70 hover:bg-neutral-700 hover:ring-2 ring-neutral-500/30 dark:ring-neutral-200/50 transition-all duration-300 cursor-pointer"
            >
              about
            </a>
          </div>
          <div className="flex flex-row p-4">
            <div className="pr-3 border-r items-center flex">
              <LightDarkToggle />
            </div>
            <div className="flex ml-3">
              <IconLink
                icon={FaLinkedin}
                color=""
                path="https://linkedin.com/in/michael-t-sun"
              />
              <IconLink
                icon={FaGithub}
                color=""
                path="https://github.com/mtsun05"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
