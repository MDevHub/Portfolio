import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const phases = [
   {
      title: 'Planning & Strategy',
      text: 'We’ll work together to understand your goals, audience, and define the key content your website should include.',
   },
   {
      title: 'Development & Progress',
      text: 'Once the plan is set, I dive into code with regular progress updates from sketches to final design.',
   },
   {
      title: 'Execution & Delivery',
      text: 'I build your project from the ground up using clean, scalable code and ensure it’s optimized across all devices.',
   },
]

const Section5 = () => {
   const [visibleIdx, setVisibleIdx] = useState(null)
   const [isMobile, setIsMobile] = useState(false)
   const cardRefs = useRef([])

   useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768)
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
   }, [])

   useEffect(() => {
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
         { threshold: 0.3 }
      )

      cardRefs.current.forEach((el, idx) => {
         if (el) {
            el.setAttribute('data-idx', idx)
            observer.observe(el)
         }
      })

      return () => observer.disconnect()
   }, [isMobile, visibleIdx])

   return (
      <div className="relative bg-[#01081b] py-16 px-4 md:px-12 z-0">
         <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-12">
            <span className="text-[#CBACBF]">Execution</span> Process
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
               <motion.div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="relative h-[80vh] rounded-3xl border border-[#CBACBF]/30 overflow-hidden bg-[#0c0c1d]"
                  whileHover={!isMobile ? 'hover' : 'rest'}
                  initial="rest"
                  animate={isMobile && visibleIdx === index ? 'hover' : 'rest'}
               >
                  {/* + Signs */}
                  {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
                     <span key={i} className={`absolute ${pos} text-[#CBACBF] text-4xl font-light z-20`}>+</span>
                  ))}

                  {/* Glowing "Phase" Badge */}
                  <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 z-20">
                     <div className="relative inline-block">
                        <svg className="absolute inset-0 w-full h-full z-0 animate-borderstroke" viewBox="0 0 200 60">
                           <rect x="2" y="2" width="196" height="56" rx="28" ry="28" stroke="#CBACBF" strokeWidth="0.4" fill="transparent" />
                           <rect x="2" y="2" width="196" height="56" rx="28" ry="28" stroke="#3a0bbd" strokeWidth="0.4" fill="none" strokeDasharray="300" strokeDashoffset="300" className="animate-borderstroke" />
                        </svg>
                        <div className="px-6 py-2 text-sm sm:text-xl text-white font-medium relative z-10">Phase {index + 1}</div>
                     </div>
                  </div>

                  {/* Circle Zoom Effect */}
                  <motion.div
                     className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#CBACBF]/20 rounded-full z-10 pointer-events-none"
                     variants={{
                        hover: { scale: 8, opacity: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                        rest: { scale: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
                     }}
                  />

                  {/* Sliding Text Reveal */}
                  <motion.div
                     className="absolute flex flex-col items-center justify-center bottom-0 w-full h-full bg-dotted backdrop-blur-2xl text-white px-5 py-6 z-20"
                     variants={{
                        rest: {
                           y: '100%',
                           opacity: 0,
                           transition: { duration: 0.4, ease: 'easeOut' }
                        },
                        hover: {
                           y: 0,
                           opacity: 1,
                           transition: { duration: 0.4, ease: 'easeInOut' }
                        },
                     }}
                  >
                     <h3 className="text-lg md:text-2xl text-center font-semibold mb-2">{phase.title}</h3>
                     <p className="text-sm opacity-90 text-center">{phase.text}</p>
                  </motion.div>
               </motion.div>
            ))}
         </div>

         {/* Custom CSS */}
         <style>{`
            .bg-dotted {
               background-image:
                  radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0),
                  radial-gradient(circle at 4px 4px, rgba(91,194,255,0.08) 1px, transparent 0);
               background-size: 20px 20px;
               background-blend-mode: overlay;
            }

            @keyframes borderstroke {
               0% { stroke-dashoffset: 500; }
               100% { stroke-dashoffset: 0; }
            }

            .animate-borderstroke {
               animation: borderstroke 3s linear infinite;
            }
         `}</style>
      </div>
   )
}

export default Section5
