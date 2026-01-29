'use client'

import styles from './About.module.css'
import { FaCode, FaLaptopCode, FaRocket, FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

export default function About() {
  const highlights = [
    { icon: <FaCode />, label: 'Clean Code' },
    { icon: <FaLaptopCode />, label: 'Responsive Design' },
    { icon: <FaRocket />, label: 'Performance' },
    { icon: <FaHeart />, label: 'User-Focused' }
  ]

  // Konfigurasi efek Tilt (Kartu 3D)
  const defaultTiltOptions = {
    reverse: false,
    max: 25,             
    perspective: 1000,
    scale: 1.05,         
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  }

  return (
    <section className={styles.aboutSection} id="about">
      <div className="container">
        {/* Header dengan animasi muncul dari bawah */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className={styles.sectionTag}>Get to know me</span>
          <h2 className={styles.sectionTitle}>About Me</h2>
        </motion.div>

        <div className={styles.contentWrapper}>
          {/* Konten Text Utama */}
          <motion.div 
            className={styles.aboutContent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className={styles.description}>
              Hi! I'm <span className={styles.highlight}>Ahmad Dhavi Fauzan Yudistira</span>, 
              I am a 5th-semester Informatics Engineering student at Universitas Multimedia Nusantara with a passion for building software that works seamlessly.
            </p>
            <p className={styles.description}>
              My journey in tech is driven by a hands-on approach. Rather than sticking solely to surface-level theory, I focus on the practical implementation of Web Development and Artificial Intelligence.
            </p>
            <p className={styles.description}>
              My coding philosophy is simple: clarity over complexity. I strive to write readable, structured, and maintainable code. I believe that the best software solutions are those that solve problems efficiently without unnecessary over-engineering. I am eager to contribute my skills to real-world projects that value high-quality engineering.
            </p>
          </motion.div>

          {/* Grid Highlights dengan Efek Tilt & Stagger Animation */}
          <div className={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <Tilt key={index} options={defaultTiltOptions}>
                <motion.div 
                  className={styles.highlightCard}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1, 
                    type: "spring",
                    stiffness: 100 
                  }}
                  viewport={{ once: true }}
                >
                  <div className={styles.iconWrapper}>
                    {item.icon}
                  </div>
                  <h3>{item.label}</h3>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}