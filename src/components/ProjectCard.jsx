import { SiVercel } from "react-icons/si"

const ProjectCard = ({ projectTitle, roleTitle, projectDescription, projectImg, projectLink }) => {
    return (
        <div className="w-full bg-white flex flex-col lg:flex-row shadow-[-12px_12px_25px_0_rgba(138,131,124,0.23)]">
            <div className=" w-full lg:w-[57.5%] py-4 min-h-72 lg:py-20 flex">

                <div className="h-12 w-[2.5%] bg-[#0050ff]"></div>

                <div className="px-6 lg:w-[97.5%]">
                    <h1 className="text-xl text-[#0050ff] font-bold">{projectTitle}</h1>
                    <h2 className="text-sm font-semibold font-montserrat">{roleTitle}</h2>

                    <p className="mt-4 lg:mt-10 font-montserrat text-sm leading-relaxed">{projectDescription}</p>
                </div>

            </div>
            <div className="w-full lg:w-[42.5%] h-72 lg:min-h-[20rem] object-center lg:max-h-96 relative ">
                <img className="h-72 w-full object-cover" src={projectImg} alt="" />
                <a className="absolute top-2 right-2 p-3 rounded-full bg-[#0a0a0a] cursor-pointer" href={projectLink} target="_blank">
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 76 76"
                        fill="none" xmlns="http://www.w3.org/2000/svg"><path
                            d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard