import "./App.css";
import ProjectCard from "./components/ProjectCard";
import ExpCard from "./components/ExpCard";
import { icons } from "./icons";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

import IEMlogo from "./assets/iem-logo-removebg-preview.png";
import illini from "./assets/illini-logo.png";
import portpic from "./assets/portfolio-pic.jpg";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mx-auto mt-50 mb-10 w-5/6 lg:w-1/2 bg-[#f3f4f6] dark:bg-[#0d0d14] transition-all duration-300">
        <div
          id="home"
          className="flex flex-col text-center w-full lg:w-2/3 bg-[#f3f4f6] dark:bg-[#0d0d14] text-black dark:text-white transition-all duration-300"
        >
          <span className="text-center text-8xl font-bold">Michael Sun</span>
          <span className="text-xl">
            I'm a junior at the{" "}
            <span className="dark:text-white underline decoration-1 underline-offset-2 text-black hover:font-bold transition-all duration-300">
              University of Illinois Urbana-Champaign
            </span>{" "}
            majoring in
            <span className="dark:text-white underline decoration-1 underline-offset-2 text-black hover:font-bold transition-all duration-300">
              {" "}
              Computer Science and Economics.
            </span>{" "}
            My interests lie in full-stack/frontend development and large scale
            systems. <br />
            <span className="dark:text-white underline decoration-1 underline-offset-2 text-black hover:font-bold transition-all duration-300">
              I'm currently seeking an internship for summer 2026.
            </span>
          </span>
        </div>
        <div className="flex flex-col my-10 text-center bg-[#f3f4f6] dark:bg-[#0d0d14] text-black dark:text-white transition-all duration-300">
          <span className="dark:text-white text-4xl mb-5 text-black font-bold">
            My skillset
          </span>
          <Banner icons={icons} />
        </div>
        <div
          id="experience"
          className="flex flex-col items-center mt-10 bg-[#f3f4f6] dark:bg-[#0d0d14] text-black dark:text-white transition-all duration-300"
        >
          <span className="text-4xl mb-5 font-bold">Experience</span>
          <ExpCard label="Infrastructure Team Member" imgLink={IEMlogo}>
            Currently working on the infrastructure team for Illini Electric
            Motorsports. Rewriting the club website using React and Tailwind and
            developing CI/CD pipelines for all club code.
          </ExpCard>
          <ExpCard label="CS124 Course Staff" imgLink={illini}>
            Held 1-on-1 tutoring sessions with a class of 1000+ students.
            Assisted students with programming basics in Java, teaching topics
            ranging from types and loops to encapsulation and inheritance.
            Provided guidance on an end-of-year project in Android Studio,
            covering web fundamentals like HTTP and callbacks.
          </ExpCard>
        </div>
        <div className="flex flex-col items-center mt-10 transition-all duration-300">
          <span
            id="projects"
            className="text-4xl mb-5 font-bold bg-[#f3f4f6] dark:bg-[#0d0d14] text-black dark:text-white transition-all duration-300"
          >
            Projects
          </span>
          <ProjectCard
            label="Link"
            techs="React, Node.js, MongoDB, Express, Vercel, JWT, OAuth2.0"
            githubURL="https://github.com/mtsun05/link"
            websiteURL="https://link-sable-three.vercel.app"
          >
            Link is a full stack social community platform built for
            centralizing events for clubs. User authentication was implemented
            with both JWTs and OAuth2.0's sign in with Google. Currently working
            on a team functionality, where users can specify team size and roles
            and Link automatically generates random teams.
          </ProjectCard>
          <ProjectCard
            label="Chat App"
            techs="Go, Next.js, TypeScript"
            githubURL="https://github.com/mtsun05/chat-app"
          >
            This chat application uses WebSockets and Go channels to enable
            low-latency communication between multiple users. Manages multiple
            concurrent connections using a custom connection pool struct.
            Looking into supporting multiple pools for a Discord/GroupMe kind of
            functionality.
          </ProjectCard>
        </div>
        <div className="flex flex-col items-center mt-10 bg-[#f3f4f6] dark:bg-[#0d0d14] text-black dark:text-white transition-all duration-300">
          <span id="about" className="text-4xl mb-5 font-bold">
            About Me
          </span>
          <div className="flex flex-col lg:flex-row transition-all duration-300">
            <img
              className="rounded-lg size-[30rem] mx-2"
              src={portpic}
              alt=""
            />
            <span className="mx-2">
              I grew up in Barrington, Illinois (a suburb of Chicago), and
              graduated from Barrington High School. I actually entered UIUC for
              Psychology, but after my first semester I decided that it wasn't
              for me and I wanted to pivot into something that was both creative
              and technical, which led me to computer science. I learned
              everything I know about software engineering in the last two
              years, using resources like coursework, YouTube, and
              documentation. Beyond computer science and software, I have a
              background in graphic design, specifically with Adobe Illustrator,
              and am a person who loves creating and designing anything from
              posters to websites. I'm also a fan of alt-rock, indie rock, jazz
              rap, hip-hop, and a couple other genres of music that I'm probably
              forgetting. My favorite artists are The Strokes, Nujabes, Mac
              Miller, Wallows, and an eclectic collection of others within the
              genres I mentioned. I've also been playing volleyball since I was
              a freshman in high school, and nowadays I usually play intramural
              or for fun with my friends. I also enjoy watching sports, mainly
              volleyball, basketball and soccer. It would be dishonest not to
              mention that I'm also a big foodie (some would say big back), and
              love taking any opportunity to try a great restaurant.
            </span>
          </div>
        </div>
        <span className="text-5xl mt-20 bg-[#f3f4f6] dark:bg-[#0d0d14] text-black dark:text-white transition-all duration-300">
          Thank you for visiting!
        </span>
        <footer className="mb-10 mt-40 bg-[#f3f4f6] dark:bg-[#0d0d14] text-black dark:text-white transition-all duration-300">
          Built by Michael Sun using React and TailwindCSS.
        </footer>
      </div>
    </>
  );
}

export default App;
