import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import foto1 from '../assets/images/website1.png'

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className='bg-[#e6dace] min-h-screen mt-24 lg:mt-28'
    >
      <div className='flex flex-col items-center py-20 w-11/12 lg:w-1/2 mx-auto'>

        <span className='flex items-center'>
          <span className="h-4 w-4 bg-[#0050ff]"></span>
          <h1 className='ml-2 text-4xl font-bold'>Projects</h1>
        </span>

        <p className='mt-10 lg:mt-16 text-center w-11/12  mx-auto font-montserrat leading-relaxed'>This is a compilation of projects that I've crafted while pursuing my journey to become a frontend developer. Each project serves as a testament to my progression in mastering the skills of creating engaging and functional user interfaces. From simple applications to more intricate endeavors, each one reflects my dedication and creativity in delivering innovative and effective solutions.</p>

        <section className='mt-14 lg:mt-20 w-full flex flex-col gap-14'>
          <ProjectCard
            projectTitle="Xanzu Portfolio"
            roleTitle="Frontend Developer"
            projectDescription="Crafted with meticulous care and precision by Rafee Fajri, this personal portfolio website reflects a blend of passion and expertise, tailored to showcase my unique journey and talents."
            projectImg={foto1}
            projectLink="https://xanzu-portofolio.vercel.app/"
          ></ProjectCard>
        </section>
      </div>
      <Footer></Footer>
    </motion.div>
  )
}

export default Projects