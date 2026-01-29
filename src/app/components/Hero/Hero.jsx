'use client'

import styles from './Hero.module.css'
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaBriefcase } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles.heroWrapper}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>Available for work</span>
          </div>
          
          <h1 className={styles.mainTitle}>
          <span className={styles.name}>Ahmad Dhavi</span>
          </h1>
          
          <p className={styles.description}>
           Informatics Student at UMN specializing in Web Development and AI.
           I prioritize maintainable code and hands-on implementation over unnecessary complexity.
          </p>
          
          <div className={styles.heroButtons}>
            <a href="/cv.pdf" download="Ahmad_Dhavi_CV.pdf" className={styles.btnPrimary}>
              <FaDownload />
              <span>Download CV</span>
            </a>
            <a href="#projects" className={styles.btnSecondary}>
              <FaBriefcase />
              <span>View Projects</span>
            </a>
          </div>
          
          <div className={styles.socialLinks}>
            <a href="https://github.com/ahmaddhavi" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/ahmaddhavi" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/ahmaddhavi" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className={styles.floatingShapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
      </div>
    </section>
  )
}
