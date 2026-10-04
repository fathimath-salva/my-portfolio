import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { ProjectVisual } from './ProjectCard';
import { getProjectPath } from '../utils/projectRoutes';

export default function ProjectCaseStudy({ project, parentProject, onNavigate }) {
  const { caseStudy = {}, technologies = [], images = [] } = project;
  const backPath = parentProject ? getProjectPath(parentProject) : '/#projects';

  return (
    <main className="case-study-page" aria-labelledby="case-study-title">
        <motion.div className="case-study__panel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .24, ease: [0.22, 1, 0.36, 1] }}>
          <header className="case-study__topbar">
            <a href={backPath} onClick={(event) => { event.preventDefault(); onNavigate(backPath); }} className="case-study__back">← <span>{parentProject ? 'Back to CODSOFT' : 'Back to projects'}</span></a>
          </header>

          <div className="case-study__hero">
            {project.visual ? <ProjectVisual type={project.visual} number={project.number} title={project.title} /> : (
              <div className="case-study__abstract" aria-label="Concept diagram, not a project screenshot">
                <span className="case-study__abstract-orbit" /><span className="case-study__abstract-dot" />
                <span className="case-study__abstract-label">CONCEPT DIAGRAM · NOT A SCREENSHOT</span>
              </div>
            )}
            <div className="case-study__hero-copy">
              <p className="case-study__eyebrow">{caseStudy.category || 'CODSOFT · AI / ML'}</p>
              <p className="case-study__number">{project.number || (parentProject ? 'CODSOFT' : 'CS')} <span>—</span> {project.year || parentProject?.year || 'INTERNSHIP PROJECT'}</p>
              <h2 id="case-study-title">{project.title}</h2>
              <p className="case-study__subtitle">{project.subtitle || (parentProject ? project.description : 'Artificial Intelligence Virtual Internship project')}</p>
              <p>{caseStudy.overview || project.description}</p>
            </div>
          </div>

          {project.subprojects ? (
            <CodsoftProjects projects={project.subprojects} onNavigate={onNavigate} />
          ) : parentProject ? (
            <CodsoftProjectDetail project={project} />
          ) : (
            <div className="case-study__sections">
              {caseStudy.sections?.length > 0 ? caseStudy.sections.map((section, index) => (
                <CaseSection key={section.title} number={String(index + 1).padStart(2, '0')} title={section.title}>
                  {section.body && <p>{section.body}</p>}
                  {section.technologyList && <ul className="case-study__tags">{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>}
                  {section.items && <ul className="case-study__focus">{section.items.map((item) => <li key={item}><ArrowUpRight size={14} aria-hidden="true" />{item}</li>)}</ul>}
                  {section.steps && <ol className="case-study__flow">{section.steps.map((step, stepIndex) => <li key={step}><span>{String(stepIndex + 1).padStart(2, '0')}</span>{step}{stepIndex < section.steps.length - 1 && <ArrowDownRight size={15} aria-hidden="true" />}</li>)}</ol>}
                </CaseSection>
              )) : (
                <>
                  <CaseSection number="01" title="Overview"><p>{caseStudy.overview || project.description}</p></CaseSection>
                  <CaseSection number="02" title="Problem / Goal"><p>{caseStudy.goal || project.description}</p></CaseSection>
                  <CaseSection number="03" title="What I Built"><p>{caseStudy.built || project.description}</p></CaseSection>
                  {caseStudy.approach && <CaseSection number="04" title="Approach"><p>{caseStudy.approach}</p></CaseSection>}
                  <CaseSection number="05" title="Technologies"><ul className="case-study__tags">{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></CaseSection>
                  {caseStudy.flow?.length > 0 && <CaseSection number="06" title="How It Works"><FlowList steps={caseStudy.flow} /></CaseSection>}
                  <CaseSection number="07" title="My Contribution"><p>{caseStudy.contribution || 'Completed as a CodSoft Artificial Intelligence Virtual Internship project.'}</p></CaseSection>
                  {caseStudy.learning?.length > 0 && <CaseSection number="08" title="What I Learned"><ul className="case-study__focus">{caseStudy.learning.map((item) => <li key={item}><ArrowUpRight size={14} aria-hidden="true" />{item}</li>)}</ul></CaseSection>}
                </>
              )}
            </div>
          )}

          {images.length > 0 && <section className="case-study__gallery" aria-label="Project images"><h3>Project Images</h3><div>{images.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.caption}</figcaption></figure>)}</div></section>}

          <footer className="case-study__footer">
            {!project.subprojects && (project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Repository <ArrowUpRight size={15} /></a> : <button type="button" disabled>Repository link coming soon</button>)}
            {!project.subprojects && !parentProject && (project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live project <ArrowUpRight size={15} /></a> : <button type="button" disabled>Live link unavailable</button>)}
            <a href="/#projects" onClick={(event) => { event.preventDefault(); onNavigate('/#projects'); }}>
              Back to Projects <span aria-hidden="true">↗</span>
            </a>
          </footer>
        </motion.div>
    </main>
  );
}

function CodsoftProjects({ projects, onNavigate }) {
  return (
    <section className="case-study__internship-projects" aria-label="Three CodSoft internship projects">
      <div className="case-study__internship-intro"><span>01 — 03</span><p>Three project assignments completed during the Artificial Intelligence Virtual Internship.</p></div>
      {projects.map((project, index) => (
        <article className="case-study__internship-project" id={`codsoft-${project.id}`} key={project.id}>
          <header><span className="case-study__number">{String(index + 1).padStart(2, '0')} <i>—</i> PROJECT</span><h3>{project.title}</h3><p>{project.caseStudy.overview}</p></header>
          <a href={getProjectPath(project)} className="case-study__internship-open" onClick={(event) => { event.preventDefault(); onNavigate(getProjectPath(project)); }} aria-label={`Open full case study for ${project.title}`}>
            View full case study <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <div className="case-study__internship-grid">
            <CaseSection number="01" title="Objective"><p>{project.objective}</p></CaseSection>
            {project.approach && <CaseSection number="02" title="Recommendation Approach"><p>{project.approach}</p></CaseSection>}
            {project.caseStudy.flow?.length > 0 && <CaseSection number="02" title="How It Works"><FlowList steps={project.caseStudy.flow} /></CaseSection>}
            <CaseSection number="03" title="Technologies"><ul className="case-study__tags">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></CaseSection>
            <CaseSection number="04" title="What I Worked On"><p>{project.caseStudy.contribution}</p></CaseSection>
            <CaseSection number="05" title="Key Functionality"><ul className="case-study__focus">{project.functionality.map((item) => <li key={item}><ArrowUpRight size={14} aria-hidden="true" />{item}</li>)}</ul></CaseSection>
            <CaseSection number="06" title="Project Outcome"><p>{project.outcome}</p></CaseSection>
          </div>
          <div className="case-study__repo-state">
            {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub repository <ArrowUpRight size={15} /></a> : <button type="button" disabled>GitHub link coming soon</button>}
          </div>
        </article>
      ))}
    </section>
  );
}

function CodsoftProjectDetail({ project }) {
  const { caseStudy = {}, technologies = [] } = project;
  const sections = [
    ['Overview', caseStudy.overview || project.description],
    ['Problem / Context', project.id === 'image-captioning'
      ? 'The project focuses on turning image content into a text description.'
      : project.id === 'movie-rec'
        ? 'The project focuses on finding movie suggestions through a recommendation approach.'
        : 'The documented task is real-time face detection and recognition.'],
    ['Objective', project.objective],
    ['Approach', project.approach || caseStudy.built],
    ['Technologies Used', technologies],
    ['My Contribution', caseStudy.contribution],
    ['Main Functionality', project.functionality || []],
    ['Project Outcome', project.outcome],
  ];

  return (
    <div className="case-study__sections">
      {sections.map(([title, content], index) => (
        <CaseSection key={title} number={String(index + 1).padStart(2, '0')} title={title}>
          {title === 'Technologies Used' ? (
            <ul className="case-study__tags">{content.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          ) : Array.isArray(content) ? (
            <ul className="case-study__focus">{content.map((item) => <li key={item}><ArrowUpRight size={14} aria-hidden="true" />{item}</li>)}</ul>
          ) : <p>{content || 'Details are not listed in the current project information.'}</p>}
        </CaseSection>
      ))}
      {caseStudy.flow?.length > 0 && <CaseSection number="09" title="Workflow"><FlowList steps={caseStudy.flow} /></CaseSection>}
    </div>
  );
}

function FlowList({ steps }) {
  return <ol className="case-study__flow">{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}{index < steps.length - 1 && <ArrowDownRight size={15} aria-hidden="true" />}</li>)}</ol>;
}

function CaseSection({ number, title, children }) {
  return <section className="case-study__section"><span>{number}</span><div><h3>{title}</h3>{children}</div></section>;
}
