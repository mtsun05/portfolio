import type { IconType } from "react-icons/lib";
import { IconContext } from "react-icons/lib";

interface IconLinkProps {
  icon: IconType;
  color: string;
  path: string;
}

const IconLink = ({ icon: Icon, color, path }: IconLinkProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}` }}>
      <a
        className="mx-1 transition duration-300 hover:-translate-y-1"
        href={path}
        target="_blank"
      >
        <Icon className="size-[30px]" />
      </a>
    </IconContext.Provider>
  );
};

export default IconLink;
