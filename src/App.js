import { motion } from 'framer-motion';
import './App.css';
import { useState, useEffect } from "react"
import { useQuery,QueryClient,QueryClientProvider } from "react-query"
import Star from './Star';
import Peoples from './peoples';
import Header from './Header';
const queryClient = new QueryClient();
function App() {
   let [hide,setHide]=useState("people")
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="actions">
        {hide !=="people" && <motion.button
          whileHover={{ scale: 1.1, background: "red", color: "white" }}
          whileTap={{ scale: 1 }}
          transition={{ duration: .4 }}
          
          onClick={() => setHide("people")}>people</motion.button>}
        {hide !== "planet" && <motion.button
          whileHover={{ scale: 1.1, background: "red", color: "white" }}
          whileTap={{ scale: 1 }}
          transition={{ duration: .4 }}
          
          onClick={() => setHide("planet")}>planet</motion.button>}
     
      </div>
        
      {hide === "people" && <Peoples />}
      {hide==="planet" && <Star />}
  
    </QueryClientProvider>
    
  )
  }

export default App;
