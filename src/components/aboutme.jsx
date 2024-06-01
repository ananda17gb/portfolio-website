import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSoundcloud } from "react-icons/fa6";

function AboutMe() {
  return (
    <>
      <div id="aboutme" className="flex flex-col h-[90vh] ">
        <div className="flex justify-between px-80 items-center h-screen">
          <img src="" />
          <div className="flex flex-col">
            <h1 className="text-4xl font-medium">About Me</h1>
            <br />
            <p className="font-medium text-xl">
              Hello my name is{" "}
              <span className="font-bold">Ananda Arti Widigdo</span>,
            </p>
            <p className="font-medium text-xl">
              a student from Telkom University majoring in Informatics
            </p>
            <p className="font-medium text-xl">
              having interest in technology and software engineering
            </p>
            <div className="flex gap-5 items-center my-4">
              <a href="https://wa.me/6281222693760" target="_blank">
                <FaWhatsapp size={36} />
              </a>
              <a
                href="https://linkedin.com/in/ananda-arti-widigdo-b08178247"
                target="_blank"
              >
                <FaLinkedinIn size={36} />
              </a>
              <a href="https://github.com/ananda17gb" target="_blank">
                <FaGithub size={36} />
              </a>
              <a href="https://www.instagram.com/anandaaw17/" target="_blank">
                <FaInstagram size={36} />
              </a>
              {/* <a href="https://soundcloud.com/ndaaw" target="_blank">
                <FaSoundcloud size={36}/>
            </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
