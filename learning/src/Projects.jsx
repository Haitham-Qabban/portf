import './Projects.scss';

export default function Projects() {
  return (
    <div className="projects">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>Project 1</h1>
          </div>
          <div className="flip-card-back">
            <h1>Project 1</h1>
            <p>Description of Project 1</p>
            <p>Technologies used</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>Project 2</h1>
          </div>
          <div className="flip-card-back">
            <h1>Project 2</h1>
            <p>Description of Project 2</p>
            <p>Technologies used</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>Project 3</h1>
          </div>
          <div className="flip-card-back">
            <h1>Project 3</h1>
            <p>Description of Project 3</p>
            <p>Technologies used</p>
          </div>
        </div>
      </div>
    </div>
  );
}