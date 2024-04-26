import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import profile from "../assets/images/profile.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <main className="h-screen relative">
            <div className="bg-[#e6dace] w-2/5 h-full -z-20"></div>
            <div className="absolute w-[62.5%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex">
                <div className="bg-[#f4ece6] w-2/5 flex flex-col justify-between shadow-[-12px_12px_25px_0_rgba(138,131,124,0.23)]">
                    <div className="flex flex-col items-center gap-8 py-12">
                        <img className="w-[205px] h-[205px] rounded-full bg-white" src={profile} alt="" />
                        <h2 className="text-3xl font-bold w-1/3 text-center leading-none">Xando Alka</h2>
                        <span className="w-10 bg-[#0050ff] h-[1px]"></span>
                        <p className="tracking-widest uppercase text-lg font-montserrat">Frontend Developer</p>
                    </div>
                    <div className="bg-white w-full py-4 ">
                        <span className="flex gap-6 justify-center">
                            <a className="text-xl" href="#"><FaFacebookF /></a>
                            <a className="text-xl" href="#"><FaTwitter /></a>
                            <a className="text-xl" href="#"><FaLinkedinIn /></a>
                            <a className="text-xl" href="#"><FaInstagram /></a>
                        </span>
                    </div>
                </div>
                <div className="w-3/5 pt-12 pl-12 flex flex-col gap-8">
                    <h1 className="text-8xl font-bold">Hello</h1>
                    <h3 className="text-2xl font-semibold font-montserrat">Here's who I am & what I do</h3>
                    <span className="flex gap-4 font-medium uppercase text-sm mt-4 font-montserrat">
                        <Link to={"/resume"} className="w-32 text-center py-2 border border-[#0050ff] bg-[#0050ff] rounded-3xl text-white transition-all duration-200 ease-linear hover:bg-white hover:text-[#0050ff]" href="#">Resume</Link>
                        <Link to={"/project"} className="w-32 text-center py-2 border border-black rounded-3xl transition-all duration-200 ease-linear hover:bg-[#0050ff] hover:border-[#0050ff] hover:text-white" href="#">Projects</Link>
                    </span>
                    <p className="max-w-96 mt-4 tracking-wide leading-snug font-montserrat">
                        I'm Xanzu Athando Alvinan Dika, I'm a junior frontend developer known for my adept coding skills and innovative approach. With a natural talent for swiftly crafting clean and functional code, I'm a rising star in the world of web development.</p>
                    <p className="max-w-96 tracking-wide leading-snug font-montserrat">Passionate about pushing boundaries and creating seamless user experiences, I'm poised to make a significant impact in the industry.</p>
                </div>
            </div>
        </main>
    )
}

export default Hero