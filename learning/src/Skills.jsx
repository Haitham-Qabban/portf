
import React from 'react';
import './Skills.scss';
export default function Skills() {
  return (
    <>
      <div className="skills">
        <h1>Skills Page</h1>
      </div>
      <SkillLogos />
    </>
  );
}


export function SkillLogos() {
  return (
    <div className="skill-logos">
      <img className="skill-logo" src="angular-icon.svg" alt="Angular Logo" />
    </div>
  );
}