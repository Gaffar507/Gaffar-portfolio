import React from 'react'
import {  motion } from 'framer-motion'
import './hero.scss'


const Hero = () => {
    const textVariants = {
        initial: {
            x: -340,
            opacity: 0,
        },
        animate:{
            x:0,
            opacity:1,
            transition: {
                duration:1.1,
                staggerChildren: 0.1,
            },
        },

        scrollButton: {
            opacity:0,
            y:10,
            transition:{
                duration: 2.5,
                repeat: Infinity,
            }
        }
    }

    const textSlide = {
        initial: {
            x:0,
        },
        animate:{
            x:"-220%",
            transition:{
                repeat:Infinity,
                repeatType: "mirror",
                duration:20,
            },
        },
    }


  return (
    <div className='hero'>
      <motion.div className="wrapper">
        <motion.div className="hero-text" variants={textVariants} initial="initial" whileInView="animate">
                <motion.h2 >ABDUL GAFFAR</motion.h2>
                <motion.h1 className='stroke-text' >Web Developer And Entrepreneur</motion.h1>
                <motion.div className="buttons">
                    <a href="#Projects" className='btn1'>See the latest Works</a>
                    <a href="#Contact" className='btn2'>Contact Me</a>
                </motion.div>
                <motion.img  variants={textVariants} src="/scroll.png" alt="scroll" animate="scrollButton" />
        </motion.div>

        <div className="hero-image" >
            <img src="/hero.png" alt="hero" />
        </div>
      </motion.div>

      <motion.div className="slideText" variants={textSlide} initial="initial" animate="animate">
            Writer Content Creator Influencer
        </motion.div>
    </div>
  )
}

export default Hero
