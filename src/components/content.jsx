import AboutMe from "./aboutme";
import Skills from "./skils";
import Project from "./project";
// import Activites from "./activites"
import Achievement from "./achievement";
// import Separator from "./separator"

function Content() {
  return (
    <>
      <div className="flex flex-col gap-10 bg-[#474E68]">
        <AboutMe />
        <Project /> {/* kayak album gambar */}
        <Skills /> {/* slider tapi bisa kanan kiri juga*/}
        <Achievement />
      </div>
    </>
  );
}

export default Content;
