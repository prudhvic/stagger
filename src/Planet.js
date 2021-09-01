import React from 'react'
import { motion } from 'framer-motion'
const Planet = ({ planet, index }) => {
	let delay=index*0.12
	return (
		<motion.div
			animate={{ opacity:1,translateY:0 }}
			initial={{opacity:0,translateY:-100 }}
			transition ={{type:"spring",stiffness:130,delay:delay}}
		>
			  <h3>{ planet.name }</h3>
      <p>Population - { planet.population }</p>
      <p>Terrain - { planet.terrain }</p>
		</motion.div>
	)
}

export default Planet
