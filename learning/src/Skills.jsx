
import React from 'react';
import './Skills.scss';
export default function Skills() {
  return (
    <>
      <div className="skills">
        <p>Skills</p>
      </div>
      <Skillbar />
      <SkillLogos />
    </>
  );
}
export function Skillbar() {
  return (
    <div className="Skillbar">
      <progress className="progress is-large" value="80" max="100">
        80%
      </progress>
    </div>
  );
}


export function SkillLogos() {
  return (
    <div className="skill-logos">
      <img className="skill-logo" src="angular-icon.svg" alt="Angular Logo" />
      <img className="skill-logo" src="blazor.svg" alt="Blazor Logo" />
      <img className="skill-logo" src="c--4.svg" alt="C# Logo" />
      <img className="skill-logo" src="css3-svgrepo-com.svg" alt="CSS3 Logo" />
      <img className="skill-logo" src="docker-4.svg" alt="Docker Logo" />
      <img className="skill-logo" src="dotnet-official.svg" alt=".NET Logo" />
      <img className="skill-logo" src="FastAPI.svg" alt="FastAPI Logo" />
      <img className="skill-logo" src="html-5-svgrepo-com.svg" alt="HTML5 Logo" />
      <img className="skill-logo" src="javascript-svgrepo-com.svg" alt="JavaScript Logo" />
      <img className="skill-logo" src="Podman.svg" alt="Podman Logo" />
      <img className="skill-logo" src="python-svgrepo-com.svg" alt="Python Logo" />
      <img className="skill-logo" src="react-svgrepo-com.svg" alt="React Logo" />
      <img className="skill-logo" src="scss-svgrepo-com.svg" alt="SCSS Logo" />
      <img className="skill-logo" src="sql-database-generic-svgrepo-com.svg" alt="SQL Logo" />
      <img className="skill-logo" src="Three.js_Icon.svg" alt="Three.js Logo" />
      <img className="skill-logo" src="typescript-icon-svgrepo-com.svg" alt="TypeScript Logo" />
      <img className="skill-logo" src="unity-69.svg" alt="Unity Logo" />
      <img className="skill-logo" src="vite.svg" alt="Vite Logo" />
      <img className="skill-logo" src="webassembly-1.svg" alt="WebAssembly Logo" />
    </div>
  );
}