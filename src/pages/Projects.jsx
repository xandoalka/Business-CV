import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className='bg-[#e6dace] min-h-screen'
    >
      <div className='flex flex-col items-center py-20 w-1/2 mx-auto'>

        <span className='flex items-center'>
          <span className="h-4 w-4 bg-[#0050ff]"></span>
          <h1 className='ml-2 text-4xl font-bold'>Projects</h1>
        </span>

        <p className='mt-16 text-center w-11/12  mx-auto font-montserrat leading-relaxed'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>

        <section className='mt-20 w-full flex flex-col gap-14'>
          <ProjectCard
            projectTitle="Project Title"
            roleTitle="Role Title"
            projectDescription="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
            projectImg="https://static.wixstatic.com/media/11062b_6369a82539704f78b4fffed0ef058629~mv2_d_2346_1998_s_2.jpg/v1/crop/x_242,y_0,w_1590,h_1993/fill/w_290,h_364,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Leaflet.jpg"
          ></ProjectCard>
          <ProjectCard
            projectTitle="Project Title"
            roleTitle="Role Title"
            projectDescription="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
            projectImg="https://static.wixstatic.com/media/11062b_6369a82539704f78b4fffed0ef058629~mv2_d_2346_1998_s_2.jpg/v1/crop/x_242,y_0,w_1590,h_1993/fill/w_290,h_364,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Leaflet.jpg"
          ></ProjectCard>
        </section>
      </div>
      <Footer></Footer>
    </motion.div>
  )
}

export default Projects