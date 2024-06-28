import "flickity/css/flickity.css";
import Flickity from "react-flickity-component";
import Card from "./card"; // Ensure the correct path to your Card component

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
    "flutter.png",
    "mysql.png",
    "office.png",
    "firebase.png",
    "linux.png",
  ];

  return (
    <div
      id="skills"
      className="flex flex-col min-h-screen justify-center items-center text-2xl"
    >
      <div className="bg-[#474E68] relative mx-auto w-full">
        <h1 className="text-4xl font-medium text-center pb-10">Skills</h1>
        <Flickity
          className={"carousel"} // Ensure carousel class is defined in your CSS or Tailwind
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
  );
}

export default Skills;
