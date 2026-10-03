import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { about, personal } from '../data/portfolioData';
import { MapPin, Mail, Phone } from 'lucide-react';

/* -------------------------------------------------------
   About Section
------------------------------------------------------- */
export default function About() {
  return (
    <section id="about" className="section section--alt about" aria-label="About Fathimath Salva">
      <div className="container">
        <div className="about__grid">
          {/* Text block */}
          <div className="about__content">
            <SectionHeading
              number="01"
              label="About Me"
              title="A curious mind building at the intersection of AI & design."
            />

            <div className="about__paragraphs">
              {about.paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  className="about__para"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.52, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Quick contact details */}
            <motion.div
              className="about__details"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              <div className="about__detail">
                <MapPin size={15} aria-hidden="true" />
                <span>{personal.location}</span>
              </div>
              <div className="about__detail">
                <Mail size={15} aria-hidden="true" />
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
              <div className="about__detail">
                <Phone size={15} aria-hidden="true" />
                <a href={`tel:${personal.phone}`}>{personal.phone}</a>
              </div>
            </motion.div>
          </div>

          {/* Decorative side panel */}
          <motion.div
            className="about__aside"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about__card">
              <span className="about__card-kicker">FIELD NOTES <span>01 — 03</span></span>
              <div className="about__card-stat">
                <span className="about__card-value">B.E.</span>
                <span className="about__card-label">AI & Machine Learning</span>
              </div>
              <div className="about__card-divider" aria-hidden="true" />
              <div className="about__card-stat">
                <span className="about__card-value">7.88</span>
                <span className="about__card-label">Current CGPA</span>
              </div>
              <div className="about__card-divider" aria-hidden="true" />
              <div className="about__card-stat">
                <span className="about__card-value">2027</span>
                <span className="about__card-label">Expected Graduation</span>
              </div>
              <div className="about__card-divider" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
