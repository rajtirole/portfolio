import React from "react";
import proshop from "../assets/imgs/proshop.png";
const ProjectCard = ({ id, title, img, description, skills, github, live }) => {
  const isEven = +id % 2 === 0;
  console.log(isEven, "HERE IS THE DATA");
  return (
    <div className="flex flex-col md:flex-row gap-4 p-8 h-[60rem] md:h-[26rem] bg-white rounded-2xl shadow-xl my-6">
      <div
        className={`order-1 md:order-${
          isEven ? 2 : 1
        }  bg-[#7575752] rounded-2xl shadow-lg h-auto w-full md:w-3/4 overflow-hidden`}
      >
        <a href={live} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="w-full project-img" />
        </a>
      </div>
      <div
        className={`order-2 md:order-${
          isEven ? 1 : 2
        } w-full flex flex-col items-center px-4`}
      >
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-[#767676] leading-7 font-normal my-4">
          {description}
        </p>
        <div class="flex flex-wrap gap-4 mt-2 project-stack">
          {skills?.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </div>
        <div className="my-4">
          <div class="flex w-full gap-4">
            <a
              target="_blank"
              href={github}
              rel="noreferrer"
              className="flex text-black hover:text-[#147efb]"
            >
              Code{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            <a
              target="_blank"
              href={live}
              rel="noreferrer"
              className="flex text-black hover:text-[#147efb] font-medium"
            >
              Live Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-external-link"
              >
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                <path d="M11 13l9 -9"></path>
                <path d="M15 4h5v5"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
