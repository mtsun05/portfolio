import { useTheme } from "../themeContext";

import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

const LightDarkToggle = () => {
  const { dark, toggleTheme } = useTheme();
  return (
    <button
      className={`cursor-pointer ${dark ? "text-white" : "text-black"}`}
      onClick={toggleTheme}
    >
      <div>{dark ? <IoMoonSharp /> : <IoSunnySharp />}</div>
    </button>
  );
};

export default LightDarkToggle;
