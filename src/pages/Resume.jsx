import { motion } from 'framer-motion'
import ResumeCard from '../components/ResumeCard'
import Footer from '../components/Footer'
import ProfesionalCard from '../components/ProfesionalCard'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className='bg-[#e6dace] min-h-screen mt-24 lg:mt-28'
    >

      <div className='flex flex-col items-center py-20 w-11/12 lg:w-[48%] mx-auto'>

        <span className='flex items-center'>
          <span className="h-5 w-5 lg:h-4 lg:w-4 bg-[#0050ff]"></span>
          <h1 className='ml-2 text-4xl font-bold'>Resume</h1>
        </span>

        <section className='mt-20 w-full flex flex-col gap-10 lg:gap-14'>
          <div className='flex justify-between'>
            <h2 className='text-2xl font-bold'>Education</h2>
            <a className="w-40 text-center uppercase text-sm font-semibold font-montserrat py-2 border border-[#0050ff] bg-[#0050ff] rounded-3xl text-white transition-all duration-200 ease-linear hover:bg-white hover:text-[#0050ff]" href="#">Download CV</a>
          </div>

          <ResumeCard
            years="2019 - 2022"
            schoolNameOrJobPosition="Smk Negeri 3 Metro"
            majorOrCompanyName="Software Engineering"
            location="Metro, Lampung"
            description="SMK Negeri 3 Metro adalah lembaga pendidikan menengah kejuruan di Metro, Indonesia. Terkenal dengan program keahlian yang sesuai industri. Menyediakan fasilitas dan pengajar berkualitas untuk persiapan karier siswa."
          ></ResumeCard>
          <ResumeCard
            years="2016 - 2019"
            schoolNameOrJobPosition="Smp negeri 1 rawajitu selatan"
            majorOrCompanyName="Junior High School"
            location="Tulangbawang, Lampung"
            description="
            SMP Negeri 1 Rawajitu Selatan adalah sekolah men engah pertama di Rawajitu Selatan, Indonesia, menawarkan pendidikan berkualitas dengan fasilitas modern dan lingkungan belajar yang kondusif. Menekankan pada pengembangan akademik dan karakter siswa."
          ></ResumeCard>
          
          <ProfesionalCard></ProfesionalCard>

        </section>
      </div>
      <Footer></Footer>
    </motion.div>
  )
}

export default Resume