import CardBig from "./cardbig";
import { projectData } from "../data/project";

function Projects() {
  return (
    <>
      <div
        id="projects"
        className="flex flex-col h-screen justify-center items-center text-2xl"
      >
        <h1 className="text-4xl font-medium">Projects</h1>
        <div className="flex flex-row flex-warp gap-10 bg-[#5d6d7e] py-20 ">
          {projectData.map((project, index) => (
            <CardBig
              key={index}
              image={project.image}
              name={project.name}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
