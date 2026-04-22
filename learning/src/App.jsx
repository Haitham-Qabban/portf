import './App.css';
import Spline from '@splinetool/react-spline';
import { Routes, Route, } from 'react-router-dom';
import Projects from './Projects';
import Skills from './Skills';
import Contacts from './Contacts';

function Title() {
  return (
    <div className="header-container">
      <p className="name">HAITHAM QABBAN</p>
      <p className="title">
      0.70x SOFTWARE DEVELOPER
      </p>
            <p className="instruction-text">Click a key to navigate </p>

    </div>
  );
}

function Instruction() {
  
}

function FrontPage() {
  
  return (
    <div className="frontpage">
      <Title />
      <Instruction />
      <div className="three-d-container">        
        <Spline 
          scene="/scene (4).splinecode"
          onLoad={(spline) => {
            const obj = spline.findObjectByName('Key Send');
            console.log(obj)
            spline.addEventListener('mouseDown',  async (e) => {
              if (e.target.name === 'Key Send') {
                console.log("Navigating to Projects");
              }
              if (e.target.name === 'Key L')
                 {  
                await new Promise(resolve => setTimeout(resolve, 800));
                window.open("https://github.com/Haitham-Qabban", "_blank");
              }
              if (e.target.name === 'Key Smile')
                 {  
                await new Promise(resolve => setTimeout(resolve, 2000));
                window.open("https://wd103.myworkday.com/swisscom/d/inst/1$37/247$14923.htmld#TABTASKID=2998%2431336", "_blank");
              }
              if (e.target.name === 'Key YOU 2')
                 {  

                console.log("Navigating to me");
              }
              if (e.target.name === 'Key YOU')
                 {  

                console.log("Navigating to works");
              }
              if (e.target.name === 'Key YOU 3')
                 {  

                console.log("Navigating to skills");
              }
              if (e.target.name === 'Key Esc')
                 {  

                console.log("Navigating to resume");
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
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
    </Routes> 
  )};