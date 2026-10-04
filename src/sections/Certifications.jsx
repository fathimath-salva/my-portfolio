import SectionHeading from '../components/SectionHeading';
import CertificationCard from '../components/CertificationCard';
import { certifications } from '../data/portfolioData';

/* -------------------------------------------------------
   Certifications Section
------------------------------------------------------- */
export default function Certifications() {
  return (
    <section id="certifications" className="section section--alt certifications" aria-label="Certifications">
      <div className="container">
        <SectionHeading
          number="05"
          label="Certifications"
          title="Credentials & Courses"
          subtitle="Professional certifications and courses completed in cloud computing and machine learning."
        />

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
