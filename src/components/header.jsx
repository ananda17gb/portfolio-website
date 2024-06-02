function Header() {
  return (
    <>
      <div className="bg-[#404258] h-[10vh] flex justify-between items-center px-24">
        <a href="" className="text-4xl font-semibold">
          AnandaAW
        </a>
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
          {/* <li className="inline hover:underline"><a href="#activites">Activities</a></li> */}
          {/* <li className="inline hover:underline"><a href="#contactme">Contact Me</a></li> */}
        </ul>
      </div>
    </>
  );
}

export default Header;
