import React from 'react'
import { motion } from 'framer-motion'
import './about.scss'

const About = () => {

    const variants = {
        initial: {
            x:-340,
            opacity:0
        },
        animate: {
            x:0,
            opacity:1,
            transition: {
                duration:1.2,
                staggerChildren: 0.1,
            },
        }
    }


  return (
    <div className='about'>
        <h1>About Me</h1>
        <div className='wrapper'>
            <motion.div className="title-container" variants={variants} initial='initial' whileInView='animate'>
                <h2><s style={{color:"orangered", fontSize:"30px"}}>This is</s> <span className='stroke-text'>Abdul Gaffar</span></h2>
                <motion.div className="academy" variants={variants} initial='initial' whileInView='animate'>
                    <h3>Academic Qualifications & Others 🎓</h3>
                    <p>BA Hons, Faculty of Arts, University of Dhaka</p>
                    <p>Nationality : Bangladeshi</p>
                    <p>Religion : Islam</p>
                    <div>
                        <a href="/resume.pdf" download>Download My CV</a>
                    </div>
                </motion.div>

                <motion.div className="myself"  variants={variants} initial='initial' whileInView='animate'>
                    <h3>About Myself </h3>
                    <p>⭐Don't worry! I’m here a BUSINESS-ORIENTED-GUY who knows how to design intuitive user-friendly website elements that boost your online visibility and increase conversions.</p>
                    <p>⭐I'm a confident & industrious person I can do whatever I want and I'm passionate about my task.</p>
                    <p>⭐I'm an open-growth-minded & business oriented guy that's way I know how to design a lucrative, eye-catching web that can make you beneficiary.</p>
                </motion.div>
            </motion.div>

            <div className="img-container" >
                <div className='image'>
                    <img src="/gaffar.png" alt="Mr Gaffar" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
