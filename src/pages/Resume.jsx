import { motion } from 'framer-motion'
import ResumeCard from '../components/ResumeCard'
import Footer from '../components/Footer'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className='bg-[#e6dace] min-h-screen'
    >

      <div className='flex flex-col items-center py-20 w-[48%] mx-auto'>

        <span className='flex items-center'>
          <span className="h-4 w-4 bg-[#0050ff]"></span>
          <h1 className='ml-2 text-4xl font-bold'>Resume</h1>
        </span>

        <section className='mt-20 w-full flex flex-col gap-14'>
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

          <div className='w-full bg-white py-20 px-12 mt-8 shadow-[-12px_12px_25px_0_rgba(138,131,124,0.23)]'>
            <div>
              <h2 className='text-2xl font-bold'>Professional skillset</h2>
              <ul className='mt-8 capitalize flex flex-wrap gap-x-16 gap-y-7 text-sm font-light font-montserrat'>
                <li className='flex items-center w-52'>
                  <span className="h-3 w-3 bg-[#0050ff]"></span>
                  <p className='ml-2'>problem solving</p>
                </li>
                <li className='flex items-center w-52'>
                  <span className="h-3 w-3 bg-[#0050ff]"></span>
                  <p className='ml-2'>Entrepreneurial Mindset</p>
                </li>
                <li className='flex items-center w-52'>
                  <span className="h-3 w-3 bg-[#0050ff]"></span>
                  <p className='ml-2'>Teamwork & Collaboration</p>
                </li>
              </ul>
            </div>
            <div className='mt-20'>
              <h2 className='text-2xl font-bold'>Languages</h2>
              <ul className='mt-8 flex flex-wrap gap-x-16 gap-y-7 text-sm font-light font-montserrat'>
                <li className='flex items-center w-52'>
                  <span className="h-3 w-3 bg-[#0050ff]"></span>
                  <p className='ml-2'>Indonesia (native)</p>
                </li>
                <li className='flex items-center w-52'>
                  <span className="h-3 w-3 bg-[#0050ff]"></span>
                  <p className='ml-2'>English (less fluent)</p>
                </li>
              </ul>
            </div>
          </div>

        </section>
      </div>
      <Footer></Footer>
    </motion.div>
  )
}

export default Resume