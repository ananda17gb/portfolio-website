import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

function AboutMe() {
  return (
    <>
      <div
        id="aboutme"
        className="flex min-h-screen px-8 md:px-16 items-center"
      >
        <div className="flex justify-between px-4 md:px-8 items-center flex-grow">
          {/* <div className="flex flex-col">
            <h1 className="italic font-medium text-xl">
              {" "}
              <ReactTyped
                strings={[
                  `"I'm not a great programmer; I am just a decent`,
                  `"I'm not a great programmer; I am just a good programmer with no great`,
                  `"I'm not a great programmer; I am just a good programmer with great habits"`,
                ]}
                typeSpeed={200}
                loop
                backSpeed={80}
                cursorChar="_"
                showCursor={true}
              />
            </h1>
            <h1 className="italic font-medium text-xl">
              {" "}
              <ReactTyped
                strings={[`- Kent Back`]}
                typeSpeed={500}
                loop
                backSpeed={80}
                cursorChar="_"
                showCursor={true}
              />
            </h1>
          </div> */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-medium">About Me</h1>
            <br />
            <p className="font-medium text-xl">
              Hello, my name is{" "}
              <span className="font-bold">Ananda Arti Widigdo</span>,
            </p>
            <p className="font-medium text-xl">
              a student from Telkom University majoring in Informatics.
            </p>
            <p className="font-medium text-xl">
              I have a strong interest in technology and software engineering.
            </p>
            <div className="flex gap-5 items-center my-4">
              <a
                href="https://wa.me/6281222693760"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={36} />
              </a>
              <a
                href="https://linkedin.com/in/ananda-arti-widigdo-b08178247"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={36} />
              </a>
              <a
                href="https://github.com/ananda17gb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={36} />
              </a>
              <a
                href="https://www.instagram.com/anandaaw17/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
