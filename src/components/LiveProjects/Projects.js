import React from 'react'
import './project.css'
import Me from '../../img/Me.png'
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center', fontWeight: '600', paddingTop: '60px' }}>Works & Projects</h2>
      <div className="main-container">
      <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    >
  
      <div className="project-card">
          <img className='project-img' src={Me} />
        </div>
        <p>TGIT Bangladesh</p>
        </motion.div>

        <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    >
  
      <div className="project-card">
          <img className='project-img' src={Me} />
        </div>
        <p>TGIT Bangladesh</p>
        </motion.div>

        <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    >
  
      <div className="project-card">
          <img className='project-img' src={Me} />
        </div>
        <p>TGIT Bangladesh</p>
        </motion.div>

        <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    >
  
      <div className="project-card">
          <img className='project-img' src={Me} />
        </div>
        <p>TGIT Bangladesh</p>
        </motion.div>
        
      </div>
      
    </>
  )
}

export default Projects