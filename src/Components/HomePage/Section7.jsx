import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaAt } from 'react-icons/fa'
import {
   SiReact,
   SiTypescript,
   SiJavascript,
   SiTailwindcss,
   SiBootstrap,
   SiHtml5,
   SiCss3,
   SiFirebase,
   SiPostman
} from 'react-icons/si'
import ContactImg from '../../assets/Images/anime.jpg'
import { motion } from 'framer-motion'

   const techStack = [
      { Icon: SiReact, color: '#61DAFB', name: 'ReactJs' },
      { Icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
      { Icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
      { Icon: SiTailwindcss, color: '#38B2AC', name: 'TailwindCSS' },
      { Icon: SiBootstrap, color: '#7952B3', name: 'Bootstrap' },
      { Icon: SiHtml5, color: '#E44D26', name: 'HTML5' },
      { Icon: SiCss3, color: '#1572B6', name: 'CSS' },
      { Icon: SiFirebase, color: '#FFCA28', name: 'Firebase' },
      { Icon: SiPostman, color: '#FF6C37', name: 'RestAPI' },
   ];

const Section7 = () => {
   return (
      <div id='contact' className="bg-[#01081b] text-white px-3 md:px-6 py-16 pb-5 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
         {/* Left Side */}
         <div className="relative border-b border-l border-l-[#CBACBF]/30 border-b-[#CBACBF]/30 rounded-4xl md:col-span-2 p-6 md:p-10 flex flex-col justify-between gap-8">
            <div className="space-y-8">
               <p className="text-xs sm:text-sm font-light opacity-70">
                  I develop human-centered products with unique modern experiences.
               </p>
               <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white">
                  Craft your <span className='text-[#CBACBF] '>imaginations</span> <br /> to life.
               </h2>
               <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                 As a front-end developer, my daily canvas stretches across the vast and intricate web. I breathe life into static 
                 designs, knitting pixels into interactive masterpieces that dance at the click of your fingertips. I am the 
                 bridge between art and functionality, ensuring that every user journey is seamless and aesthetically pleasing.
               </p>
            </div>

            {/* Icons */}
            <div className="flex gap-4 flex-wrap">
               {techStack.map(({ Icon, color, name }, idx) => (
                  <div
                     key={idx}
                     className="w-13 h-13 flex items-center justify-center bg-white rounded-2xl border border-[#CBACBF]/30 hover:scale-110 transition-transform"
                     title={name}
                  >
                  <Icon className="text-3xl" style={{ color }} />
                  </div>
               ))}
            </div>
            {/* Glowing circle tracer */}
            <div className="absolute inset-0 pointer-events-none">
            <span className="z-0  animate-glow-circle absolute w-16 h-16 rounded-full blur-3xl " />
            </div>
         </div>

         <style>{`
            @keyframes glow-circle {
               0%   { top: 0; left: 0; transform: none; }
               25%  { top: 0; left: 100%; transform: translateX(-100%); }
               50%  { top: 100%; left: 100%; transform: translate(-100%, -100%); }
               75%  { top: 100%; left: 0; transform: translateY(-100%); }
               100% { top: 0; left: 0; transform: none; }
            }

            .animate-glow-circle {
               animation: glow-circle 20s linear infinite;
               background: #5130c9;
               // box-shadow: 0 0 20px #CBACBF;
            }
         `}</style>

         {/* Right Side */}
         <div className="bg-gradient-to-b from-[#082061] to-[#5130c9] md:col-span-1 border-b border-b-[#CBACBF]/30 border-l-[#CBACBF]/30 rounded-4xl p-6 md:p-10 relative overflow-hidden">
            <div className="space-y-2">
               <h2 className="text-xl md:text-3xl font-semibold text-white">Contact me</h2>
               <p className="text-sm sm:text-base opacity-90 max-w-md">
                  Make a connection via email or any, let’s build something extraordinary together.
               </p>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-3 items-end md:gap-3 mt-8'>
               {/* Left: Social Icons */}
               <div className='flex md:flex-col col-span-1 gap-2'>
                  {[FaTwitter, FaLinkedin, FaGithub, FaAt].map((Icon, idx) => (
                     <div
                     key={idx}
                     className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-transparent text-[white] rounded-xl border border-[#CBACBF]/30 hover:scale-110 transition-transform"
                     >
                     <Icon className="text-xl sm:text-3xl" />
                     </div>
                  ))}
               </div>

               {/* Right: Jumping Image */}
               <div className="col-span-2 flex ">
                  <motion.img
                     src={ContactImg}
                     alt="Contact Animation"
                     className="sm-w-44 md:w-50 lg:w-60 object-contain object-bottom"
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Section7
