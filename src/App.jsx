import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import { AnimatePresence } from "framer-motion"

function App() {
  return (
    <>
      <Nav></Nav>
      <AnimatePresence mode="wait">
        <Outlet></Outlet>
      </AnimatePresence>
    </>
  )
}

export default App
