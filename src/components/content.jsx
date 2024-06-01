import AboutMe from "./aboutme"
import Skills from "./skils"
import Project from "./project"
// import Activites from "./activites"
import Achievement from "./achievement"
// import Separator from "./separator"

function Content() {

  return (
    <>
      <div className="flex flex-col gap-10 bg-[#5d6d7e]">
        <AboutMe />
        {/* <Separator/> */}
        <Project /> {/* kayak album gambar */}
        {/* <Separator/> */}
        <Skills /> {/* slider tapi bisa kanan kiri juga*/}
        {/* <Separator/> */}
        <Achievement />
        {/* <Separator/> */}
        {/* <Activites/> kayak album gambar */}
        {/* <Separator/> */}
      </div>
    </>
  )
}

export default Content
