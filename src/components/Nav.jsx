import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="h-28 flex items-center sticky top-0 left-0 bg-white z-10">
        <div className="w-11/12 m-auto flex justify-between">
            <span className="flex items-center">
                <span className="h-4 w-4  bg-[#0050ff]"></span>
                <h2 className="ml-2 text-2xl font-bold">Xando Alka <span className="text-base font-light tracking-wide uppercase font-montserrat">/ Frontend Developer</span></h2>
            </span>
            <ul className="flex gap-5 uppercase text-sm tracking-wide">
                <li><Link to={"/"} className="font-montserrat transition-all duration-200 ease-linear hover:text-[#0050ff]" href="#">About Me</Link></li>
                <li><Link to={"/resume"} className="font-montserrat transition-all duration-200 ease-linear hover:text-[#0050ff]" href="#">Resume</Link></li>
                <li><Link to={"/projects"} className="font-montserrat transition-all duration-200 ease-linear hover:text-[#0050ff]" href="#">Projects</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav