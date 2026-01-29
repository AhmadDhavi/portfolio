'use client'

import styles from './About.module.css'
import { FaCode, FaLaptopCode, FaRocket, FaHeart } from 'react-icons/fa'

export default function About() {
  const highlights = [
    { icon: <FaCode />, label: 'Clean Code' },
    { icon: <FaLaptopCode />, label: 'Responsive Design' },
    { icon: <FaRocket />, label: 'Performance' },
    { icon: <FaHeart />, label: 'User-Focused' }
  ]

  return (
    <section className={styles.aboutSection} id="about">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Get to know me</span>
          <h2 className={styles.sectionTitle}>About Me</h2>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.aboutContent}>
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
          </div>

          <div className={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className={styles.highlightCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                <h3>{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
