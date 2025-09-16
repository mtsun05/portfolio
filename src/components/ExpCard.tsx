import React from "react";

interface ExpCardProps {
  label: string;
  children: React.ReactNode;
  imgLink?: string;
}

const ExpCard = ({ children, label, imgLink }: ExpCardProps) => {
  return (
    <div className="group w-full flex flex-col border border-gray-400 rounded-lg bg-white p-5 my-2 text-black shadow-md hover:shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-101 hover:-translate-y-1 bg-gray-100 dark:bg-zinc-900 text-black dark:text-white">
      <div className="flex flex-row items-center mb-3">
        <span className="text-xl font-bold">{label}</span>
        {imgLink && <img className="ml-2 size-[25px]" src={imgLink} alt="" />}
      </div>
      <span>{children}</span>
    </div>
  );
};

export default ExpCard;
