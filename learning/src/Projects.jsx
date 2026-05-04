import { useNavigate } from 'react-router-dom';
import './Projects.scss';

const PROJECTS = [
  {
    title: 'Portfolio Website',
    description:
      'Interactive 3D portfolio built with React, Spline, and Vite. Features a custom 3D keyboard for navigation between pages.',
    tech: ['React', 'Spline', 'Vite', 'SCSS'],
    link: 'https://github.com/Haitham-Qabban',
  },
  {
    title: 'Full-Stack Web Application',
    description:
      'Enterprise-grade full-stack app with an Angular frontend and .NET 8 backend, containerized with Docker and backed by a SQL database.',
    tech: ['.NET', 'Angular', 'Docker', 'SQL'],
    link: 'https://github.com/Haitham-Qabban',
  },
  {
    title: 'AI-Powered REST API',
    description:
      'High-performance RESTful API built with FastAPI and Python, integrating machine learning models for intelligent data processing and analysis.',
    tech: ['Python', 'FastAPI', 'Docker', 'SQL'],
    link: 'https://github.com/Haitham-Qabban',
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="projects-page">
      <header className="projects-header">
        <button className="projects-back-btn" onClick={() => navigate('/')}>
          ← HOME
        </button>
        <h1 className="projects-page-title">PROJECTS</h1>
      </header>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <article className="project-card" key={i}>
            <h2 className="card-title">{p.title}</h2>
            <p className="card-desc">{p.description}</p>
            <div className="tech-tags">
              {p.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              View on GitHub →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
