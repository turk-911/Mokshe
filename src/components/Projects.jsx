import React from "react";
import projectInfo from "../data/projectInfo";
import ProjectsInfo from "./ProjectsInfo";
import Title from "./Title";
function Projects() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Projects</Title>
        {projectInfo.map((item) => (
          <ProjectsInfo
            id={item.id}
            title={item.title}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
