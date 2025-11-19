import type { IconType } from "react-icons/lib";
import { IconContext } from "react-icons/lib";

const Card = ({ icon: Icon }: { icon: IconType }) => {
  return (
    <IconContext.Provider
      value={{
        className:
          "text-neutral-500 dark:text-neutral-400 transition-all duration-300",
      }}
    >
      <div className="icon flex flex-col size-[100px] justify-center items-center rounded-2xl p-5 mx-3 my-2 transition-all duration-300 hover:-translate-y-2 dark:text-white">
        <Icon className="size-[70px] dark:text-white" />
      </div>
    </IconContext.Provider>
  );
};

export default Card;
