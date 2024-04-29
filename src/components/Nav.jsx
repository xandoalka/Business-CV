import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"

const Nav = () => {
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();

  const handleButtonClick = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(false);
  }, [location])
  return (
    <nav className="lg:h-28 flex items-center fixed top-0 w-full bg-white z-10">
      <div className="lg:w-11/12 py-6 px-5 lg:py-0 lg:px-0 w-full lg:m-auto flex justify-between">
        <span className="flex items-center flex-wrap max-w-xs lg:max-w-none">
          <span className="h-4 w-4  bg-[#0050ff]"></span>
          <h2 className="ml-2 lg:text-2xl text-xl font-bold">Xando Alka </h2>
          <p className="xl:ml-2 lg:text-base text-sm font-light tracking-wide uppercase font-montserrat"><span className="hidden xl:inline">/</span> Frontend Developer</p>
        </span>
        <button onClick={handleButtonClick} className="flex z-10 lg:hidden flex-col justify-center w-10 cursor-pointer">
          <div className={`bg-[#0050ff] rounded-lg h-1 mb-1.5 transition-all duration-300 ${isChecked ? 'w-1/2 transform rotate-45 translate-x-1 translate-y-1 bg-black' : 'w-1/2'}`}></div>
          <div className={`bg-[#0050ff] rounded-lg h-1 transition-all duration-300 w-full ${isChecked ? 'w-11/12 transform -rotate-45 bg-black' : 'w-full'} `}></div>
          <div className={`bg-[#0050ff] rounded-lg h-1 mt-1.5 transition-all duration-300 ${isChecked ? 'w-1/2 transform rotate-45 translate-x-4 -translate-y-1 bg-black' : 'w-3/4'}`}></div>
        </button>
        <ul className={`lg:flex lg:items-center gap-5 uppercase  text-sm  ${isChecked ? 'bg-white flex absolute flex-col gap-8 items-center justify-center w-full -ml-5 h-screen' : 'hidden'}`}>
          <li><Link to={"/"} className={`font-montserrat transition-all duration-200 ease-linear hover:text-[#0050ff] ${location.pathname === '/' ? 'text-[#0050ff]' : ''}`} href="#">About Me</Link></li>
          <li><Link to={"/resume"} className={`font-montserrat transition-all duration-200 ease-linear hover:text-[#0050ff] ${location.pathname === '/resume' ? 'text-[#0050ff]' : ''}`} href="#">Resume</Link></li>
          <li><Link to={"/projects"} className={`font-montserrat transition-all duration-200 ease-linear hover:text-[#0050ff] ${location.pathname === '/projects' ? 'text-[#0050ff]' : ''}`} href="#">Projects</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav