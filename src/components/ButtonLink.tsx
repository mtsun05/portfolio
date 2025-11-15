import React from "react";
interface ButtonLinkProps {
  children: React.ReactNode;
  path?: string;
  disabled?: boolean;
}

const ButtonLink = ({ children, path, disabled }: ButtonLinkProps) => {
  return !disabled ? (
    <a
      className="group px-5 py-2 mt-4 mr-2 text-sm rounded-full text-white bg-black hover:shadow-lg shadow-black/50 transition-all duration-400 text-neutral-700 cursor-pointer w-fit h-fit relative hover:pl-5 hover:pr-9 dark:bg-white dark:text-black"
      target="_blank"
      href={path}
    >
      <span className="relative transition duration-300 transform group-hover:-translate-x-3">
        {children}
      </span>
      <span className="absolute right-4 top-1/2 -translate-y-1/2 transition duration-500 scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 origin-left">
        →
      </span>
    </a>
  ) : (
    <a className="group px-5 py-2 mt-4 mr-2 text-sm rounded-full text-white bg-neutral-700 text-neutral-400 cursor-default w-fit h-fit relative dark:bg-neutral-500 dark:text-black transition-all duration-400">
      <span className="relative transition duration-300 transform group-hover:-translate-x-3">
        {children}
      </span>
    </a>
  );
};

export default ButtonLink;
