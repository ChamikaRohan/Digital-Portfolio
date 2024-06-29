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
            
            {/* Interested Fields */}
            <div>
              <h3>Interested Fields</h3>
              <div className="badges">
                <div className="badge">
                  <span role="img" aria-label="Software Engineering">💻</span>
                  <span>Software Engineering</span>
                </div>
                <div className="badge">
                  <span role="img" aria-label="Web Development">🌐</span>
                  <span>Web Development</span>
                </div>
                <div className="badge">
                  <span role="img" aria-label="Deep Learning">🤖</span>
                  <span>Deep Learning</span>
                </div>
                <div className="badge">
                  <span role="img" aria-label="Machine Learning">🧠</span>
                  <span>Machine Learning</span>
                </div>
                <div className="badge">
                  <span role="img" aria-label="Natural Language Processing">📝</span>
                  <span>Natural Language Processing</span>
                </div>
                <div className="badge">
                  <span role="img" aria-label="Machine Vision/Image Processing">📷</span>
                  <span>Machine Vision/Image Processing</span>
                </div>
              </div>
            </div>
            
            {/* Technology Stack */}
            <div>
              <h3>Technology Stack</h3>
              <section className="logosContainer">
                <div className="marquee">
                  <div className="track">
                    <img src="/Logos/Java.jpeg" alt="Java" />
                    <img src="" alt="Placeholder"  />
                    <img src="" alt="Placeholder"  />
                    {/* Add more empty img tags here */}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
