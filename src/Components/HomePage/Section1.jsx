import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

      const fadeUp = {
      hidden: { opacity: 0, y: 30 },
      visible: (i = 1) => ({
         opacity: 1,
         y: 0,
         transition: {
            delay: i * 0.2,
            duration: 0.9,
            ease: 'easeOut',
         },
      }),
      }

      const Section1 = () => {
      return (
         <div className="relative min-h-screen max-h-screen border-0 text-[#CBACBF] text-center bg-grid ">
            {/* Overlay */}
            <div className="absolute bg-gradient-to-b from-transparent to-[#01081b] inset-0 z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center min-h-screen space-y-4 px-4 pt-50 ">
               <motion.p
                  className="font-semibold text-xs sm:text-sm text-[#d8d6d6]"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={1}
               >
                  MUSBAUDEEN A.B PORTFOLIO
               </motion.p>
               
               {/* Glowing circle expanding from center on page load */}
               <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 1.8, ease: 'easeOut' }}
                  className="absolute left-0 top-[25%] -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-[#040d27] blur-[50xl] z-0"
               />

               {/* Glowing circle expanding from center on page load */}
               <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 1.8, ease: 'easeOut' }}
                  className="absolute right-0 top-[100%] sm:top-[90%] -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-[#040d27] blur-30xl z-0"
               />

               {/* Glowing circle expanding from center on page load */}
               <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 1.8, ease: 'easeOut' }}
                  className="absolute left-0 top-[100%] sm:top-[90%] -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-[#040d27] blur-30xl z-0"
               />

               <motion.h1
                  className="text-3xl md:text-4xl lg:text-[3.5rem] font-bold text-white leading-normal"
                  initial="hidden"
                  animate="visible"
               >
                  <motion.span
                     className="inline-block"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2, duration: 0.6 }}
                  >
                     Transforming&nbsp;
                  </motion.span>

                  <motion.span
                     className="inline-block"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.4, duration: 0.6 }}
                  >
                     Concepts
                  </motion.span>

                  <br />

                  <motion.span
                     className="inline-block"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.6, duration: 0.6 }}
                  >
                     into&nbsp;
                  </motion.span>

                  <motion.span
                     className="inline-block"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.8, duration: 0.6 }}
                  >
                     Seamless
                  </motion.span>

                  <span className="text-[#CBACBF]">
                     <motion.span
                        className="inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                     >
                        &nbsp;User
                     </motion.span>

                     <br />

                     <motion.span
                        className="inline-block z-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                     >
                        Experiences
                     </motion.span>
                  </span>
               </motion.h1>

               <motion.p
                  className="text-[#d8d6d6] text-xs md:text-xl z-20"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={3}
               >
                  HI, I'm Abdulrahman a Frontend Engineer
               </motion.p>

               {/* Button with traced border stroke */}
               <motion.div
                  className="relative inline-block mt-7"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={4}
               >
                  {/* SVG stroke border */}
                  <svg
                     className="absolute inset-0 w-full h-full z-0"
                     viewBox="0 0 200 60"
                     preserveAspectRatio="none"
                  >
                     <rect
                        x="2"
                        y="2"
                        width="196"
                        height="56"
                        rx="12"
                        ry="12"
                        stroke="#CBACBF"
                        strokeWidth="0.5"
                        fill="transparent"
                     />
                     <rect
                        x="2"
                        y="2"
                        width="196"
                        height="56"
                        rx="12"
                        ry="12"
                        stroke="#3a0bbd"
                        strokeWidth="0.5"
                        fill="none"
                        strokeDasharray="200"
                        strokeDashoffset="200"
                        className="animate-borderstroke"
                     />
                  </svg>

                  {/* Actual button content */}
                  <Link to="projects" smooth={true} duration={1000} offset={-10}>
                     <button
                        className="rounded-4xl cursor-pointer outline-0 border-0 relative z-10 w-[180px] sm:w-[240px] h-[50px] flex items-center justify-center gap-2 text-sm sm:text-base text-[#d8d6d6] font-medium"
                     >
                           Show my work
                        <FaTelegramPlane className="text-lg" />
                     </button>
                  </Link>
               </motion.div>
            </div>

            {/* Animation styles */}
            <style>{`
               @keyframes borderstroke {
                  0% {
                     stroke-dashoffset: 500;
                  }
                  100% {
                     stroke-dashoffset: 0;
                  }
               }

               .animate-borderstroke {
                  animation: borderstroke 3s linear infinite;
               }
            `}</style>
         </div>
      )
}

export default Section1
