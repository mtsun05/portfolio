import type { IconType } from "react-icons/lib";
import Card from "./Card";

interface BannerProps {
  icons: {
    icon: IconType;
    label: string;
    color: string;
  }[];
}

const Banner = ({ icons }: BannerProps) => {
  return (
    <div className="banner-wrapper rounded-xl w-full max-w-[90vw] flex mx-auto z-1 transition-color duration-300 relative overflow-hidden">
      <div className="absolute bg-linear-to-r from-[#fafafa] to-white/0 dark:from-[#0f0f0f] dark:to-black/0 h-full w-[200px] z-10"></div>
      <div className="wrapper flex flex-row items-center">
        <div className="icons">
          {icons.map(({ icon }) => (
            <Card icon={icon}></Card>
          ))}
        </div>
        <div className="icons">
          {icons.map(({ icon }) => (
            <Card icon={icon}></Card>
          ))}
        </div>
      </div>
      <div className="absolute right-0 bg-linear-to-l from-[#fafafa] to-white/0 dark:from-[#0f0f0f] dark:to-black/0 h-full w-[200px] z-10"></div>
    </div>
  );
};

export default Banner;
