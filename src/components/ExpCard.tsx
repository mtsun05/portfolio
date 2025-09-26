import React from "react";

interface ExpCardProps {
  label: string;
  children: React.ReactNode;
  imgLink?: string;
}

const ExpCard = ({ children, label, imgLink }: ExpCardProps) => {
  return (
    <div className="group w-full flex flex-col border border-gray-400 rounded-lg bg-white p-5 my-2 text-black shadow-md hover:shadow-lg shadow-black/30 hover:scale-101 hover:-translate-y-1 bg-[#f3f4f6a2] dark:bg-[#0d0d14] text-black dark:text-white transition-all duration-300">
      <div className="flex flex-row items-center mb-3 transition-all duration-300">
        <span className="text-xl font-bold">{label}</span>
        {imgLink && <img className="ml-2 size-[25px]" src={imgLink} alt="" />}
      </div>
      <span>{children}</span>
    </div>
  );
};

export default ExpCard;
