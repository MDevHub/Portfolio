import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
  const navItems = ['About', 'Projects', 'Contact']
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={showNavbar ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="w-fit mx-auto mt-6 px-3 sm:px-6 py-2 rounded-full border border-[#CBACBF]/30 bg-[#01081b]/80 backdrop-blur-lg shadow-lg z-50 fixed top-6 left-1/2 transform -translate-x-1/2"
    >
      <ul className="flex gap-6 text-white text-[12px] sm:text-base font-medium">
        {navItems.map((item, index) => (
          <li key={index}>
            <ScrollLink
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              duration={1200}
              offset={-10}
              className="cursor-pointer hover:text-[#CBACBF] transition-colors duration-300"
            >
              {item}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Navbar
