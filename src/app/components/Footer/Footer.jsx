'use client'

import styles from './Footer.module.css'
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.ctaSection}>
            <span className={styles.ctaTag}>Get In Touch</span>
            <h2 className={styles.ctaTitle}>Ready to Start a Project?</h2>
            <p className={styles.ctaDescription}>
              I'm always open to discussing new projects, creative ideas, and exciting collaboration opportunities!
            </p>
            <a href="mailto:ahmaddhavi449@gmail.com" className={styles.emailButton}>
              <FaEnvelope />
              <span>ahmaddhavi449@gmail.com</span>
            </a>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.footerBottom}>
            <div className={styles.footerInfo}>
              <div className={styles.logo}>Dhavi</div>
              <p className={styles.tagline}>
                Building digital experiences with passion and precision.
              </p>
            </div>

            <div className={styles.socialLinks}>
              <a href="https://github.com/AhmadDhavi" target="_blank" rel="https://github.com/AhmadDhavi" className={styles.socialIcon}>
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/ahmaddhavi" target="_blank" rel="https://www.linkedin.com/in/ahmad-dhavi-fauzan-yudistira-648a64289/" className={styles.socialIcon}>
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/ahmaddhavii" target="_blank" rel="https://www.instagram.com/ahmaddhavii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className={styles.socialIcon}>
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className={styles.copyright}>
            <p>© 2026 Ahmad Dhavi. All rights reserved.</p>
          </div>
        </div>

        <button 
          onClick={scrollToTop}
          className={styles.scrollTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  )
}
