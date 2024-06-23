import { projectData } from "../data/project";
import CardBig from "./cardbig"; // Assuming CardBig component is properly imported and named

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen text-2xl"
    >
      <h1 className="text-4xl font-medium mb-8">Projects</h1>
      <div className="flex flex-wrap justify-center gap-10 bg-[#474E68] py-20 px-4 sm:px-10 lg:px-20">
        {projectData.map((project, index) => (
          <CardBig
            key={index} // Ensure a unique key is used, ideally project.id if available
            image={project.image}
            name={project.name}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
