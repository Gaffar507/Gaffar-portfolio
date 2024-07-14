import React from 'react'
import { motion } from 'framer-motion'
import './services.scss'

const Services = () => {

    const items = [
        {
            title:'Web Design',
            info: "We are providing fixel-perfect, eye-catching website which is able to take a lot of consumers' attention. That's way it would be huge impactful for your business to get lead."
        },
        {
            title:'UI/UX Design',
            info: "In today's global booming world, everything is operating through website like business or any other activities. So, in this case, we know website is mandatory for world communication. "
        },
        {
            title:'Customer Engaging',
            info: "It's all our responsibilities to make you sure that your intention and business wouldn't be spoiled. We are commited to making more customer engagement methodology through website."
        },
        {
            title:'Services Proving',
            info: "Don't worry, we are here to resolve any kind of problem you have related to your business and website. We are commited to providing you a better service."
        },
    ]

    const variants = {
        initial: {
            opacity: 0,
            x:-340
        },
        animate: {
            opacity:1,
            x:0,
            transition: {
                staggerChildern: 0.1,
                duration: 1.1 
            }
        }
    }


  return (
    <motion.div className='services' variants={variants} initial="initial" whileInView='animate' >
      <motion.div variants={variants} className="text-container">
        <p>I focus on helping your brand grow <br /> and move forward</p>
        <hr />
      </motion.div>

      <motion.div variants={variants} initial="initial" whileInView='animate'  className="title-container">
        <div>
            <img src="/people.webp" alt="meeting" />
            <h1><span> Unique </span> Ideas </h1>
        </div>
        <div>
            <h1><span> For Your </span> Business. </h1>
            <button>What we do?</button>
        </div>
      </motion.div>

      <motion.div initial="initial" whileInView='animate'  className="list-container">
        {items.map((item, index)=>
            <div key={index} className='item'>
                <h3>{item.title}</h3>
                <p>{item.info}</p>
                <button>Go</button>
            </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Services;
