import './App.css';
import Spline from '@splinetool/react-spline';
import { Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Skills from './Skills';
import Me from './Me';
import { Application } from '@splinetool/runtime';

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
        <Spline 
          scene="https://prod.spline.design/wxSqik7SIoBvwaC0/scene.splinecode"
          onLoad={(spline) => {
            const obj = spline.findObjectByName('Key Send');
            console.log(obj)
            spline.addEventListener('mouseDown', (e) => {
              console.log('Clicked object:', e.target.name);
              if (e.target.name === 'Key Send') {
                window.location.href = '/projects'
                console.log("Navigating to Projects");
              }
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
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/me" element={<Me />} />
    </Routes>
  );
}