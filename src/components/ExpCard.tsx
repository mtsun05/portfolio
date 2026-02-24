import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface ExpCardProps {
  title: string;
  company: string;
  children: React.ReactNode;
  link?: string;
  imgLink?: string;
}

const ExpCard = ({ children, title, company, link, imgLink }: ExpCardProps) => {
  return (
    <div className="flex flex-col bg-[#e6e6e6] dark:bg-[#151515] rounded-lg p-5 my-2 text-black hover:ring-1 ring-neutral-600 dark:text-white transition-all duration-300 cursor-default">
      <div className="flex flex-row items-center justify-between mb-3 transition-all duration-300">
        <div className="flex flex-row items-center">
          {imgLink && <img className="mr-4 size-10" src={imgLink} alt="" />}
          <div className="flex flex-col">
            <span className="text-xl font-bold">{title}</span>
            <span className="font-light text-neutral-400">{company}</span>
          </div>
        </div>
        {link && (
          <a className="group" href={link} target="_blank">
            <GoArrowUpRight className="size-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </a>
        )}
      </div>
      <span className="text-neutral-500 dark:text-neutral-400">{children}</span>
    </div>
  );
};

export default ExpCard;
