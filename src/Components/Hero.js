import React from 'react';
import { motion } from 'framer-motion';
import image from '../Images/img7.jpg';

const Hero = () => {
  const imageAnimation = {
    hidden: { opacity: 0, x: -50 }, // Initial state, hidden
    visible: { opacity: 1, x: 0 }, // Visible state
  };

  const textAnimation = {
    hidden: { opacity: 0, x: -50 }, // Initial state, hidden
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "linear",
        duration: 2,
        x: { duration: 1 },
      },
    }, // Visible state
  };

  return (
    <div>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-4">
            <div className='backgroundpaper'>
              <motion.img
                initial="hidden"
                animate="visible"
                variants={imageAnimation}
                transition={{ duration: 0.5 }}
                class="w-100 shadow"
                src={image}
                alt='herobg'
              />
            </div>
          </div>
          <div class="col-lg-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textAnimation}
              class="p-5 mt-4"
            >
              <h1 class="display-4 font-sans">About Us:</h1>
              <h3>Your Trusted Real Estate Partner</h3>
              <p class="lead">
                At Akproperties, we are passionate about helping you achieve
                your real estate goals. With a team of dedicated professionals,
                we offer a range of services tailored to meet your unique needs.
              </p>
              <a href="#y" class="btn btn-outline-dark">
                Read More
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
