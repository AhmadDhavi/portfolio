'use client'

import styles from './Projects.module.css'
import ProjectCard from './ProjectsCard'

const projectsData = [
  {
    number: "01",
    title: "Fake Review Detection",
    description: "Developed a machine learning pipeline achieving 91% accuracy (0.97 ROC-AUC). Utilized TF-IDF, Linear SVM, and semi-supervised learning on multilingual data. Integrated SHAP to explain model decisions.",
    techStack: ["Python", "Scikit-learn", "Pandas", "SHAP", "NLP"],
    link: "#"
  },
  {
    number: "02",
    title: "UMN Digital Canteen + AI Integration",
    description: "Android-based tenant management system. Successfully integrated the Fake Review Detection model via backend API to automatically filter user comments, bridging mobile UX with ML intelligence.",
    techStack: ["Android", "Kotlin", "Python API", "Machine Learning"],
    link: "#"
  },
  {
    number: "03",
    title: "Digital Library Management System", 
    description: "A robust full-stack library platform serving 50+ active students. Features Role-Based Access Control (RBAC) for secure data handling and streamlined admin workflows.",
    techStack: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    link: "#"
  },
  {
    number: "04",
    title: "Warmindo Papa Oy Website",
    description: "A modern marketing website built with Next.js for high performance. Features include a dynamic digital menu, interactive location maps, and seamless social media integration.",
    techStack: ["Next.js", "React", "JavaScript", "Tailwind"],
    link: "#"
  },
  {
    number: "05",
    title: "Donat KPK Brand Website",
    description: "Optimized brand website built with Laravel Blade. Focused on site structure efficiency and consistent user experience (UX) for menu browsing and information delivery.",
    techStack: ["Laravel", "PHP", "Blade", "MySQL"],
    link: "#"
  }
]

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Portfolio</span>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionDescription}>
            Building practical solutions across AI, Mobile, and Web Development.
          </p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}