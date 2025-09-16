import IconLink from "./IconLink";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import LightDarkToggle from "./LightDarkToggle";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center bg-white/50 backdrop-blur-sm text-3xl p-9 fixed left-0 right-0 top-0 border-b border-black dark:border-gray-100 z-50 text-black dark:bg-zinc-900 dark:text-white">
      <div className="flex flex-row">
        <div className="group flex flex-col mx-2 w-fit">
          <a className="text-[20px] mb-0 transition duration-300" href="#">
            home
          </a>
          <span className="relative dark:bg-white -top-0.5 bg-black h-[1px] transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"></span>
        </div>
        <div className="group flex flex-col mx-2 w-fit">
          <a
            className="text-[20px] mb-0 transition duration-300"
            href="#experience"
          >
            experience
          </a>
          <span className="relative dark:bg-white -top-0.5 bg-black h-[1px] transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"></span>
        </div>
        <div className="group flex flex-col mx-2 w-fit">
          <a
            className="text-[20px] mb-0 transition duration-300"
            href="#projects"
          >
            projects
          </a>
          <span className="relative dark:bg-white -top-0.5 bg-black h-[1px] transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"></span>
        </div>
        <div className="group flex flex-col mx-2 w-fit">
          <a className="text-[20px] mb-0 transition duration-300" href="#about">
            about
          </a>
          <span className="relative dark:bg-white -top-0.5 bg-black h-[1px] transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"></span>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <LightDarkToggle />
        <IconLink
          icon={FaLinkedin}
          color="#0A66C2"
          path="https://linkedin.com/in/michael-t-sun"
        />
        <IconLink icon={FaGithub} color="" path="https://github.com/mtsun05" />
      </div>
    </nav>
  );
};

export default Navbar;
