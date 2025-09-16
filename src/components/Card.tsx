import React from "react";
import type { IconType } from "react-icons/lib";
import { IconContext } from "react-icons/lib";

interface CardProps {
  children: React.ReactNode;
  icon: IconType;
  color: string;
}

const Card = ({ children, icon: Icon, color }: CardProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, className: "bg-white" }}>
      <div className="flex flex-col bg-white items-center border border-gray-400 rounded-lg p-5 mx-1 my-2 transition-transform duration-400 hover:-translate-y-2 shadow-md shadow-black/30 dark:bg-zinc-800 dark:text-white">
        <span className="text-black dark:text-white mb-2">{children}</span>
        <Icon className="size-[100px] dark:bg-zinc-800 dark:text-white" />
      </div>
    </IconContext.Provider>
  );
};

export default Card;
