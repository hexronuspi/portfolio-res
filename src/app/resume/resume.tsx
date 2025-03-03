import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaCode, FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa';

// Interfaces for type safety
interface ResumeItemProps {
  title: string;
  subtitle?: string;
  duration?: string;
  children?: React.ReactNode;
  tools?: string;
}

interface ResumeSectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

// Reusable section component with animation
const ResumeSection: React.FC<ResumeSectionProps> = ({ title, id, children }) => (
  <motion.section 
    id={id}
    className="resume-section"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h2>{title}</h2>
    <div className="section-content">
      {children}
    </div>
  </motion.section>
);

// Reusable resume item component
const ResumeItem: React.FC<ResumeItemProps> = ({ title, subtitle, duration, tools, children }) => (
  <div className="resume-item">
    <div className="item-header">
      <h3>{title}</h3>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      {duration && <p className="duration">{duration}</p>}
    </div>
    {tools && <p className="tools-used"><strong>Tools:</strong> {tools}</p>}
    <div className="item-content">
      {children}
    </div>
  </div>
);

// Contact link component with icon
const ContactLink: React.FC<{ href: string; icon: React.ReactNode; label: string; external?: boolean }> = 
  ({ href, icon, label, external }) => (
    <a 
      href={href} 
      className="contact-link" 
      target={external ? "_blank" : undefined} 
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
    >
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>
    </a>
  );

const Resume: React.FC = () => {
  // Memoized contact links to prevent unnecessary re-renders
  const contactLinks = useMemo(() => [
    { 
      href: "tel:+918797073498", 
      icon: <FaPhone />, 
      label: "+91-8797073498" 
    },
    { 
      href: "mailto:adityar.ug22.ec@nitp.ac.in", 
      icon: <FaEnvelope />, 
      label: "adityar.ug22.ec@nitp.ac.in" 
    },
    { 
      href: "https://linkedin.com/in/hexronus", 
      icon: <FaLinkedin />, 
      label: "LinkedIn", 
      external: true 
    },
    { 
      href: "https://github.com/hexronuspi", 
      icon: <FaGithub />, 
      label: "GitHub", 
      external: true 
    },
    { 
      href: "https://codeforces.com/profile/hexronus", 
      icon: <FaCode />, 
      label: "Codeforces", 
      external: true 
    },
    { 
      href: "https://hexronus.vercel.app/", 
      icon: <FaGlobe />, 
      label: "Portfolio", 
      external: true 
    }
  ], []);

  return (
    <div className="resume-container">
      <header className="resume-header">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Aditya Raj</h1>
          
          <div className="contact-links">
            {contactLinks.map((link, index) => (
              <ContactLink 
                key={index}
                href={link.href}
                icon={link.icon}
                label={link.label}
                external={link.external}
              />
            ))}
          </div>
        </motion.div>
      </header>

      <main className="resume-body">
        <ResumeSection title="Personal Statement" id="personal-statement">
          <p>
            I am passionate about understanding neural network mathematics, memory mechanisms in large language models, 
            and their ability to transform numbers into images. I focus on applied AI research for real-world impact, 
            possess strong skills in model development and performance evaluation, and am proficient in Python and 
            deep learning frameworks. I've won deep learning competitions and built successful real-world projects.
          </p>
        </ResumeSection>

        <ResumeSection title="Education" id="education">
          <ResumeItem 
            title="B.Tech in Electronics &amp; Communication Engineering"
            subtitle="National Institute of Technology, Patna (2022 - 2026) | CGPA: 7.76"
          />
          <ResumeItem 
            title="Senior Secondary"
            subtitle="CBSE (2020 - 2022) | Percentage: 93.20%"
          />
          <ResumeItem 
            title="Secondary"
            subtitle="ICSE (2010 - 2020) | Percentage: 90.20%"
          />
        </ResumeSection>

        <ResumeSection title="Experience" id="experience">
          <ResumeItem 
            title="GenAI Development Intern, 21Spheres"
            duration="Dec 2024 - Present"
          >
            <ul>
              <li>
                Developed an in-house RAG agent from scratch, designing a pipeline to retrieve and clean data from websites using a web scraper. The system runs llama3.2 locally using Ollama as crew_ai agents.
              </li>
              <li>
                Designed and developed a multimodal text-image based AI search using Ollama and Sentence-Transformers for personalized product recommendations, including an advanced image similarity search using CLIP embeddings.
              </li>
              <li>
                Currently working on a recommendation system evaluation paper comparing different recommendation algorithms and their benchmarking results.
              </li>
            </ul>
          </ResumeItem>

          <ResumeItem 
            title="Research Intern, IIT Jodhpur (SIP@SAIDE 2024)"
            duration="May 2024 - July 2024 (Remote)"
          >
            <ul>
              <li>
                Implemented image classification algorithms using various architectures (AlexNet, MobileNet, EffNet, Custom Attention and CNN) on the FER 2013 Facial Image Dataset, achieving up to 53% accuracy.
              </li>
              <li>
                Applied signal processing techniques and feature extraction using a CNN sliding window approach to fuse EEG and video data on the SEED V dataset.
              </li>
            </ul>
          </ResumeItem>

          <ResumeItem 
            title="Intern, IIT Guwahati (Dept. of CSE 2024)"
            duration="June 2024 - July 2024 (Remote)"
          >
            <ul>
              <li>
                Developed a Python system to generate a diverse synthetic dataset of geometric shapes and implemented a GAN using PyTorch with a UNet-based generator for image completion.
              </li>
              <li>
                Enhanced MNIST dataset images using Real-ESRGAN for realistic image restoration and super-resolution.
              </li>
            </ul>
          </ResumeItem>
        </ResumeSection>

        <ResumeSection title="Projects" id="projects">
          <ResumeItem 
            title="Evaluating Compact Object Detection Models for Aerial Imagery"
            tools="Python, OpenCV, PyTorch, Image Processing"
          >
            <ul>
              <li>
                Developed a custom small object detection model using a grid-based CNN and Normalized Wasserstein Distance (NWD) loss on a subset of the SkyFusion dataset, targeting airplanes, vehicles, and ships.
              </li>
              <li>
                Benchmarked against a Faster R-CNN with a ResNet-50-FPN backbone; while the compact model (0.250 MB) is highly efficient, it had lower mAP and higher loss. The use of NWD increased mAP by 10% compared to traditional L2 Loss.
              </li>
            </ul>
          </ResumeItem>

          <ResumeItem 
            title="Image Based Audio Generation"
            tools="Python, OpenCV, OpenAI CLIP, Hugging Face GPT-2M"
          >
            <ul>
              <li>
                Implemented an image captioning system using CLIP and a PyTorch-based GPT variant, which increased the number of contextually similar generated words by 30% through edge enhancement.
              </li>
            </ul>
          </ResumeItem>

          <ResumeItem 
            title="Clinic Management Website"
            tools="JavaScript, Supabase, Next.js 14"
          >
            <ul>
              <li>
                Developed and maintained a high-performance website serving over 10,000 users with 300 monthly active users. All operations—from login to booking and email confirmation—execute in under 0.5 seconds.
              </li>
              <li>
                Implemented features like RBAC, CRUD functionality, appointment scheduling, lazy loading, debounce, memoization, personalized email notifications using Nodemailer and Google SMTP, and a centralized push-notification system.
              </li>
            </ul>
          </ResumeItem>
        </ResumeSection>

        <div className="columns">
          <ResumeSection title="Technical Skills" id="skills">
            <ul className="skills-list">
              <li><strong>Languages:</strong> C/C++ (Proficient), Python (Proficient), JavaScript</li>
              <li><strong>AI/ML:</strong> PyTorch, OpenCV, SciPy, NumPy, scikit-learn, Hugging Face, Langgraph, Crew AI, LangChain, LLamaIndex</li>
              <li><strong>Database:</strong> PostgreSQL</li>
              <li><strong>Other:</strong> Git, GitHub, Linux (Ubuntu), WSL</li>
              <li><strong>Tools:</strong> MATLAB, Supabase</li>
              <li><strong>Libraries:</strong> Nodemailer, Streamlit</li>
              <li><strong>Framework:</strong> Next.js 13, 14</li>
            </ul>
          </ResumeSection>

          <ResumeSection title="Courses" id="courses">
            <ul className="courses-list">
              <li>Artificial Intelligence and Machine Learning (A+)</li>
              <li>Electromagnetic Field Theory (A+)</li>
              <li>Introduction to Deep Learning (MOOC)</li>
              <li>Network, Signal and Systems</li>
              <li>Applied Linear Algebra (EE07-NPTEL)</li>
              <li>Introduction to Large Language Models (CS45-NPTEL)</li>
            </ul>
          </ResumeSection>
        </div>

        <ResumeSection title="Achievements" id="achievements">
          <ul className="achievements-list">
            <li>
              <strong>AI of GOD 3.0:</strong> IIT ISM Ranked 1st on Kaggle; finetuned OCR-LMs using a custom algorithm achieving a WER of 0.116 on an old Spanish manuscript (2024).
            </li>
            <li>
              <strong>Amazon ML Challenge:</strong> Ranked 184th among 75,000 registrations, achieving an F1 score of 0.4667 using moondream VLM (2024).
            </li>
            <li>
              <strong>Adobe GenSolve:</strong> Ranked among the top 5%ile, contributing to shape regularisation, completion, and symmetry detection (2024).
            </li>
          </ul>
        </ResumeSection>

        <ResumeSection title="Conference Paper" id="conference-paper">
          <p>
            <strong>EEG Functional Connectivity Feature-Based Diagnosis of ADHD Using Deep Learning on Raspberry Pi</strong> (Rejected)<br />
            Submitted to International Conference on Signal Processing and Communications (SPCOM 2024), PaperID - 204.<br />
            <em>Authors:</em> Rakesh Ranjan, Shiva Singh Bagri, Aditya Raj, Dr. Bikash Chandra SahanaP I<br />
            <em>Affiliation:</em> National Institute of Technology, Patna
          </p>
        </ResumeSection>

        <ResumeSection title="Academics" id="academics">
          <ul>
            <li>IOQA Qualified National Standard Examination in Astronomy (HBCSE, Mumbai) - 2022</li>
            <li>NTSE Qualified National Talent Search Exam Stage I - 2020</li>
            <li>RMO: Among top 1% of students in classes 8th-12th in India (scored 44/102) - 2019</li>
            <li>PRMO: Qualified Pre-Regional Mathematical Olympiad (2018, 2019, 2021)</li>
            <li>METER: Achieved State Rank 7th from Bihar Region among 50K+ students - 2017</li>
          </ul>
        </ResumeSection>

        <ResumeSection title="Positions of Responsibility" id="positions">
          <ResumeItem 
            title="Team Lead, AI/ML Web and Coding Club, NITP"
            duration="September 2024 - Present"
          >
            <ul>
              <li>
                Leading the project "OCR model MNIST" – a number detection model on the MNIST dataset using a custom algorithm.
              </li>
              <li>
                Overseeing "RNN-S-OCR" – a text detection model on an alphabet character dataset.
              </li>
            </ul>
          </ResumeItem>
          
          <ResumeItem 
            title="Team Coordinator, AI/ML Google Developer Students Club, NITP"
            duration="August 2023 - June 2024"
          >
            <ul>
              <li>
                Organized an open-book pure mathematics test for selecting first-year trainees.
              </li>
              <li>
                Designed AI/ML challenges for the TCF Technical Contest.
              </li>
            </ul>
          </ResumeItem>
        </ResumeSection>

        <ResumeSection title="Open Source Contributions" id="opensource">
          <ul>
            <li>
              Contributed to Supabase (
              <a
                href="https://github.com/supabase/supabase/pull/30555"
                target="_blank"
                rel="noopener noreferrer"
              >
                PR #30555
              </a>
              )
            </li>
          </ul>
        </ResumeSection>
      </main>

      <footer className="resume-footer">
        <div className="footer-links">
          <ContactLink href="mailto:adityar.ug22.ec@nitp.ac.in" icon={<FaEnvelope />} label="adityar.ug22.ec@nitp.ac.in" />
          <ContactLink href="https://linkedin.com/in/hexronus" icon={<FaLinkedin />} label="LinkedIn" external={true} />
          <ContactLink href="https://github.com/hexronuspi" icon={<FaGithub />} label="GitHub" external={true} />
        </div>
      </footer>

      <style jsx>{`
        /* Global styles */
        .resume-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
          line-height: 1.6;
          color: #1a202c;
          background-color: #ffffff;
        }

        /* Header styles */
        .resume-header {
          text-align: center;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .resume-header h1 {
          margin: 0;
          font-size: 2.8rem;
          font-weight: 700;
          color: #2d3748;
          letter-spacing: -0.5px;
        }

        .contact-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          color: #3182ce;
          text-decoration: none;
          font-size: 0.95rem;
          padding: 0.35rem 0.7rem;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .contact-link:hover {
          background-color: rgba(49, 130, 206, 0.1);
          transform: translateY(-2px);
        }

        .contact-link .icon {
          margin-right: 0.5rem;
          font-size: 1.1rem;
        }

        /* Main body styles */
        .resume-body {
          margin-bottom: 3rem;
        }

        /* Section styles */
        .resume-section {
          margin-bottom: 2.5rem;
        }

        .resume-section h2 {
          font-size: 1.75rem;
          font-weight: 600;
          color: #1a202c;
          border-bottom: 2px solid #3182ce;
          padding-bottom: 0.5rem;
          margin-bottom: 1.25rem;
        }

        /* Item styles */
        .resume-item {
          margin-bottom: 1.5rem;
          padding-left: 0.5rem;
        }

        .item-header {
          margin-bottom: 0.5rem;
        }

        .resume-item h3 {
          margin: 0;
          font-size: 1.3rem;
          font-weight: 600;
          color: #2d3748;
        }

        .subtitle {
          margin: 0.2rem 0;
          font-size: 1rem;
          color: #4a5568;
        }

        .duration {
          margin: 0.2rem 0;
          font-style: italic;
          color: #718096;
          font-size: 0.95rem;
        }

        .tools-used {
          font-size: 0.95rem;
          color: #718096;
          margin: 0.5rem 0 0.75rem;
        }

        /* List styles */
        ul {
          padding-left: 1.5rem;
          margin: 0.5rem 0;
        }

        li {
          margin-bottom: 0.5rem;
        }

        .skills-list li, .courses-list li, .achievements-list li {
          position: relative;
          padding-left: 0.25rem;
        }

        /* Two-column layout */
        .columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        /* Footer styles */
        .resume-footer {
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(0,0,0,0.1);
        }

        .footer-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .print-info {
          font-size: 0.85rem;
          color: #718096;
          margin: 0.5rem 0 0;
        }

        /* Print styles */
        @media print {
          .resume-container {
            padding: 0;
          }

          h1, h2, h3 {
            page-break-after: avoid;
          }

          .resume-item, ul, li {
            page-break-inside: avoid;
          }

          .print-info {
            display: none;
          }
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .resume-container {
            padding: 1rem;
          }

          .columns {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .contact-links {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;