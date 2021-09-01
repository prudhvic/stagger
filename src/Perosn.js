import React from 'react'
import { motion } from 'framer-motion';
const Person = ({ person,index }) => {
	let delay = 0.2 * index;
	return (
		<motion.div
		
		animate={{ opacity:1,translateY:0 }}
			initial={{opacity:0,translateY:-100 }}
			transition ={{type:"keyframes",stiffness:110,delay:delay}}
		>
			<h3>{ person.name }</h3>
      <p>Gender - { person.gender }</p>
      <p>Birth year - { person.birth_year }</p>
		</motion.div>
	)
}

export default Person
