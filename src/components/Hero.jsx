import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import profile from "../assets/images/profile.png"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <main className="lg:mt-28 mt-24 min-h-screen relative">
            <div className="lg:bg-[#e6dace] bg-white lg:absolute static w-2/5 lg:h-full h-48 -z-10"></div>
            <div className="lg:absolute lg:w-[62.5%] lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-0 flex flex-col lg:flex-row">
                <div className="bg-[#f4ece6] lg:w-2/5 w-11/12 absolute -top-3 left-6 lg:ml-0 lg:static flex flex-col justify-between shadow-[-12px_12px_17px_0_rgba(138,131,124,0.23)]">
                    <div className="flex flex-col items-center gap-6 lg:gap-8 py-12">
                        <img className="w-40 h-40 lg:w-[205px] lg:h-[205px] rounded-full bg-white" src={profile} alt="" />
                        <h2 className="text-3xl font-bold w-1/3 text-center leading-8 lg:leading-none">Xando Alka</h2>
                        <span className="lg:w-10 w-20 bg-[#0050ff] h-[1px]"></span>
                        <p className="hidden lg:flex tracking-widest uppercase text-lg font-montserrat">Frontend Developer</p>
                        <span className="flex lg:hidden justify-center w-11/12 mx-auto gap-2 font-medium uppercase mt-4 font-montserrat">
                            <Link to={"/resume"} className="w-36 text-center py-1.5 border border-[#0050ff] bg-[#0050ff] rounded-3xl text-white transition-all duration-200 ease-linear hover:bg-white hover:text-[#0050ff]" href="#">Resume</Link>
                            <Link to={"/projects"} className="w-36 text-center py-1.5 border border-black rounded-3xl transition-all duration-200 ease-linear hover:bg-[#0050ff] hover:border-[#0050ff] hover:text-white" href="#">Projects</Link>
                        </span>
                    </div>
                    <div className="bg-white w-full py-4 mb-3 lg:mb-0">
                        <span className="flex gap-6 justify-center">
                            <a className="text-xl" href="https://www.facebook.com/xandoalka" target="_blank"><FaFacebookF /></a>
                            <a className="text-xl" href="https://twitter.com/xandoalka" target="_blank"><FaTwitter /></a>
                            <a className="text-xl" href="https://www.linkedin.com/in/xandoalka" target="_blank"><FaLinkedinIn /></a>
                            <a className="text-xl" href="https://www.instagram.com/xandoalka" target="_blank"><FaInstagram /></a>
                        </span>
                    </div>
                </div>
                <div className="lg:w-3/5 w-full pt-[22rem] lg:pt-12 pl-10 pr-4 pb-10 lg:pr-0 lg:pb-0 lg:pl-12 flex flex-col gap-6 bg-[#e6dace] lg:bg-white">
                    <h1 className="lg:text-8xl text-5xl font-bold">Hello</h1>
                    <h3 className="text-xl font-semibold font-montserrat">Here's who I am & what I do</h3>
                    <span className="hidden lg:flex gap-2 font-medium uppercase text-sm mt-4 font-montserrat">
                        <Link to={"/resume"} className="w-32 text-center py-2 border border-[#0050ff] bg-[#0050ff] rounded-3xl text-white transition-all duration-200 ease-linear hover:bg-white hover:text-[#0050ff]" href="#">Resume</Link>
                        <Link to={"/projects"} className="w-32 text-center py-2 border border-black rounded-3xl transition-all duration-200 ease-linear hover:bg-[#0050ff] hover:border-[#0050ff] hover:text-white" href="#">Projects</Link>
                    </span>
                    <p className="max-w-96 lg:mt-4 tracking-wide leading-snug font-montserrat">
                        I'm Xanzu Athando Alvinan Dika, I'm a junior frontend developer known for my adept coding skills and innovative approach. With a natural talent for swiftly crafting clean and functional code, I'm a rising star in the world of web development.</p>
                    <p className="max-w-96 tracking-wide leading-snug font-montserrat">Passionate about pushing boundaries and creating seamless user experiences, I'm poised to make a significant impact in the industry.</p>
                </div>
            </div>
        </main>
    )
}

export default Hero