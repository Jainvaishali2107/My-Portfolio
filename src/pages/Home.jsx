import { Link } from "react-router-dom";
import { Image } from "../assets/components/image";

import { Skills2 } from "../assets/components/skills2";
import { Certificates } from "../assets/components/certificates";
import { Resume } from "../assets/components/resume";
import { Projects2 } from "../assets/components/projects2";
import { Contact2 } from "../assets/components/contact2";

export default function Home2() {
  return (
    <>
      <div
        className="
        bg-[url('/space.jpg')] 
        bg-no-repeat 
        bg-center 
        bg-cover 
        flex 
        flex-col 
        md:flex-row 
        items-center 
        justify-between 
        md:gap-20 
        lg:gap-40 
        p-6 
        md:p-10
        pb-10
        "
      >
        <div className="space-y-3 text-center md:text-left md:pl-10 max-w-lg pt-15">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
            Vaishali Jain – Full Stack Developer
          </h1>

          <p className="text-white/90 text-base sm:text-lg drop-shadow-[0_0_3px_rgba(255,255,255,0.25)]">
            Skilled Full-Stack Developer with expertise in React, Node.js, MongoDB,
            Tailwind CSS, Express.
          </p>
        </div>

        <div className="mt-6 md:mt-0 flex justify-center">
          <Image />
        </div>
      </div>

      <div
        className="
        bg-blue-950 
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-5 
        gap-4 
        md:gap-6 
        
        justify-items-center
        pt-10
        pl-6
        pr-6
        pb-10
        "
      >
        <Link to="/skills"><Skills2 /></Link>
        <Link to="/certificates"><Certificates /></Link>
        <Link to="/resume"><Resume /></Link>
        <Link to="/projects"><Projects2 /></Link>
        <Link to="/contact"><Contact2 /></Link>
      </div>
    </>
  );
}