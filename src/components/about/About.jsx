import React from 'react';
import './About.scss';

export default function About() {
  return (
    <div className='about'>
      <div className="wrapper">
        <div className="left">
          <img src="/MyAboutPhoto.png" alt="My Image" className="profile-image" />
        </div>
        <div className="right">
          <div className="right-container">
            <h2>About Me</h2>
            <p>
            A Software Engineer, dedicated to crafting innovative solutions<span className='star'/> that push the boundaries of what's possible
            <span className="rocket">🚀</span>
            </p>
            <h3>Skills</h3>
            <ul>
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
              {/* Add more skills as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
