
import { useEffect, useRef } from 'react'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Price from './components/Price'
import Sections from './components/Sections'
import Subscribe from './components/Subscribe'
import { motion,  useAnimation, useInView, useScroll, useTransform } from "framer-motion"

const parentVariants = {
  hidden: {opacity: 0}, show: {
    opacity: 1,
    transition: {
      staggerChildren:0.25
    }}
}

const childrenVariants = {
  hidden: {opacity: 0}, 
  show:{ opacity: 1}
}

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useScroll()
 
  const containerRef = useRef(null)
  
  const IsInView = useInView(containerRef, { once: true })
  const mainControls = useAnimation()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })


  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  )
  // const paragraphTwoValue = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["-100%", "0%"]
  // )

  useEffect(() => {
    if (IsInView) {
      mainControls.start("visible")
    }
  }, [IsInView, mainControls])
  

  return (

    <motion.div 
      variants={parentVariants}
      initial="hidden" 
      animate="show">
      <motion.div variants={childrenVariants} 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4}}
      >
        <Hero />
      </motion.div>
      <div ref={containerRef}>
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 75},
            visible: {
              opacity: 1,
              y: 0
            }
          }} 
          transition={{ delay: 0.5}}
          animate={mainControls} 
          initial="hidden"
          >
          <About />
        </motion.div>
        <motion.div 
          variants={childrenVariants} 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4}}
        >
          <Sections />
        </motion.div>
        <motion.div  
          variants={childrenVariants} 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4}}
        >
          <Partners />
        </motion.div>
        <motion.div  variants={childrenVariants}>
          <Price />
        </motion.div>
        <motion.div  variants={childrenVariants}>
          <Subscribe />
        </motion.div>
        <motion.div style={{ translateX: paragraphOneValue}} variants={childrenVariants}>
          <Footer />
        </motion.div>
      </div>
    </motion.div>
  
  )
}

export default App
