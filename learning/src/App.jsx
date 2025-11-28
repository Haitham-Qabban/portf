import './App.css';
import Spline from '@splinetool/react-spline';
import { Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Skills from './Skills';
import Me from './Me';
import Contacts from './Contacts';

function Title() {
  return (
    <div className="header-container">
      <p className="name">HAITHAM QABBAN</p>
      <p className="title">SOFTWARE DEVELOPER</p>
    </div>
  );
}

function Instruction() {
  return (
    <div className="instruction-container">
      <p className="instruction-text">Click a key to navigate →</p>
    </div>
  );
}

function FrontPage() {
  return (
    <div className="frontpage">
      <Title />
      <Instruction />
      <div className="three-d-container">
        <Spline scene="/scene (1).splinecode" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/me" element={<Me />} />
    </Routes>
  );
}