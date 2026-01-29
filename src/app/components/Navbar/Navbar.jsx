'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { FaGithub, FaLinkedin, FaInstagram, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock Body Scroll saat menu terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.navContent}>
            
            {/* Logo */}
            <div className={styles.logo}>Portfolio</div>

            {/* Desktop & Mobile Menu Wrapper */}
            <div className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
              
              {/* Tombol Close (Hanya muncul di Mobile) */}
              <button 
                className={styles.closeButton}
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>

              <ul className={styles.menuList}>
                {['Home', 'About', 'Skills', 'Projects', 'Social', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Links Khusus Mobile */}
              <div className={styles.mobileSocial}>
                <a href="https://github.com/Foerzaaaaa" target="_blank" rel="https://github.com/AhmadDhavi" className={styles.mobileSocialIcon}>
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/ahmaddhavi" target="_blank" rel="https://www.linkedin.com/in/ahmad-dhavi-fauzan-yudistira-648a64289/" className={styles.mobileSocialIcon}>
                  <FaLinkedin />
                </a>
                <a href="https://instagram.com/ahmaddhavii" target="_blank" rel="https://www.instagram.com/ahmaddhavii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className={styles.mobileSocialIcon}>
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Social Links Desktop */}
            <div className={styles.socialLinks}>
              <a href="https://github.com/Foerzaaaaa" target="_blank" rel="https://github.com/AhmadDhavi" className={styles.socialIcon}>
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/ahmaddhavi" target="_blank" rel="https://www.linkedin.com/in/ahmad-dhavi-fauzan-yudistira-648a64289/" className={styles.socialIcon}>
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/ahmaddhavii" target="_blank" rel="https://www.instagram.com/ahmaddhavii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className={styles.socialIcon}>
                <FaInstagram />
              </a>
            </div>

            {/* Hamburger Button */}
            <button 
              className={styles.hamburger}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>

          </div>
        </div>
      </nav>
      
      {/* Overlay Background */}
      <div 
        className={`${styles.overlay} ${isOpen ? styles.show : ''}`} 
        onClick={closeMenu}
      />
    </>
  )
}