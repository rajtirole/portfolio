import React from "react";
import profile from "../assets/imgs/profile_pic_updated.png";
import Tooltip from "./Tooltip";
const Hero = () => {
  return (
    <div id="home" className="py-12">
      <div className="mx-auto max-w-screen-lg px-16 my-24 ">
        <div className="flex flex-col md:flex-row relative  h-[60rem] md:h-[36rem] ">
          <div className="order-2 md:order-1 flex items-center md:items-start flex-col max-w-xl mt-8">
            <p className="text-gray-800 text-4xl leading-12 mb-8 mt-8 font-bold">
              Software Engineer
            </p>
            <p className="text-2xl leading-10 font-light">
              Hi, I'm Raja Tirole. A experienced Software Engineer based in
              India 📍
            </p>
            <div className="flex gap-2 py-4 justify-center md:justify-start">
              <a
                aria-label="linkedin"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/rajtirole"
                className="text-[#2d2e32] hover:text-[#147efb]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-brand-linkedin"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
              <a
                aria-label="github"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/rajtirole"
                className="text-[#2d2e32] hover:text-[#147efb]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-brand-github"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>

              <a href="mailto:rajtirole23454@gmail.com" rel="noreferrer">
                <svg
                  class="h-9 w-9 text-[#2d2e32] hover:text-[#147efb]"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex flex-col items-center md:items-start">
            <img src={profile} alt="" className="w-96" />
          </div>
          <div class="items-center bottom-4 text-[#767676] flex flex-col md:flex-row text-3xl left-0 absolute">
            <p className="border-b-2 border-[#2d2e3280] md:border-b-0 md:border-r-2 md:border-[#2d2e3280] font-semibold mb-8 pb-8 md:mb-0 md:pb-0 md:mr-8 md:pr-8 text-lg">
              Tech Stack
            </p>
            <div class="logos">
              <ul className="flex flex-wrap gap-3 list-none">
                <li className="relative group">
                  <img
                    src="https://skillicons.dev/icons?i=js"
                    alt="skill-icon"
                  />
                  <Tooltip title="Javascript" />
                </li>
                <li className="relative group">
                  <img
                    src="https://skillicons.dev/icons?i=ts"
                    alt="skill-icon"
                  />
                  <Tooltip title="Typescript" />
                </li>
                <li className="relative group">
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    alt="skill-icon"
                  />
                  <Tooltip title="React" />
                </li>
                <li className="relative group">
                  <img
                    src="https://skillicons.dev/icons?i=redux"
                    alt="skill-icon"
                  />
                  <Tooltip title="Redux" />
                </li>
                <li className="relative group">
                  <img
                    src="https://skillicons.dev/icons?i=next"
                    alt="skill-icon"
                  />
                  <Tooltip title="Next" />
                </li>
                <li className="relative group">
                  <img
                    src="https://skillicons.dev/icons?i=tailwind"
                    alt="skill-icon"
                  />
                  <Tooltip title="Tailwind CSS" />
                </li>
                <li className="relative group">
                  <img
                    // src="https://avatars.githubusercontent.com/u/9950313?s=50&v=6"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxul26LvqCjmpTJ8qTqlV26ILXnl0X0kHv0jv1FuuJA-Vg_F5p_ll&usqp=CAE&s"
                    alt="skill-icon"
                    className="w-12"
                  />
                  <Tooltip title="Node" />
                </li>
                <li className="relative group">
                  <img
                    src="https://skillicons.dev/icons?i=express"
                    alt="skill-icon"
                  />
                  <Tooltip title="Express" />
                </li>
                <li className="relative group">
                  <img
                    src="https://skillicons.dev/icons?i=mongo"
                    alt="skill-icon"
                  />
                  <Tooltip title="MongoDB" />
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
