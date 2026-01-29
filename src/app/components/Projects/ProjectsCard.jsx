'use client'

import styles from './Projects.module.css'
import { FaArrowRight } from 'react-icons/fa' // Hapus FaExternalLinkAlt dari import

export default function ProjectCard({ number, title, description, techStack, link, index }) {
  return (
    <div 
      className={styles.projectCard}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.projectNumber}>{number}</span>
      </div>
      
      <h3 className={styles.projectTitle}>{title}</h3>
      
      <p className={styles.projectDescription}>{description}</p>
      
      <div className={styles.techStack}>
        {techStack.map((tech, idx) => (
          <span key={idx} className={styles.techTag}>{tech}</span>
        ))}
      </div>
      
      <a href={link} className={styles.projectLink}>
        <span>View Project</span>
        <FaArrowRight className={styles.arrow} />
      </a>
    </div>
  )
}
