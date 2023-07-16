'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');

  const handleNotifyClick = () => {
    setShowPopup(true);
  };

  const handleSendClick = () => {
    setEmail('');
    setShowPopup(false);
    alert('You will be notified once vision pro is available in your region');
  };

  const handleCloseClick = () => {
    setEmail('');
    setShowPopup(false);
  };

  return (
    <motion.nav
      variants={navVariants}
      className={`${styles.xPaddings} py-3 z-50 bg-white fixed w-full `}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}
      >
        <img
          src="/applelogo.png"
          alt="apple_logo"
          className="w-[27px] h-[27px] object-contain"
        />
        <button
          className="font-semibold tracking-widest bg-spa text-center border px-4 py-3 rounded-full text-white hover:bg-white hover:text-black"
          onClick={handleNotifyClick}
        >
          Notify me
        </button>
        
        {showPopup && (
          <div className="absolute top-1 right-1 bg-white  rounded-lg p-8">
           
            <div className='border border-gray-300'>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" p-2 outline-none "
            />
            <button
              className="bg-spa text-white px-4 py-2 font-bold tracking-widest "
              onClick={handleSendClick}
            >
              Notify me
            </button>
            <button
              className="absolute top-2 right-2"
              onClick={handleCloseClick}
            >
              <img
                src="/close-icon.png"
                alt="Close"
                className="w-4 h-4"
              />
            </button>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

