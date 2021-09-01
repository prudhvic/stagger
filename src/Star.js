
  
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';
import { motion } from 'framer-motion';

const fetchPlanets =  async () => {
	
	const res = await fetch(`http://swapi.dev/api/planets/`);
	
		return res.json();
  
	
	
 
}

const Star = () => {
	const {
		data,
		status
	} = useQuery('planets', fetchPlanets);

  return (
    <div>
     

      {status === 'loading' && (
			  <motion.div
				   animate={{ scale:1.2 }}
				  initial={{ scale:1 }}
				  transition={{yoyo:20,duration:.3}}
				  className="loading"></motion.div>
      )}

      {status === 'error' && (
			  <motion.div
				  
				  animate={{ y: 25, x: 25 }}
				  initial={{ x:-25,y:-25 }}
				  transition={{yoyo:20}}
				  className="loading"></motion.div>
		  )}
		  <h2>Planets</h2>

      {status === 'success' && (
         
          <div className="planets">
            { status === "success" && data.results.map((planet,index)=> <Planet  key={planet.name} planet={planet} index={index} /> ) }
          </div>
        
      )} 
    </div>
  );
}
 
export default Star;