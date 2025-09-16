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
    <div className="banner-wrapper rounded-xl flex w-full lg:w-1/4 mx-auto z-1 border-l border-r border-black/20">
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
