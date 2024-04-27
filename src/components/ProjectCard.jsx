const ProjectCard = ({ projectTitle, roleTitle, projectDescription, projectImg}) => {
    return (
        <div className="w-full bg-white flex shadow-[-12px_12px_25px_0_rgba(138,131,124,0.23)]">
            <div className="w-[57.5%] py-20 flex">

                <div className="h-12 w-[2.5%] bg-[#0050ff]"></div>

                <div className="px-6 w-[97.5%]">
                    <h1 className="text-xl text-[#0050ff] font-bold">{projectTitle}</h1>
                    <h2 className="text-sm font-semibold font-montserrat">{roleTitle}</h2>

                    <p className="mt-10 font-montserrat text-sm leading-relaxed">{projectDescription}</p>
                </div>

            </div>
            <div className="w-[42.5%] h-[24rem]">
                <img className="w-full h-full object-cover" src={ projectImg } alt="" />
            </div>
        </div>
    )
}

export default ProjectCard