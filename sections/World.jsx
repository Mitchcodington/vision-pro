'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={` relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >

     
      <TitleText
        title={(
          <>A sophisticated sensor array
          </>
        )}
        textStyles="text-center "
      />
      
      <p className='px-10  text-secondary-white text-[20px] mt-10 text-center'>A pair of <span className="font-extrabold text-white">high-resolution cameras</span> transmit over one billion pixels per 
          second to the displays so you can see the world around you clearly. 
          The system also helps deliver <span className="font-extrabold text-white">precise head and hand tracking</span> and <span className="font-extrabold text-white">
            real‑time 3
          D mapping</span>, all while understanding your hand gestures from a wide range of positions.
          </p>
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative sm:mt-[68px] -mt-[50px] flex w-full h-[550px] "
      >
        <img src="/spatial.png" alt="map" className="w-full h-full object-contain " />

       
      </motion.div>
    </motion.div>
  </section>
);
export default World;