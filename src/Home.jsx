import React from 'react'
import Section1 from './Components/HomePage/Section1'
import Section2 from './Components/HomePage/Section2'
import Section3 from './Components/HomePage/Section3'
import Section4 from './Components/HomePage/Section4'
import Section5 from './Components/HomePage/Section5'
import Section6 from './Components/Section6'
import Navbar from './Components/HomePage/NavBar'


const Home = () => {
	return (
		<div>
			<Navbar />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
		</div>
	)
}

export default Home