import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import './portfolio.scss'

const items = [
    {
        title:'Premium Landing Page',
        img:'/landing-page.png',
        url:'https://italian-food-landingpage.netlify.app/',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat beatae recusandae mollitia quas atque alias aperiam dolore repellat magni nesciunt unde quidem inventore."
    },
    {
        title:'Modern Business Website',
        img:'/modern-business.png',
        url:'https://modern-business-uiux.netlify.app/',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat beatae recusandae mollitia quas atque alias aperiam dolore repellat magni nesciunt unde quidem inventore."
    },
    {
        title:'Stripe Website Clone',
        img:'/stripe.png',
        url:'https://stripe-web-app1.netlify.app/',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat beatae recusandae mollitia quas atque alias aperiam dolore repellat magni nesciunt unde quidem inventore."
    },
    {
        title:'Modern UI/UX',
        img:'/modern-uiux.png',
        url:'https://modern-uiux-restaurant.netlify.app/',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat beatae recusandae mollitia quas atque alias aperiam dolore repellat magni nesciunt unde quidem inventore."
    },
]

const ItemSection =({item})=>{

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target:ref, 
        offset: ["end start", "start end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-600, 600])

    return <section>
            <div className="item-container"  ref={ref}>
                <div className="image-container">
                    <img src={item.img} alt="Website" />
                </div>
                <motion.div className="text-container" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.info}</p>
                    <a href={item.url} target="_blank"><button>See Demo</button></a>
                </motion.div>
            </div>
    </section>
}

const Portfolio = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({ 
        target:ref,
        offset:['end end', 'start start']
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:30
    });

  return (
    <div className='portfolio' ref={ref}>
      <div className="feature-container">
        <h1>Featured Works</h1>
        <motion.div className='progressBar' style={{scaleX}}></motion.div>
      </div>
      {items.map((item, index)=><ItemSection key={index} item={item}/>)}
    </div>
  )
}

export default Portfolio
