import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Folder, Download } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';
import Button from '../components/Button';
import { personal } from '../data/portfolioData';
import { getSectionScrollTarget, scrollToSectionTarget } from '../utils/sectionAnchor';

/* -------------------------------------------------------
   Hero Section — Typography-focused, no video
------------------------------------------------------- */
export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  const scrollTo = (id) => () =>
    scrollToSectionTarget(getSectionScrollTarget(document.querySelector(id)));

  return (
    <section id="home" className="hero" ref={sectionRef} aria-label="Hero — introduction">
      {/* Decorative background grid */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-grid" />
        <div className="hero__bg-blob hero__bg-blob--1" />
        <div className="hero__bg-blob hero__bg-blob--2" />
      </div>

      <div className="hero__inner container">
        <motion.div className="hero__content" style={{ y: textY }}>

          {/* Location label */}
          <motion.div
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__eyebrow-line" aria-hidden="true" />
            <span>AI &amp; MACHINE LEARNING ENGINEERING STUDENT</span>
          </motion.div>
          <p className="hero__location">MANGALURU, INDIA <span>—</span> FRESHER</p>

          {/* Main name — largest element */}
          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__name-first">Fathimath</span>
            <span className="hero__name-last">Salva<span className="hero__name-period">.</span></span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            className="hero__divider"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Student focus */}
          <motion.div
            className="hero__directions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero__direction">AI &amp; Machine Learning Engineering Student</p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.66, ease: [0.22, 1, 0.36, 1] }}
          >
            {personal.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              variant="primary"
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollTo('#projects')(); }}
              icon={<Folder size={15} />}
            >
              View My Projects
            </Button>
            <Button
              variant="secondary"
              href={personal.resumePath}
              download="Fathimath_Salva_Resume.pdf"
              icon={<Download size={15} />}
            >
              Download Resume
            </Button>
            <Button
              variant="ghost"
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact')(); }}
              icon={<Folder size={15} />}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <SocialLinks size="md" />
          </motion.div>
        </motion.div>

        {/* Right — decorative typographic composition */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="hero__art">
            <div className="hero__art-orbit-label">Curious by design</div>
            <div className="hero__art-badge">
              <span className="hero__art-badge-text">AI & ML</span>
            </div>
            <div className="hero__art-ring hero__art-ring--lg" />
            <div className="hero__art-ring hero__art-ring--sm" />
            <div className="hero__art-lines">
              <span /><span /><span /><span />
            </div>
            <div className="hero__art-card hero__art-card--1">
              <div className="hero__art-card-dot" />
              <div className="hero__art-card-bar" />
              <div className="hero__art-card-bar hero__art-card-bar--short" />
            </div>
            <div className="hero__art-card hero__art-card--2">
              <div className="hero__art-card-label">Computer Vision</div>
              <div className="hero__art-card-value">OpenCV · YOLO</div>
            </div>
            <div className="hero__art-card hero__art-card--3">
              <div className="hero__art-card-label">Frontend</div>
              <div className="hero__art-card-value">React · Next.js</div>
            </div>
            <div className="hero__art-word hero__art-word--1">Python</div>
            <div className="hero__art-word hero__art-word--2">TinyML</div>
            <div className="hero__art-index">01 <span>—</span> 08</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="hero__scroll-cta"
        onClick={scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        aria-label="Scroll to About section"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.button>
    </section>
  );
}
