import Footer from "../components/Footer"
import Hero from "../components/Hero"
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
      <Hero></Hero>
      <Footer></Footer>
    </motion.div>
  )
}

export default About