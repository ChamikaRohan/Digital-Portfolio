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
            
            {/* Technology Stack Section */}
            <div>
              <h3>Technology Stack</h3>
              <section className="logosContainer">
                <div className="marquee">
                  <div className="track">
                    <img src="/Logos/Java.png" alt="Java" />
                    <img src="/Logos/Python.png" alt="Python" />
                    <img src="/Logos/C.png" alt="C" />
                    <img src="/Logos/C++.png" alt="C++" />
                    <img src="/Logos/JavaScript.png" alt="JavaScript" />
                    <img src="/Logos/React.png" alt="React" />
                    <img src="/Logos/Node.png" alt="Node" />
                    <img src="/Logos/Express.png" alt="Express" />
                    <img src="/Logos/HTML.png" alt="HTML" />
                    <img src="/Logos/CSS.svg" alt="CSS" />
                    <img src="/Logos/Sass.png" alt="Sass" />
                    <img src="/Logos/php.png" alt="php" />
                    <img src="/Logos/ReactNative.svg" alt="ReactNative" />
                    <img src="/Logos/SpringBoot.png" alt="SpringBoot" />
                    <img src="/Logos/Mysql.png" alt="Mysql" />
                    <img src="/Logos/MongoDB.svg" alt="MongoDB" />
                    <img src="/Logos/Tensorflow.png" alt="Tensorflow" />
                    <img src="/Logos/Keras.png" alt="Keras" />
                    <img src="/Logos/ScikitLearn.png" alt="ScikitLearn" />
                    <img src="/Logos/git.png" alt="Git" />
                    <img src="/Logos/postman.svg" alt="postman" />
                    <img src="/Logos/canva.png" alt="Canva" />
                    <img src="/Logos/ps.png" alt="Photoshop" />
                    <img src="/Logos/lr.png" alt="Lightroom" />
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
