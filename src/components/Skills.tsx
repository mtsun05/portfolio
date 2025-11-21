import { IconContext } from "react-icons/lib";
import { icons } from "../icons";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../themeContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const { dark } = useTheme();
  const [active, setActive] = useState<number>(-1);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapper.current) {
      gsap.set(".skill-card", {
        opacity: 0,
        y: 30,
      });

      let tl = gsap.timeline();

      tl.to(
        ".skill-card",
        {
          opacity: 1,
          y: 0,
          stagger: { amount: 0.5 },
          ease: "back.in",
          scrollTrigger: {
            trigger: wrapper.current,
            start: "top bottom",
            once: true,
            toggleActions: "play none none none",
          },
        },
        0.3
      );
    }
  }, []);

  return (
    <div ref={wrapper} className="flex flex-row flex-wrap gap-3 justify-center">
      {icons.map(({ icon: Icon, color, label, desc }, index) => {
        return (
          <div
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(-1)}
            className="skill-card flex flex-row bg-[#e6e6e6] dark:bg-[#121212] px-4 py-3 gap-5 w-[200px] rounded-lg items-center cursor-default transition-all duration-300"
          >
            <IconContext.Provider
              value={{
                className: ``,
              }}
            >
              <div className="flex flex-col size-[30px] justify-center items-center rounded-2xl transition-all duration-300 dark:text-white">
                <Icon
                  color={active == index ? color : dark ? "white" : "black"}
                  className={"size-[30px] transition-all duration-300"}
                />
              </div>
            </IconContext.Provider>
            <div className="flex flex-col">
              <span className="text-sm text-black dark:text-white">
                {label}
              </span>
              <span className="text-wrap text-xs text-neutral-600 dark:text-neutral-400">
                {desc}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
