   import React from 'react'
   import { FaArrowRight } from 'react-icons/fa'
   import elexy from '../assets/Images/elexyImg.png'
   import plant2 from '../assets/Images/plant2Img.png'
   import vodi from '../assets/Images/vodiImg.png'
   import bloom from '../assets/Images/bloomImg.png'
   import wengdo from '../assets/Images/wengdoImg.png'
   import next from '../assets/Images/nextImg.png'

   const projects = [
   {
      img: elexy,
      title: 'Elexy Store',
      desc: 'An elegant online store powered by a clean and intuitive interface.',
      link: 'https://elexy-store.vercel.app',
   },
   {
      img: plant2,
      title: 'Plant2wellness',
      desc: 'A herbal solution hub powered by Plant2wellness.',
      link: 'https://plant2wellness.com',
   },
   {
      img: vodi,
      title: 'Vodi Movie',
      desc: 'A comprehensive movie database to explore films by different genres.',
      link: 'https://vodimovieweb.vercel.app',
   },
   {
      img: bloom,
      title: 'Bloom Clinic',
      desc: 'A clean and modern website for a medical clinic.',
      link: 'https://bloom-clinic-navy.vercel.app',
   },
   {
      img: wengdo,
      title: 'Wengdo Food Hub',
      desc: 'Delicious meals with a seamless digital dining experience.',
      link: 'https://wengdomeals.vercel.app',
   },
   {
      img: next,
      title: 'Next Move',
      desc: 'Smooth animations and transitions with seamless navigation.',
      link: 'https://nextmoveonly.vercel.app',
   },
   ]

   const Section4 = () => {
   return (
      <div className="bg-[#01081b] px-3 md:px-6">
         <div className="pt-20 md:pt-30">
        ` <h1 className="text-white text-sm sm:text-xl text-left font-semibold">
            A small selection of my recent <span className="text-[#CBACBF]">projects</span>
         </h1>`

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
            {projects.map((project, idx) => (
               <div
               key={idx}
               className="relative group border border-[#CBACBF]/30 h-[60vh] sm:h-70vh md:h-screen overflow-hidden rounded-3xl"
               >
               {/* Image with hover scale */}
               <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
               />

               {/* Sliding content on hover */}
               <div className="absolute bottom-0 left-0 w-full h-[15vh] sm:h-[20vh] backdrop-blur-3xl bg-black/60 text-white px-5 py-3 sm:py-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                  <div className="flex gap-5 items-center mb-2">
                     <h2 className="text-lg sm:text-xl md:text-3xl">{project.title}</h2>
                     <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full backdrop-blur-sm bg-transparent hover:bg-black/5 transition"
                     >
                     <FaArrowRight className="text-white text-lg rotate-315" />
                     </a>
                  </div>
                  <p className="text-sm">{project.desc}</p>
               </div>
               </div>
            ))}
         </div>
         </div>
      </div>
   )
   }

   export default Section4
