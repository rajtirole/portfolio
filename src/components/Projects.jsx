import React from "react";
import { projects } from "../utils/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="py-28">
      <div className="mx-auto max-w-screen-lg px-4 flex flex-col  justify-center gap-4">
        <p className="text-[#147efb] text-lg font-bold mb-2 uppercase">
          Portfolio
        </p>
        <p className="text-2xl font-medium mt-2">
          Each project is a unique piece of development 🧩
        </p>
        {projects?.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.projectTitle}
            img={project.projectImg}
            description={project.projectDescription}
            skills={project.projectSkills}
            github={project.projectGithub}
            live={project.projectLive}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
