import CardBig from "./cardbig";
import { achievementData } from "../data/achievement";

function Projects() {
  return (
    <>
      <div
        id="achievement"
        className="flex flex-col h-screen justify-center items-center text-2xl"
      >
        <h1 className="text-4xl font-medium">Achievement</h1>
        <div className="flex flex-row flex-wrap gap-10 bg-[#5d6d7e] py-20 ">
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
