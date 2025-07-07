import React from 'react'
import EarthImg from '../../assets/Images/Ea.jpg'
import LaptopImg from '../../assets/Images/lp.jpg'
import { motion } from 'framer-motion'


	const Section2 = () => {
		return (
			<div className="bg-[#01081b] border-0 outline-0 text-white min-h-screen px-3 md:px-6 pt-20 md:pt-50">
				<div className="grid lg:grid-cols-5 grid-cols-1 gap-6 max-w-full mx-auto lg:h-[420px] h-auto">
					{/* First (Main Left) */}
					<div
						className="group lg:col-span-3 relative flex place-items-end justify-start px-3 py-6 md:p-6 rounded-4xl overflow-hidden border border-[#CBACBF]/20 outline-0"
						style={{
							backgroundImage: `url(${LaptopImg})`,
							backgroundSize: 'cover',
							backgroundPosition: 'bottom right',
						}}
					>
						{/* Overlay */}
						<div className="absolute inset-0 bg-gradient-to-r from-[#01081b]/70 to-transparent z-0"></div>
						<p className="relative z-10 text-sm font-normal font-sans text-white group-hover:translate-x-2 transition-all duration-500 ease-in-out">
							I am a <br /> <span className='text-2xl md:text-3xl font-bold text-white'> Passionate <br /> Frontend Software <br /> Developer</span>
						</p>
					</div>

					{/* Right Side Grid */}
					<div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
						
						{/* Second (Top Right) */}
						{/* Second (Top Right) */}
						<div
							className="group relative flex items-end px-3 py-6 md:p-6 rounded-4xl overflow-hidden bg-gradient-to-b from-transparent to-[#01081b]/40 border border-[#CBACBF]/20"
						>
							{/* Earth with subtle orbit lines at bottom */}
							<div className="absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 z-0">
								<div className="relative w-100 h-100">
									{/* Thin orbit ring */}
									<div className="absolute inset-0 border border-[#CBACBF]/30 rounded-full animate-spin-slow" />
									<div className="absolute inset-4 border border-[#CBACBF]/20 rounded-full animate-spin-reverse-slower" />

									{/* Rotating Earth */}
									<img
										src={EarthImg}
										alt="Earth"
										className="w-full h-full object-cover rounded-full animate-spin-slower"
									/>
								</div>
							</div>

							{/* Dark overlay for readability */}
							<div className="absolute inset-0 bg-[#01081b]/70 z-0"></div>

							{/* Text */}
							<p className="relative z-10 text-2xl font-bold group-hover:translate-x-2 transition-all duration-500 ease-in-out">
								I prioritize transparency,<br /> fostering open <br /> communication
							</p>

							{/* Animations */}
							<style>{`
								@keyframes spin-slower {
									0% { transform: rotate(0deg); }
									100% { transform: rotate(360deg); }
								}
								@keyframes spin-reverse-slower {
									0% { transform: rotate(360deg); }
									100% { transform: rotate(0deg); }
								}
								.animate-spin-slower {
									animation: spin-slower 30s linear infinite;
								}
								.animate-spin-reverse-slower {
									animation: spin-reverse-slower 40s linear infinite;
								}
								.animate-spin-slow {
									animation: spin-slower 50s linear infinite;
								}
							`}</style>
						</div>
						{/* Third (Bottom Right) */}
						<div className="group relative px-3 py-6 md:p-6 rounded-4xl border border-[#CBACBF]/20 bg-gradient-to-r from-[#01081b]/40 to-transparent border-dashed flex items-end overflow-hidden">
							{/* Glowing Tracer */}
							<motion.div
								className="absolute top-0 left-0 w-full h-full rounded-4xl pointer-events-none"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: 'linear',
								}}
							>
								<svg
									className="w-full h-full"
									viewBox="0 0 100 100"
									preserveAspectRatio="none"
								>
									<motion.rect
										x="0"
										y="0"
										width="100"
										height="100"
										rx="8"
										ry="8"
										fill="none"
										stroke="#CBACBF"
										strokeWidth="0.5"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeDasharray="1"
										strokeDashoffset=""
										animate={{
											strokeDashoffset: [400, 0],
										}}
										transition={{
											duration: 4,
											repeat: Infinity,
											ease: 'linear',
										}}
										style={{
											filter: 'drop-shadow(0 0 6px #CBACBF)',
										}}
									/>
								</svg>
							</motion.div>

							{/* Glowing bar tracer */}
							<span className="absolute w-16 h-1 bg-gradient-to-r from-[#CBACB] to-[#021036] blur-md opacity-100 animate-glow-bar z-20" />
							{/* Content */}
							<div className="relative z-10">
								<p className="text-sm text-white font-light font-sans mt-4 group-hover:translate-x-2 transition-all duration-500 ease-in-out">
									I constantly try to improve <br />
									<span className="font-bold text-3xl">My tech stack</span>
								</p>

								<div className="flex flex-wrap gap-2 mt-4 group-hover:translate-x-2 transition-all duration-500 ease-in-out">
									{['JavaScript', 'TypeScript', 'ReactJs', 'TailwindCSS', 'FastAPI', 'Firebase', 'RestAPI', 'Framer motion'].map((skill, i) => (
									<span
										key={i}
										className="text-xs sm:text-sm border border-[#CBACBF]/40 text-white px-2 py-1 rounded-full bg-[#01081b]/60"
									>
										{skill}
									</span>
									))}
								</div>
								{/* Glowing bar tracer */}
								<span className="absolute w-16 h-1 bg-gradient-to-r from-[#CBACBF] to-[#021036] blur-md opacity-100 animate-glow-bar z-20" />
							</div>

							{/* Glow Animation */}
							<style>{`
								@keyframes glow-bar {
									0%   { top: 0; left: 0; width: 48px; height: 2px; transform: none; }
									25%  { top: 0; left: 100%; transform: translateX(-100%) rotate(90deg); }
									50%  { top: 100%; left: 100%; transform: translate(-100%, -100%) rotate(180deg); }
									75%  { top: 100%; left: 0; transform: translateY(-100%) rotate(270deg); }
									100% { top: 0; left: 0; transform: none; }
								}

								.animate-glow-bar {
									position: absolute;
									animation: glow-bar 10s linear infinite;
									border-radius: 10px;
								}
							`}</style>
						</div>
					</div>
				</div>
			</div>
		)
	}

	export default Section2
