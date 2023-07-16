'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn,  fadeIn, staggerContainer ,textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.xPaddings} bg-black pb-10 mt-20  sm:pl-8 pl-6`}>
    
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
         <img
          src="/herocover.png"
          alt="hero_cover"
          className="w-full sm:h-[410px] h-[110px] mt-7 object-cover z-10 relative"
        />
{/* rounded-2xl rounded-bl-[140px] */}
        </motion.h1>
       
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div>
        <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
     <h4 className='text-center text-[27px] font-bold text-white mt-10 tracking-widest'>Welcome to the era of spatial computing</h4> 
     
     <motion.p
     variants={fadeIn('up', 'tween', 0.2, 1)}
     className='mt-[20px] font-normal sm:text-[20px]
     text-[15px] tracking-wider text-center leading-relaxed text-secondary-white'
     >
       <span className="font-extrabold text-white">Apple Vision Pro </span> 
        seamlessly blends digital content with your physical space.
        <span className="font-extrabold text-white">
        You navigate 
        </span>{' '}
        simply by using your eyes, hands, and voice, So you can do the
         things you love in ways never before possible.
         You’ve never seen everything like this before.
         
       <span className="font-extrabold text-white"> Available early next year in the U.S. </span> 

       
     </motion.p>

    
    </motion.div>
    <div className='gradient-01'/>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;