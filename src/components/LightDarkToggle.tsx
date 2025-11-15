import { useEffect, useState } from "react";

import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

const LightDarkToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    document.body.style.transition =
      "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)";

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDark(true);
      document.documentElement.classList.add("dark");
      document.body.style.backgroundImage = "radial-gradient(black, #ffffff)";
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundImage = "#f3f4f6";
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#0d0d14";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#f3f4f6";
      localStorage.setItem("theme", "light");
    }
  };

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
