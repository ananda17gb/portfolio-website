import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <>
      <div className="bg-[#404258] h-[10vh] flex justify-between items-center px-8 sm:px-24 overflow-auto ">
        <a href="" className="sm:text-4xl font-semibold text-2xl">
          AnandaAW
        </a>
        {/* Navigation links for larger screens */}
        <div className="hidden lg:block">
          <ul className="flex gap-12 text-2xl font-semibold">
            <li className="inline hover:underline">
              <a href="#aboutme">About Me</a>
            </li>
            <li className="inline hover:underline">
              <a href="#projects">Projects</a>
            </li>
            <li className="inline hover:underline">
              <a href="#skills">Skills</a>
            </li>
            <li className="inline hover:underline">
              <a href="#achievement">Achievements</a>
            </li>
          </ul>
        </div>
        {/* Hamburger menu button for smaller screens */}
        <button className="lg:hidden" onClick={toggleNavLinks}>
          <GiHamburgerMenu />
        </button>
      </div>
      {/* Conditionally render navigation links based on showNavLinks state */}
      {showNavLinks && (
        <div className="lg:hidden bg-[#404258] flex justify-center">
          <ul className="flex flex-col gap-4 text-xl font-semibold py-4">
            <li className="inline hover:underline">
              <a href="#aboutme">About Me</a>
            </li>
            <li className="inline hover:underline">
              <a href="#projects">Projects</a>
            </li>
            <li className="inline hover:underline">
              <a href="#skills">Skills</a>
            </li>
            <li className="inline hover:underline">
              <a href="#achievement">Achievements</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
