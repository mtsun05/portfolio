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
    <div className="banner-wrapper bg-[#f3f4f6] dark:bg-[#0d0d14] rounded-xl flex max-w-screen lg:w-1/2 mx-auto z-1 border-l border-r border-black/20 transition-color duration-300">
      <div className="wrapper">
        <div className="icons">
          {icons.map(({ icon, label, color }) => (
            <Card icon={icon} color={color}>
              {label}
            </Card>
          ))}
        </div>
        <div className="icons">
          {icons.map(({ icon, label, color }) => (
            <Card icon={icon} color={color}>
              {label}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
