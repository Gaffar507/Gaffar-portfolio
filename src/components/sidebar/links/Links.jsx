import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  }
}

const itemVarients = {
  open: {
    y: 0,
    opacity:1,
  },
  close: {
    y:50,
    opacity: 0
  },
}

const Links = ({data}) => {

  const links = ["Homepage", "Services", "Portfolio", "About", "Contact"]

  return (
    <motion.div className='links' variants={variants}>
      {links.map((link, index)=>
        <motion.a href={`#${link}`} onClick={()=>data((pre)=>!pre)} key={index} variants={itemVarients} whileHover={{scale:1.1}} whileTap={{scale:0.95}} >{link}</motion.a>
      )}
    </motion.div>
  )
}

export default Links
