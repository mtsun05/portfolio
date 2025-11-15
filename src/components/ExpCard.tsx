import React from "react";

interface ExpCardProps {
  label: string;
  children: React.ReactNode;
  imgLink?: string;
}

const ExpCard = ({ children, label, imgLink }: ExpCardProps) => {
  return (
    <div className="group flex flex-col bg-[#e6e6e6] dark:bg-[#010101] rounded-lg p-5 my-2 text-black hover:ring-1 ring-neutral-600 dark:text-white transition-all duration-300 cursor-default">
      <div className="flex flex-row items-center mb-3 transition-all duration-300">
        <span className="text-xl font-bold">{label}</span>
        {imgLink && <img className="ml-2 size-[25px]" src={imgLink} alt="" />}
      </div>
      <span className="text-neutral-500 dark:text-neutral-400">{children}</span>
    </div>
  );
};

export default ExpCard;
