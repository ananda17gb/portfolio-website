import { achievementData } from "../data/achievement";
import CardBig from "./cardbig";

function Projects() {
  return (
    <>
      <div
        id="achievement"
        className="flex flex-col items-center justify-center min-h-screen text-2xl"
      >
        <h1 className="text-4xl font-medium">Achievement</h1>
        <div className="flex flex-wrap justify-center gap-10 bg-[#474E68] py-20 px-4 sm:px-10 lg:px-20">
          {achievementData.map((achievement, index) => (
            <CardBig
              key={index}
              image={achievement.image}
              name={achievement.name}
              description={achievement.description}
              link={achievement.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
