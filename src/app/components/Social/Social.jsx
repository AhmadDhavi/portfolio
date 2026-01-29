'use client'

import styles from './Social.module.css'
import { FaInstagram, FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa'

const socialLinks = [
  {
    icon: <FaInstagram />,
    name: "Instagram",
    handle: "@ahmaddhavii",
    description: "Behind the scenes & daily updates",
    url: "https://instagram.com/ahmaddhavii",
    color: "#E1306C"
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    handle: "Ahmad Dhavi Fauzan Yudistira",
    description: "Professional network & career",
    url: "https://linkedin.com/in/ahmaddhavi",
    color: "#0A66C2"
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    handle: "@AhmadDhavi",
    description: "Open source projects & code",
    url: "https://github.com/AhmadDhavi",
    color: "#ffffff"
  }
]

export default function Social() {
  return (
    <section className={styles.socialSection} id="social">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Connect With Me</span>
          <h2 className={styles.sectionTitle}>Let's Connect!</h2>
          <p className={styles.sectionDescription}>
            Follow my journey and let's collaborate together
          </p>
        </div>
        
        <div className={styles.socialGrid}>
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialCard}
              style={{ 
                '--social-color': social.color,
                '--animation-delay': `${index * 0.15}s`
              }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.socialIcon} style={{ color: social.color }}>
                  {social.icon}
                </div>
                <FaArrowRight className={styles.arrowIcon} />
              </div>
              
              <h3 className={styles.socialName}>{social.name}</h3>
              <p className={styles.handle}>{social.handle}</p>
              <p className={styles.description}>{social.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
