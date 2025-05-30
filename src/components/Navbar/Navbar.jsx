import React from 'react'
import { motion } from 'framer-motion'
import './navbar.scss'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* slide */}
        <Sidebar/>
        
      <div className="wrapper">
        <motion.span
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
        >Developer Gaffar</motion.span>

        <div className="social">
            <a href="https://www.facebook.com/Millionaire66" target='_blank'><img src="/face.png" alt="facebook" /></a>
            <a href="#"><img src="/instagram.png" alt="instagram" /></a>
            <a href="#"><img src="/youtube.png" alt="youtube" /></a>
            <a href="https://www.linkedin.com/in/developer-gaffar" target='_blank'><img src="/r.png" alt="linkedIn" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
