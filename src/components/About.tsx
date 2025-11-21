import { FaHome } from "react-icons/fa";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import { LuPenTool } from "react-icons/lu";
import { FaSpotify } from "react-icons/fa";
import { FaVolleyball } from "react-icons/fa6";
import portpic from "../assets/portfolio-pic.jpg";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "70% bottom",
          once: true,
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".pic",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
          ease: "power4.out",
        }
      ).fromTo(
        ".about-item",
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "back.out",
        },
        0
      );
    }
  }, []);

  return (
    <div
      ref={aboutRef}
      className="flex flex-col lg:w-2/3 mx-10 mt-10 text-black dark:text-white"
    >
      <span
        id="about"
        className="dark:text-white mb-5 text-black italic text-5xl"
      >
        about
      </span>
      <div className="flex flex-col lg:flex-row items-center">
        <img
          className="pic rounded-lg object-cover size-1/2 lg:mr-10 lg:mb-0 mb-10"
          src={portpic}
          alt=""
        />
        <div className="flex flex-col justify-between self-stretch gap-3">
          <div className="about-item group flex flex-row justify-around items-center gap-10 bg-[#e6e6e6] dark:bg-neutral-700/50 px-5 py-3 rounded-2xl">
            <FaHome className="size-[70px]" />
            <span className=" dark:group-hover:text-neutral-300 group-hover:text-black text-neutral-500 dark:text-neutral-400 transition-all duration-500">
              I'm from Barrington, IL, a suburb 45 minutes away from Chicago.
              I've lived in around here my whole life.
            </span>
          </div>
          <div className="about-item group flex flex-row justify-around items-center gap-10 bg-[#e6e6e6] dark:bg-neutral-700/50 px-5 py-3 rounded-2xl">
            <HiOutlineSwitchHorizontal className="size-[70px]" />
            <span className=" dark:group-hover:text-neutral-300 group-hover:text-black text-neutral-500 dark:text-neutral-400 transition-all duration-500">
              I entered UIUC as a Psychology major, but decided it wasn't for me
              and pivoted to Computer Science.
            </span>
          </div>
          <div className="about-item group flex flex-row justify-around items-center gap-10 bg-[#e6e6e6] dark:bg-neutral-700/50 px-5 py-3 rounded-2xl">
            <MdComputer className="size-[70px]" />
            <span className=" dark:group-hover:text-neutral-300 group-hover:text-black text-neutral-500 dark:text-neutral-400 transition-all duration-500">
              I've learned everything I know about computer science and software
              engineering in the last two years.
            </span>
          </div>
          <div className="about-item group flex flex-row justify-around items-center gap-10 bg-[#e6e6e6] dark:bg-neutral-700/50 px-5 py-3 rounded-2xl">
            <LuPenTool className="size-[70px]" />
            <span className=" dark:group-hover:text-neutral-300 group-hover:text-black text-neutral-500 dark:text-neutral-400 transition-all duration-500">
              I have a strong background in graphic design, utilizing
              technologies like Adobe Illustrator and Figma.
            </span>
          </div>
          <div className="about-item group flex flex-row justify-around items-center gap-10 bg-[#e6e6e6] dark:bg-neutral-700/50 px-5 py-3 rounded-2xl">
            <FaSpotify className="size-[70px]" />
            <span className=" dark:group-hover:text-neutral-300 group-hover:text-black text-neutral-500 dark:text-neutral-400 transition-all duration-500">
              My favorite artists are Nujabes and The Strokes, and I like
              artists from various other genres.
            </span>
          </div>
          <div className="about-item group flex flex-row justify-around items-center gap-10 bg-[#e6e6e6] dark:bg-neutral-700/50 px-5 py-3 rounded-2xl">
            <FaVolleyball className="size-[70px]" />
            <span className=" dark:group-hover:text-neutral-300 group-hover:text-black text-neutral-500 dark:text-neutral-400 transition-all duration-500">
              I've been playing volleyball since high school. I mainly play
              indoor but I'm down for any format. I enjoy many other sports too!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
