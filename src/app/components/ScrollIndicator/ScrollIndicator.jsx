'use client'

import { useEffect, useState } from 'react'
import styles from './ScrollIndicator.module.css'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <button 
      className={styles.scrollIndicator} 
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
      onClick={scrollToNextSection}
      aria-label="Scroll down"
    >
      <span className={styles.mouse}>
        <span className={styles.wheel}></span>
      </span>
      <span className={styles.text}>Scroll</span>
    </button>
  )
}
