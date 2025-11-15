import React from "react";

import { IoLogoGithub } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

interface ExpCardProps {
  label: string;
  children: React.ReactNode;
  techs?: string;
  githubURL?: string;
  websiteURL?: string;
}

const ProjectCard = ({
  children,
  label,
  techs,
  githubURL,
  websiteURL,
}: ExpCardProps) => {
  return (
    <div className="flex flex-col bg-[#e6e6e6] dark:bg-[#010101] rounded-lg p-5 my-2 hover:ring-1 ring-neutral-600 cursor-default text-black dark:text-white transition-all duration-300">
      <div className="flex flex-row items-baseline mb-3 transition-all duration-300">
        <span className="text-xl font-bold">{label}</span>
        {techs && (
          <span className="justify-end text-sm mx-3 italic underline">
            {techs}
          </span>
        )}
      </div>
      <span className="text-neutral-500 dark:text-neutral-400">{children}</span>
      <div className="flex flex-row items-center gap-3 mt-3">
        {githubURL ? (
          <a href={githubURL} target="_blank">
            <IoLogoGithub className="size-[30px] dark:hover:text-neutral-300 hover:text-neutral-600 transition-all duration-300" />
          </a>
        ) : null}
        {websiteURL ? (
          <a href={websiteURL} target="_blank">
            <CiGlobe className="size-[30px] dark:hover:text-neutral-300 hover:text-neutral-600 transition-all duration-300" />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
