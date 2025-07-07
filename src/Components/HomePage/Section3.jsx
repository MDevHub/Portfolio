import React from 'react'
import CodeImg from '../../assets/Images/code.jpg'
import { motion } from 'framer-motion'
import { IoCopyOutline } from 'react-icons/io5'


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

const Section3 = () => {
	return (
		<div className="bg-[#01081b] text-white px-3 md:px-6 pt-4">
			<div className="grid sm:grid-cols-5 grid-cols-1 gap-6 max-w-full mx-auto h-auto">

				{/* Right Side Grid (now comes first on large screens) */}
				<div className="sm:col-span-2 grid grid-cols-1 gap-6 order-2 lg:order-1">
					
					{/* First (Top Left now) */}
					<div className="px-3 py-6 md:p-6 rounded-4xl overflow-hidden bg-gradient-to-b from-[#5ac6ff1a] via-transparent to-[#01081b]/40 border border-[#CBACBF]/20 group">
						<div className="transition-all duration-500 ease-in-out group-hover:translate-x-2">
							<p className="text-xl sm:text-2xl md:text-3xl font-bold">
								Tech enthusiast <br className='hidden' /> with a passion for development.
							</p>
							<p className="text-xl sm:text-2xl md:text-3xl font-bold">
								I design modern, <br className='hidden' /> user focused products.
							</p>
						</div>
					</div>
					{/* Second (Bottom Left now) */}
					<div className="group bg-[#170264] relative px-3 py-6 md:p-6 rounded-4xl border border-[#CBACBF]/20 overflow-hidden flex flex-col items-center justify-center text-center">

						{/* Animated glowing background blobs */}
						<div className="absolute inset-0 z-0 overflow-hidden">
							<span className="absolute w-40 h-40 bg-[#CBACBF] rounded-full blur-20xl opacity-30 animate-pulse-slow" style={{ top: '10%', left: '10%' }} />
							<span className="absolute w-48 h-48 bg-[#5ac6ff] rounded-full blur-20xl opacity-20 animate-move-diagonal" style={{ top: '30%', right: '5%' }} />
							<span className="hidden lg:block absolute w-36 h-36 bg-[#ffffff] rounded-full blur-20xl opacity-10 animate-move-updown" style={{ bottom: '5%', left: '35%' }} />
						</div>

						{/* Text */}
						<p className="text-xl sm:text-2xl md:text-3xl text-white font-bold font-sans relative z-10 group-hover:translate-x-2 transition-all duration-500 ease-in-out">
							Learn more about my professional experience, skills, and education.
						</p>

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
							<button
								className="
									px-2 cursor-pointer outline-0 border-0 relative z-10 sm:w-[240px] h-[50px] flex items-center justify-center gap-2 text-sm sm:text-base text-[#d8d6d6] rounded-4xl font-medium
									group-hover:translate-x-2 transition-all duration-500 ease-in-out
								"
							>
								<IoCopyOutline className="text-lg" />
								Download My resume
							</button>
						</motion.div>
						{/* Glow Animations */}
						<style>{`
							@keyframes pulse-slow {
								0%, 100% { transform: scale(1); opacity: 0.3; }
								50% { transform: scale(1.2); opacity: 0.6; }
							}

							@keyframes move-diagonal {
								0% { transform: translate(0, 0); }
								50% { transform: translate(-20px, 20px); }
								100% { transform: translate(0, 0); }
							}

							@keyframes move-updown {
								0% { transform: translateY(0); }
								50% { transform: translateY(-25px); }
								100% { transform: translateY(0); }
							}

							.animate-pulse-slow {
								animation: pulse-slow 6s ease-in-out infinite;
							}

							.animate-move-diagonal {
								animation: move-diagonal 8s ease-in-out infinite;
							}

							.animate-move-updown {
								animation: move-updown 7s ease-in-out infinite;
							}
						`}</style>
					</div>
				</div>

				{/* Main Grid on Right for lg screen */}
				<div
					className="group bg-grid sm:col-span-3 order-1 sm:order-2 relative flex items-center justify-start px-3 py-6 md:p-6 rounded-4xl overflow-hidden border border-[#CBACBF]/20"
				>
					{/* Overlay */}
            	<div className="absolute bg-gradient-to-b from-[#01081b] to-transparent inset-0 z-0"></div>
					<div className="absolute inset-0 z-0 overflow-hidden">
						<span className="absolute w-40 h-40 bg-[#021036] blur-20xl rounded-full  opacity-30 animate-pulse-slow" style={{ top: '60%', left: '20%' }} />
					</div>
					{/* Background Code Image (bottom right corner) */}
					<img
						src={CodeImg}
						alt="Code"
						className="absolute bottom-0 right-0 w-50 h-full sm:w-80 sm:h-60 object-cover rounded-l-xl border border-[#CBACBF]/30 z-0 group-hover:translate-x-2 transition-all duration-500 ease-in-out"
					/>

					{/* Dark blur overlay */}
					<div className="absolute bottom-0 right-0 w-50 h-full sm:w-80 sm:h-60 rounded-l-xl bg-[#01081b7a] backdrop-blur-[] z-10" />

					{/* Main Text Content */}
					<p className="relative z-20 text-sm font-normal font-sans text-white group-hover:translate-x-2 transition-all duration-500 ease-in-out">
						The Inside Scoop<br />
						<span className="text-xl sm:text-2xl md:text-3xl font-semibold text-white"> 
							currently building advanced <br className='hidden' /> projects with <span className="text-[#CBACBF]">TypeScript</span>, <br className='hidden' />
							while also expanding my skills <br className='hidden' /> with <span className="text-[#CBACBF]">FastAPI</span> and working <br className='hidden' /> extensively with <span className="text-[#CBACBF]">RESTful APIs</span>.
						</span>
					</p>
				</div>
			</div>				
		</div>
	)
}

export default Section3
