import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects, internshipProjects } from '../data/portfolioData';
import { GithubIcon } from '../components/BrandIcons';
import { getProjectPath } from '../utils/projectRoutes';

/* -------------------------------------------------------
   Projects Section
------------------------------------------------------- */
export default function Projects({ onNavigate }) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'AI / ML', 'Web'];
  const visibleProjects = useMemo(() => projects.filter((project) => {
    if (filter === 'All') return true;
    return filter === 'AI / ML' ? ['roadguard', 'tinyml'].includes(project.visual) : project.visual === 'dailydine';
  }), [filter]);
  return (
    <section id="projects" className="section projects" aria-label="Portfolio projects">
      <div className="container">
        <SectionHeading
          number="03"
          label="Projects"
          title="Projects & Practical Learning"
          subtitle="My projects are evidence of the skills I am developing through academic, team and internship work. Each page shares the documented problem, approach, tools and contribution."
        />

        {/* Main projects */}
        <div className="projects__filter" role="group" aria-label="Filter projects">
          <span className="projects__filter-label">EXPLORE BY</span>
          {filters.map((item) => <button key={item} type="button" className={`projects__filter-button ${filter === item ? 'is-active' : ''}`} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <div className="projects__list">
          <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              reverse={i % 2 === 1}
              onOpen={(project) => onNavigate(getProjectPath(project))}
            />
          ))}
          </AnimatePresence>
        </div>

        {/* Internship projects sub-section */}
        <motion.div
          className="projects__internship"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="projects__sub-heading">
            <span>CodSoft Internship Projects</span>
          </h3>
          <div className="projects__internship-grid">
            {internshipProjects.map((p, i) => (
              <motion.article
                key={p.id}
                className="mini-project-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                aria-label={`Internship project: ${p.title}`}
              >
                <h4 className="mini-project-card__title">{p.title}</h4>
                <span className="mini-project-card__category">CODSOFT · AI / ML</span>
                <p className="mini-project-card__desc">{p.description}</p>
                <ul className="mini-project-card__tech" role="list">
                  {p.technologies.map((t) => (
                    <li key={t} className="mini-project-card__tech-item">{t}</li>
                  ))}
                </ul>
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mini-project-card__link"
                    aria-label={`View ${p.title} on GitHub`}
                  >
                    <GithubIcon size={13} aria-hidden="true" />
                    View Code
                  </a>
                )}
                <a href={getProjectPath(p)} className="project-case-link" onClick={(event) => { event.preventDefault(); onNavigate(getProjectPath(p)); }} aria-label={`Open case study for ${p.title}`}>View Case Study <span aria-hidden="true">↗</span></a>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
