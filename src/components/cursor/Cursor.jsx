import React from 'react'
import { animate, motion } from 'framer-motion'
import './cursor.scss'
import { useState } from 'react'
import { useEffect } from 'react'

const Cursor = () => {
    const [ position, setPosition ] = useState({x:0, y:0})

    useEffect(()=>{
        const mouseMove = (e)=>{
            setPosition({x:e.clientX, y:e.clientY})
        }
    
        window.addEventListener('mousemove', mouseMove)

        return ()=>{
            window.removeEventListener('mousemove', mouseMove)
        }
    },[])

  return (
    <motion.div className='cursor' animate={{x:position.x, y:position.y}}>
      
    </motion.div>
  )
}

export default Cursor
