import Card from "./card"; // Ensure the correct path to your Card component
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const flickityOptions = {
  initialIndex: 2,
  wrapAround: true,
  autoPlay: true,
};

function Skills() {
  const images = [
    "html.png",
    "css.png",
    "js.png",
    "python.png",
    "cpp.png",
    "go.png",
    "dart.png",
    "flutter.png",
    "mysql.png",
    "office.png",
    "firebase.png",
    "linux.png",
  ];
  return (
    <>
      <div
        id="skills"
        className="flex flex-col h-screen justify-center items-center text-2xl overflow-x-hidden"
      >
        <div className="bg-[#474E68] relative m-auto w-full">
          <h1 className="text-4xl font-medium text-center pb-40">Skills</h1>
          <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions}
            reloadOnUpdate
            static
          >
            {images.map((image, index) => (
              <Card key={index} image={image} className="gallery-cell" />
            ))}
          </Flickity>
        </div>
      </div>
    </>
  );
}

export default Skills;
