import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion'
import './contact.scss'

const ContactUs = () => {

    const [ messageStatus, setMessageStatus] = useState();
    const [ message, setMessage] = useState();

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
        
      emailjs
        .sendForm('service_yrvmme1', 'template_rsmjsoq', form.current, {
          publicKey: 'UyoDD-USBmHyvlcQL',
        })
        .then(
          () => {
            setMessageStatus(true)
          },
          (error) => {
            setMessage(false)
          },
        );
    };
  

    const variants = {
        initial: {
            opacity: 0,
            x: -100
        },

        animate: {
            opacity:1,
            x:0,
            transition:{
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    }

    const ref =useRef();

    const isInView = useInView(ref)

  return (
    <motion.div ref={ref} className='contact' variants={variants} initial="initial" whileInView="animate" id='Contact'>
        <motion.div className="contact-title-container"  variants={variants} initial="initial" whileInView="animate">
            <motion.h1  variants={variants}> Let's Work Together</motion.h1>
            <motion.div  variants={variants}>
                <h3>Mail</h3>
                <p>abdulgaffarefti66@gmail.com</p>
            </motion.div>
            <motion.div variants={variants}>
                <h3>Address</h3>
                <p>University of Dhaka, Shabag, Dhaka, Bangladesh</p>
            </motion.div>
            <motion.div variants={variants}>
                <h3>Phone / What's App</h3>
                <p>+8801988989204</p>
            </motion.div>
        </motion.div>


        <div className="contact-email-container">
            <motion.div className="phone-svg" initial={{opacity:1}} whileInView={{opacity:0, zIndex:-1}} transition={{duration:1, delay:2.7}}>
            
            <svg width="250px" height="250px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            
                <motion.path
                            initial = {{pathLength:0}}
                            whileInView = {isInView && {pathLength:1}}
                            transition = {{duration:2.5}}
                d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10" stroke="#" strokeWidth=".6" strokeLinecap="round"/>
                <motion.path
                            initial = {{pathLength:0}}
                            whileInView = {isInView && {pathLength:1}}
                            transition = {{duration:2.5}}
                d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="#" strokeWidth=".6" strokeLinecap="round"/>
                <motion.path 
                            initial = {{pathLength:0}}
                            whileInView = {isInView && {pathLength:1}}
                            transition = {{duration:2.4}}
                d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" stroke="#" strokeWidth=".6" strokeLinecap="round"/>
                
            </svg>
            </motion.div>

            <motion.form  ref={form} onSubmit={sendEmail} initial={{opacity:0}} whileInView={{opacity:1, zIndex:1}} transition={{duration:1, delay:2.6}}>
                <input type="text" name='user_name' required placeholder='Name' />
                <input type="email" name='user_email' required placeholder='Email' />
                <textarea name="message" id="message" rows={8} placeholder='Message'></textarea>
                <button>Send</button>
                {messageStatus? <p>Message sent successful!</p> : ''}
                {message? <p>Message sent successful!</p> : ''}
            </motion.form>
        </div>
    </motion.div>
  )
}

export default ContactUs
