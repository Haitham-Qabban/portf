
import React, { useState } from 'react';  
import './Skills.scss';
export default function Skills() {
  const [skillValue, setSkillValue] = useState(0);
  
  return (
    <>
      <div className="skills">
        <p>Skills</p>
      </div>
      <Skillbar skillValue={skillValue} />
      <SkillLogos setSkillValue={setSkillValue} />
    </>
  );
}
export function Skillbar({ skillValue }) {
  return (
    <div className="Skillbar" style={{ '--skill-value': `${skillValue}%` }}><h1>Skill Level: {skillValue}%</h1>
      <div className="progress-container">
        <div className="progress-fill"></div>
      </div>
    </div>
  );
}



export function SkillLogos({ setSkillValue }) {

  return (
    <div className="skill-logos">
      <img onMouseOver={() => setSkillValue(80)} className="skill-logo" src="angular-icon.svg" alt="Angular Logo" />
      <img onMouseOver={() => setSkillValue(70)} className="skill-logo" src="blazor.svg" alt="Blazor Logo" />
      <img onMouseOver={() => setSkillValue(60)} className="skill-logo" src="c--4.svg" alt="C# Logo" />
      <img onMouseOver={() => setSkillValue(95)} className="skill-logo" src="css3-svgrepo-com.svg" alt="CSS3 Logo" />
      <img onMouseOver={() => setSkillValue(70)} className="skill-logo" src="docker-4.svg" alt="Docker Logo" />
      <img onMouseOver={() => setSkillValue(85)} className="skill-logo" src="dotnet-official.svg" alt=".NET Logo" />
      <img onMouseOver={() => setSkillValue(75)} className="skill-logo" src="FastAPI.svg" alt="FastAPI Logo" />
      <img onMouseOver={() => setSkillValue(95)} className="skill-logo" src="html-5-svgrepo-com.svg" alt="HTML5 Logo" />
      <img onMouseOver={() => setSkillValue(90)} className="skill-logo" src="javascript-svgrepo-com.svg" alt="JavaScript Logo" />
      <img onMouseOver={() => setSkillValue(65)} className="skill-logo" src="Podman.svg" alt="Podman Logo" />
      <img onMouseOver={() => setSkillValue(85)} className="skill-logo" src="python-svgrepo-com.svg" alt="Python Logo" />
      <img onMouseOver={() => setSkillValue(85)} className="skill-logo" src="react-svgrepo-com.svg" alt="React Logo" />
      <img onMouseOver={() => setSkillValue(90)} className="skill-logo" src="scss-svgrepo-com.svg" alt="SCSS Logo" />
      <img onMouseOver={() => setSkillValue(80)} className="skill-logo" src="sql-database-generic-svgrepo-com.svg" alt="SQL Logo" />
      <img onMouseOver={() => setSkillValue(70)} className="skill-logo" src="Three.js_Icon.svg" alt="Three.js Logo" />
      <img onMouseOver={() => setSkillValue(85)} className="skill-logo" src="typescript-icon-svgrepo-com.svg" alt="TypeScript Logo" />
      <img onMouseOver={() => setSkillValue(60)} className="skill-logo" src="unity-69.svg" alt="Unity Logo" />
      <img onMouseOver={() => setSkillValue(80)} className="skill-logo" src="vite.svg" alt="Vite Logo" />
      <img onMouseOver={() => setSkillValue(65)} className="skill-logo" src="webassembly-1.svg" alt="WebAssembly Logo" />
    </div>
  );
}