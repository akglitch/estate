import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.8 } },
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="bg-gray-100 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Your Trusted Real Estate Partner</h2>
          <p className="text-gray-600 mt-4">
            At [Your Real Estate Company], we are passionate about helping you achieve your real estate goals. With a team of dedicated professionals, we offer a range of services tailored to meet your unique needs.
          </p>
        </div>

        <motion.div
          className="mt-8"
          variants={serviceCardVariants}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
          <p className="text-gray-600 mt-4">
            Our mission is to simplify the real estate process, providing you with exceptional service and expert guidance every step of the way.
          </p>
        </motion.div>

        <motion.div
          className="mt-8"
          variants={serviceCardVariants}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Our Team</h3>
          <p className="text-gray-600 mt-4">
            Meet the experienced professionals who make up our team. Each member brings a unique set of skills and local knowledge to the table.
          </p>
        </motion.div>

        <motion.div
          className="mt-8"
          variants={serviceCardVariants}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Local Experts</h4>
              <p className="text-gray-600 mt-2">
                We have deep roots in the communities we serve, giving us unmatched insight into local real estate trends.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Client-Centric</h4>
              <p className="text-gray-600 mt-2">
                Your satisfaction is our top priority. We work tirelessly to ensure your real estate journey is smooth and successful.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Innovation</h4>
              <p className="text-gray-600 mt-2">
                We embrace the latest technology and marketing strategies to give you a competitive edge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Results-Driven</h4>
              <p className="text-gray-600 mt-2">
                Our track record speaks for itself. We've helped countless clients achieve their real estate goals.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8"
          variants={serviceCardVariants}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Community Involvement</h3>
          <p className="text-gray-600 mt-4">
            We believe in giving back to the communities we serve. Learn more about our community involvement and initiatives.
          </p>
        </motion.div>

        <motion.div
          className="mt-8"
          variants={serviceCardVariants}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Buying a Home</h4>
              <p className="text-gray-600 mt-2">
                We'll help you find the perfect home, negotiate the best deal, and guide you through the entire buying process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Selling a Home</h4>
              <p className="text-gray-600 mt-2">
                Our expert marketing strategies will ensure your property gets maximum exposure and the best possible sale price.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Investment Properties</h4>
              <p className="text-gray-600 mt-2">
                Explore lucrative investment opportunities with our help, whether you're a seasoned investor or a first-time buyer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Property Management</h4>
              <p className="text-gray-600 mt-2">
                Let us handle the day-to-day responsibilities of property management, so you can enjoy passive income.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
