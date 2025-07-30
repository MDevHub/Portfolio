import React, { useState, useEffect, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import elexy from '../../assets/Images/elexyImg.png'
import plant2 from '../../assets/Images/plant2Img.png'
import vodi from '../../assets/Images/vodiImg.png'
import bloom from '../../assets/Images/bloomImg.png'
import wengdo from '../../assets/Images/wengdoImg.png'
import next from '../../assets/Images/nextImg.png'

const projects = [
   { img: elexy, title: 'Elexy Store', desc: 'An elegant online store powered by a clean and intuitive interface.', link: 'https://elexy-store.vercel.app' },
   { img: plant2, title: 'Plant2wellness', desc: 'A herbal solution hub powered by Plant2wellness.', link: 'https://plant2wellness.com' },
   { img: vodi, title: 'Vodi Movie', desc: 'A comprehensive movie database to explore films by different genres.', link: 'https://vodimovieweb.vercel.app' },
   { img: bloom, title: 'Bloom Clinic', desc: 'A clean and modern website for a medical clinic.', link: 'https://bloom-clinic-navy.vercel.app' },
   { img: wengdo, title: 'Wengdo Food Hub', desc: 'Delicious meals with a seamless digital dining experience.', link: 'https://wengdomeals.vercel.app' },
   { img: next, title: 'Portfolio V1', desc: 'Smooth animations and transitions with seamless navigation.', link: 'https://abdulrahmanportfolio-tau.vercel.app' },
]

const Section4 = () => {
   const [visibleIdx, setVisibleIdx] = useState(null)
   const containerRefs = useRef([])

   useEffect(() => {
   const isMobile = window.innerWidth < 768
   if (!isMobile) return

   const observer = new IntersectionObserver(
      (entries) => {
         entries.forEach((entry) => {
            const idx = parseInt(entry.target.getAttribute('data-idx'))

            if (entry.isIntersecting) {
               setVisibleIdx(idx)
            } else if (visibleIdx === idx) {
               setVisibleIdx(null)
            }
         })
      },
      { threshold: 0.5 }
   )

   containerRefs.current.forEach((el, idx) => {
      if (el) {
         el.setAttribute('data-idx', idx)
         observer.observe(el)
      }
   })

   return () => observer.disconnect()
}, [visibleIdx]) // 👈 Add this so it reacts to changes

   return (
      <div id='projects' className="bg-[#01081b] px-4 md:px-6 lg:px-8 xl:px-10 ">
         <div className="py-[80px] md:py-[150px]">
            <h1 className="text-white text-sm sm:text-xl text-left font-semibold">
               A small selection of my recent <span className="text-[#CBACBF]">projects</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
               {projects.map((project, idx) => (
                  <div
                     key={idx}
                     ref={(el) => (containerRefs.current[idx] = el)}
                        className="relative group border border-[#CBACBF]/30 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] overflow-hidden rounded-3xl"
                  >
                     {/* Image */}
                     <img
                        src={project.img}
                        alt={project.title}
                        className={`
                           w-full h-full object-cover transform transition-transform duration-700 ease-in-out
                           group-hover:scale-105
                           ${visibleIdx === idx ? 'scale-105' : ''}
                        `}
                     />

                     {/* Sliding Content */}
                     <div
                        className={`
                           absolute bottom-0 left-0 w-full h-[18vh] sm:h-[20vh] backdrop-blur-xl bg-black/50 text-white px-3 md:px-5 py-3 
                           transition-transform duration-700 ease-in-out
                           ${visibleIdx === idx ? 'translate-y-0' : 'translate-y-full'}
                           sm:group-hover:translate-y-0
                        `}
                     >
                        <div className="flex gap-4 sm:gap-5 items-center sm:mb-2">
                           <h2 className="text-[16px] sm:text-xl md:text-3xl">{project.title}</h2>
                           <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full backdrop-blur-sm bg-black/10 hover:bg-black/5 transition"
                           >
                              <FaArrowRight className="text-white text-lg rotate-315" />
                           </a>
                        </div>
                        <p className="text-[12px] sm:text-sm">{project.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Section4