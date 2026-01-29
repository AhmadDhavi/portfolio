'use client'

import { useState, useEffect } from 'react'
import styles from './PageLoader.module.css'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    let currentProgress = 0
    
    const timer = setInterval(() => {
      currentProgress += 1
      setProgress(currentProgress)
      
      if (currentProgress >= 100) {
        clearInterval(timer)
        // Mulai fade out
        setTimeout(() => {
          setFadeOut(true)
        }, 300)
        // Hapus dari DOM setelah fade selesai
        setTimeout(() => {
          setLoading(false)
        }, 1800) // 300ms + 1500ms fade = 1800ms total
      }
    }, 30)

    return () => clearInterval(timer)
  }, [])

  if (!loading) return null

  return (
    <div className={`${styles.loaderWrapper} ${fadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.loaderContent}>
        <div className={styles.character}>
          <div className={styles.laptop}>
            <div className={styles.screen}>
              <div className={styles.code}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={styles.base}></div>
          </div>
          
          <div className={styles.coffee}>
            <div className={styles.steam}></div>
            <div className={styles.steam}></div>
            <div className={styles.steam}></div>
          </div>
        </div>

        <h2 className={styles.loadingTitle}>Loading Portfolio</h2>
        
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className={styles.loadingText}>
          {progress < 30 && "Brewing coffee..."}
          {progress >= 30 && progress < 60 && "Writing code..."}
          {progress >= 60 && progress < 90 && "Debugging..."}
          {progress >= 90 && progress < 100 && "Almost there..."}
          {progress === 100 && "Ready!"}
        </p>
      </div>
    </div>
  )
}
