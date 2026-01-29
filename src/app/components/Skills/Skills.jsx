'use client'

import { useState } from 'react'
import styles from './Skills.module.css'
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaFigma,
  FaPython,
  FaPhp,
  FaNpm,
  FaBootstrap,
  FaUnity
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiVercel,
  SiMysql,
  SiFirebase,
  SiVuedotjs,
  SiScikitlearn, 
  SiTensorflow,  
  SiPytorch,     
  SiJupyter      
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const skillsData = {
  languages: [
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" }
  ],
  frameworks: [
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
    { name: "Vue.js", icon: <SiVuedotjs />, color: "#4FC08D" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" }
  ],
  library: [
    { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
    { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
    { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" }
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
    { name: "VS Code", icon: <VscCode />, color: "#007ACC" }, 
    { name: "Jupyter", icon: <SiJupyter />, color: "#F37626" },
    { name: "Vercel", icon: <SiVercel />, color: "#ffffff" },
    { name: "NPM", icon: <FaNpm />, color: "#CB3837" },
    { name: "Unity", icon: <FaUnity/>, color: "#ffffff"}
  ],
  database: [
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" }
  ]
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages')

  return (
    <section className={styles.skillsSection} id="skills">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>My Expertise</span>
          <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
          <p className={styles.sectionDescription}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className={styles.tabButtons}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'languages' ? styles.active : ''}`}
            onClick={() => setActiveTab('languages')}
          >
            Languages
          </button>
          
          <button 
            className={`${styles.tabButton} ${activeTab === 'frameworks' ? styles.active : ''}`}
            onClick={() => setActiveTab('frameworks')}
          >
            Frameworks
          </button>

          <button 
            className={`${styles.tabButton} ${activeTab === 'library' ? styles.active : ''}`}
            onClick={() => setActiveTab('library')}
          >
            Libraries
          </button>

          <button 
            className={`${styles.tabButton} ${activeTab === 'tools' ? styles.active : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            Tools
          </button>
          
          <button 
            className={`${styles.tabButton} ${activeTab === 'database' ? styles.active : ''}`}
            onClick={() => setActiveTab('database')}
          >
            Databases
          </button>
        </div>

        <div className={styles.skillsGrid}>
          {skillsData[activeTab].map((skill, index) => (
            <div 
              key={index} 
              className={styles.skillCard}
              style={{ 
                '--skill-color': skill.color,
                '--animation-delay': `${index * 0.08}s`
              }}
            >
              <div className={styles.skillIcon} style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}