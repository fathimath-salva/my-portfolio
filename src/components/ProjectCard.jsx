import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Utensils, Route } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { getProjectPath } from '../utils/projectRoutes';

/* -------------------------------------------------------
   ProjectCard — premium project showcase card
   Visual areas use styled decorative artwork that can
   be replaced with real screenshots later.
------------------------------------------------------- */
export default function ProjectCard({ project, index = 0, reverse = false, onOpen }) {
  const {
    number, title, subtitle, year, description,
    technologies, role, githubUrl, liveUrl, visual,
  } = project;

  const cardVariants = {
    hidden:  { opacity: 0, y: 44 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 },
    },
  };

  return (
    <motion.article
      className={`project-card${project.id === 'daily-dine' ? ' project-card--daily-dine' : ''} ${reverse ? 'project-card--reverse' : ''}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      aria-label={`Project: ${title}`}
    >
      {/* Visual area */}
      <motion.div
        className="project-card__visual"
        whileHover={{ scale: 1.018 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <ProjectVisual type={visual} number={number} title={title} />
      </motion.div>

      {/* Content area */}
      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="project-card__number">{number}</span>
          <span className="project-card__year">{year}</span>
        </div>

        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__subtitle">{subtitle}</p>
        <p className="project-card__description">{description}</p>

        {role && (
          <p className="project-card__role">
            <strong>Role:</strong> {role}
          </p>
        )}

        <ul className="project-card__tech" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className="project-card__tech-item">{tech}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <a href={getProjectPath(project)} className="project-case-link" onClick={(event) => { event.preventDefault(); onOpen(project); }} aria-label={`Open case study for ${title}`}>
            View Case Study <span aria-hidden="true">↗</span>
          </a>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
              aria-label={`View ${title} on GitHub`}
            >
              <GithubIcon size={15} aria-hidden="true" />
              View Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              aria-label={`View ${title} live`}
            >
              <ExternalLink size={15} aria-hidden="true" />
              Live Demo
            </a>
          )}
          {!githubUrl && !liveUrl && (
            <span className="project-card__coming-soon">Repository link coming soon</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------
   ProjectVisual — decorative cover artwork per project
   Replace the inner div content with a real <img> later.
------------------------------------------------------- */
export function ProjectVisual({ type, number, title }) {
  const configs = {
    roadguard: {
      bg: '#e8ede4',
      accent: '#7a9168',
      label: 'Computer Vision · Detection',
      elements: ['YOLO', 'OpenCV', 'Pothole Detection'],
    },
    tinyml: {
      bg: '#e6efdd',
      accent: '#557454',
      label: 'Edge AI · IoT · Monitoring',
      elements: ['TinyML', 'ESP32', 'Streamlit'],
    },
    dailydine: {
      bg: '#f0f1df',
      accent: '#78845a',
      label: 'UI/UX · Web Application',
      elements: ['Figma', 'Next.js', 'Responsive'],
    },
  };

  const cfg = configs[type] || { bg: '#e8e8e8', accent: '#888', label: '', elements: [] };

  return (
    <div
      className="project-visual"
      role="img"
      style={{ '--proj-bg': cfg.bg, '--proj-accent': cfg.accent }}
      aria-label={`Visual representation for project: ${title}`}
    >
      {/* Background */}
      <div className="project-visual__bg" />

      {/* Large project number */}
      <div className="project-visual__number" aria-hidden="true">{number}</div>

      {/* Grid lines decoration */}
      <div className="project-visual__grid" aria-hidden="true" />
      <div className={`project-visual__diagram project-visual__diagram--${type}`} aria-hidden="true">
        {type === 'roadguard' && <><span className="diagram-road" /><span className="diagram-detection diagram-detection--one" /><span className="diagram-detection diagram-detection--two" /><span className="diagram-crosshair" /></>}
        {type === 'tinyml' && <><span className="diagram-machine"><Cpu size={42} strokeWidth={1} /></span><span className="diagram-wave" /><span className="diagram-node diagram-node--one" /><span className="diagram-node diagram-node--two" /><span className="diagram-node diagram-node--three" /></>}
        {type === 'dailydine' && <><span className="diagram-plate"><Utensils size={35} strokeWidth={1} /></span><span className="diagram-menu-lines"><i /><i /><i /></span><span className="diagram-spark">✳</span></>}
      </div>

      {/* Top label */}
      <div className="project-visual__top" aria-hidden="true">
        <span className="project-visual__label">{cfg.label}</span>
        <span className="project-visual__concept">CONCEPT VISUAL</span>
      </div>

      {/* Center content */}
      <div className="project-visual__center" aria-hidden="true">
        <div className={`project-visual__icon-ring project-visual__icon-ring--${type}`}>
          {type === 'roadguard' ? <Route size={38} strokeWidth={1.25} /> : type === 'tinyml' ? <Cpu size={38} strokeWidth={1.25} /> : <Utensils size={38} strokeWidth={1.25} />}
        </div>
      </div>

      {/* Tech chips */}
      <div className="project-visual__chips" aria-hidden="true">
        {cfg.elements.map((el) => (
          <span key={el} className="project-visual__chip">{el}</span>
        ))}
      </div>

      {/* Scanline overlay */}
      <div className="project-visual__overlay" aria-hidden="true" />
    </div>
  );
}
