import './App.css';
import Spline from '@splinetool/react-spline';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Projects from './Projects';
import Skills from './Skills';
import Contacts from './Contacts';
import About from './About';

const KEY_MAP = [
  { key: 'SEND', page: 'Projects' },
  { key: 'YOU', page: 'Skills' },
  { key: 'YOU 2', page: 'About' },
  { key: 'YOU 3', page: 'Contact' },
  { key: 'L', page: 'GitHub' },
];

function KeyLegend() {
  return (
    <div className="key-legend">
      {KEY_MAP.map(({ key, page }) => (
        <div className="key-hint" key={key}>
          <span className="key-cap">{key}</span>
          <span className="key-label">{page}</span>
        </div>
      ))}
    </div>
  );
}

function FrontPage() {
  const navigate = useNavigate();
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));

  const handleKeyPress = async (name) => {
    if (name === 'Key Send') { await delay(400); navigate('/projects'); }
    else if (name === 'Key YOU') { await delay(400); navigate('/skills'); }
    else if (name === 'Key YOU 2') { await delay(400); navigate('/about'); }
    else if (name === 'Key YOU 3') { await delay(400); navigate('/contacts'); }
    else if (name === 'Key Esc') { navigate('/'); }
    else if (name === 'Key L') { await delay(800); window.open('https://github.com/Haitham-Qabban', '_blank'); }
    else if (name === 'Key Smile') { await delay(2000); window.open('https://wd103.myworkday.com/swisscom/d/inst/1$37/247$14923.htmld#TABTASKID=2998%2431336', '_blank'); }
  };

  return (
    <div className="frontpage">
      <div className="header-container">
        <p className="name">HAITHAM QABBAN</p>
        <p className="title">0.70x SOFTWARE DEVELOPER</p>
        <p className="instruction-text">Click a key to navigate</p>
      </div>
      <KeyLegend />
      <div className="three-d-container">
        <Spline
          scene="/scene (4).splinecode"
          onLoad={(spline) => {
            spline.addEventListener('mouseDown', (e) => {
              handleKeyPress(e.target.name);
            });
          }}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}