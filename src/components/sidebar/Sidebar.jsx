import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
import './sidebar.scss'

const Sidebar = () => {

  const [ open, setOpen ] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition : {
        type: "spring",
        stiffness: 20,
      }
    },
    close: {
      clipPath: "circle(30px at 50px 47px)",
      transition : {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    }
  }



  return (
    <motion.div className='sidebar' animate={open? "open" : "close"}>
      <motion.div className="bg" variants={variants}>
        <Links data={setOpen}/>
      </motion.div>
      <ToggleButton data={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
