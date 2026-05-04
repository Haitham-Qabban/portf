import { useNavigate } from 'react-router-dom';
import './About.scss';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <header className="about-header">
        <button className="about-back-btn" onClick={() => navigate('/')}>
          ← HOME
        </button>
        <h1 className="about-page-title">ABOUT ME</h1>
      </header>

      <div className="about-content">
        <div className="about-main">
          <h2 className="about-name">Haitham Qabban</h2>
          <p className="about-role">0.70x Software Developer</p>

          <div className="about-bio">
            <p>
              I'm a software developer with a passion for building clean,
              performant, and visually engaging web experiences. I work across
              the full stack — from crafting pixel-perfect UIs to designing
              scalable back-end services.
            </p>
            <p>
              Currently based in Switzerland, I enjoy working with modern
              frameworks like React, Angular, and .NET — and experimenting with
              3D web technologies like Three.js and Spline.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-row">
              <span className="detail-key">Location</span>
              <span className="detail-val">Switzerland</span>
            </div>
            <div className="detail-row">
              <span className="detail-key">Role</span>
              <span className="detail-val">Software Developer</span>
            </div>
            <div className="detail-row">
              <span className="detail-key">Specialty</span>
              <span className="detail-val">Full-Stack & 3D Web</span>
            </div>
            <div className="detail-row">
              <span className="detail-key">GitHub</span>
              <span className="detail-val">
                <a
                  href="https://github.com/Haitham-Qabban"
                  target="_blank"
                  rel="noreferrer"
                >
                  Haitham-Qabban →
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
