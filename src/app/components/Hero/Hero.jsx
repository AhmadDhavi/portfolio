'use client'

import styles from './Hero.module.css'
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaBriefcase } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      
      {/* Background Shapes (Elemen Dekorasi Bergerak) */}
      <div className={styles.backgroundShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>

      <div className="container">
        <div className={styles.heroWrapper}>
          
          {/* Badge 'Available for work' */}
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot}></span>
            <span>Available for work</span>
          </motion.div>
          
          {/* Judul Utama + Typewriter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className={styles.mainTitle}>
              <span className={styles.name}>Ahmad Dhavi</span>
              
              <div className={styles.typewriterWrapper}>
                <Typewriter
                  options={{
                    strings: [
                      'Informatics Student', 
                      'Web Developer', 
                      'AI Enthusiast', 
                      'Creative Coder'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </h1>
          </motion.div>
          
          {/* Deskripsi */}
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
           Based in Indonesia. I create digital experiences that blend clean code 
           with modern design, focusing on solving real-world problems.
          </motion.p>
          
          {/* Tombol CTA (Call to Action) */}
          <motion.div 
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a 
              href="/cv.pdf" 
              download="Ahmad_Dhavi_CV.pdf" 
              className={styles.btnPrimary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              <span>Download CV</span>
            </motion.a>
            
            <motion.a 
              href="#projects" 
              className={styles.btnSecondary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaBriefcase />
              <span>View Projects</span>
            </motion.a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className={styles.socialLinks}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {[
              { icon: <FaGithub />, url: "https://github.com/ahmaddhavi" },
              { icon: <FaLinkedin />, url: "https://linkedin.com/in/ahmaddhavi" },
              { icon: <FaInstagram />, url: "https://instagram.com/ahmaddhavi" }
            ].map((item, index) => (
              <motion.a 
                key={index}
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                whileHover={{ y: -5, color: '#ffffff' }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}