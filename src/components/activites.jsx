import CardBig from "./cardbig"
import { activitiesData } from "../data/activities"

function Activites() {

  return (
    <>  
      <div id="activites" className="flex flex-col h-screen justify-center items-center text-2xl">
            <h1 className="text-4xl font-medium">Activites</h1>
            <div className="flex flex-row flex-wrap gap-10 bg-[#5d6d7e] py-20 ">
                {activitiesData.map((activities, index) => (
                  <CardBig key={index} image={activities.image} name={activities.name} description={activities.description} link={activities.link}/> 
                ))}
            </div>
        </div>
    </>
  )
}

export default Activites
