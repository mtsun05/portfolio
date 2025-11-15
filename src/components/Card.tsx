import type { IconType } from "react-icons/lib";
import { IconContext } from "react-icons/lib";

interface CardProps {
  icon: IconType;
}

const Card = ({ icon: Icon }: CardProps) => {
  return (
    <IconContext.Provider
      value={{
        className: "text-black dark:text-white transition-all duration-300",
      }}
    >
      <div className="icon flex flex-col size-[100px] justify-center items-center rounded-2xl p-5 mx-3 my-2 transition-all duration-300 hover:-translate-y-2 dark:text-white">
        <Icon className="size-[70px] dark:text-white" />
      </div>
    </IconContext.Provider>
  );
};

export default Card;
