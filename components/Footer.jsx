'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
        When it comes to privacy,<br/> we don’t blink.
        </h4>
        <p className='text-secondary-white'><span className='font-bold text-white'>Privacy and security built in.</span> Like every Apple 
          product and service, Vision Pro was designed to help 
          protect your privacy and keep you in control of your data. 
          It builds on the foundation of existing Apple privacy and 
          security features with new technologies like Optic ID, 
          a secure authentication system that uses the uniqueness 
          of your iris.</p>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src="/lock.png"
            alt="headset"
            className="w-[34px] h-[34px] object-contain"
          />
          <span className="tracking-widest text-[16px] font-bold text-white">
            PRIVACY
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className='pb-10 flex flex-col items-center'>
    <h2 className='font-bold text-white tracking-widest'>Disclaimer:</h2>
    <p className='text-center text-secondary-white tracking-wider leading-relaxed text-[15px]'>
      This website is an unofficial 
      platform dedicated to Apple Vision 
      Pro and is not affiliated with or 
      endorsed by Apple Inc. The information 
      provided here is based on publicly available 
      sources and is subject to change. I do not 
      guarantee the accuracy or completeness of the 
      content. Users should independently verify 
      any information before making decisions 
      or purchases.</p>
      <p className='tracking-widest text-white text-[12px] underline'> <a href='https://mitchellamewieye.info/' target='_blank'>Site by: Mitchell Amewieye</a></p>
    </div>
        <div className="flex items-center justify-between flex-wrap gap-4">
        <div  className="flex items-center  rounded-[32px] gap-[12px]">
          <img
            src="/applepro.png"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="tracking-widest text-[17px] font-bold text-white">
            VISION PRO
          </span>
        </div>
          <p className="font-normal tracking-widest  text-[16px] text-white opacity-50">
          Copyright © 2023 Apple Inc. All rights reserved.
          </p>

          <div className="flex gap-4">
          <p className='text-secondary-white tracking-widest'> call 1-800-MY-APPLE. </p>
          </div>
        </div>
      </div>
    </div>
   
  </motion.footer>
);

export default Footer;