import React from "react";
import ButtonLink from "./ButtonLink";

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
    <div className="flex flex-col border border-gray-400 rounded-lg bg-white p-5 my-2 text-black shadow-md hover:shadow-lg shadow-black/30 hover:scale-101 hover:-translate-y-1 bg-[#f3f4f6a2] dark:bg-[#0d0d14] text-black dark:text-white transition-all duration-300">
      <div className="flex flex-row items-baseline mb-3 transition-all duration-300">
        <span className="text-xl font-bold">{label}</span>
        {techs && (
          <span className="justify-end text-sm mx-3 italic underline">
            {techs}
          </span>
        )}
      </div>
      <span>{children}</span>
      <div className="flex flex-row">
        {githubURL ? (
          <ButtonLink path={githubURL}>Github</ButtonLink>
        ) : (
          <ButtonLink disabled>Github</ButtonLink>
        )}
        {websiteURL ? (
          <ButtonLink path={websiteURL}>Github</ButtonLink>
        ) : (
          <ButtonLink disabled>Website</ButtonLink>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
