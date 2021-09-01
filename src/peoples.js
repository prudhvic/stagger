import React from 'react'
import { useQuery } from 'react-query';
import Person from './Perosn';
import { motion } from 'framer-motion';
const Peoples = () => {
	let fetchPeople = async () => {
		let response = await fetch("https://swapi.dev/api/people/");
		return response.json()
	}
	let {data, status}=useQuery("peoples",fetchPeople)
	return (
		<div>
			 <h2>People</h2>
    
 {status === 'loading' && (
			  <motion.div
				   animate={{ y: 25, x: 25 }}
				  initial={{ x:-25,y:-25 }}
				  transition={{yoyo:20}}
				  className="loading"></motion.div>
      )}

      {status === 'error' && (
			  <motion.div
				  
				  animate={{ y: 25, x: 25 }}
				  initial={{ x:-25,y:-25 }}
				  transition={{yoyo:20}}
				  className="loading"></motion.div>
		  )}

      {status === 'success' && (
        <div className="peoples">
          { data.results.map((person,index) => <Person key={person.name} index={index}person={person} /> ) }
        </div>
      )} 
		</div>
	)
}

export default Peoples;
