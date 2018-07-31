import React, { Component } from 'react';
import '../App.css';
// import about from '../headings/about.svg'
import react from '../icons/react.png'
import angularjs from '../icons/angularjs.png'
import css3 from '../icons/css3.png'
import git from '../icons/git.png'
import html5 from '../icons/html5.png'
import javascript from '../icons/javascript.png'
import jquery from '../icons/jquery.png'
// import photoshop from '../icons/photoshop.png'
import php from '../icons/php.png'
import sass from '../icons/sass.png'
// import shopify from '../icons/shopify.png'
import wordpress from '../icons/wordpress.png'

class About extends Component {
  render() {
    return (
      	<section id="about" className="About gradient">
      		<div className="About-container">
              <h2>About</h2>
              <div className="flex">   
                <div className="About-text flex-about">
      	        	<p>Hello, my name is Brandon! I’m an aspiring software developer intent on learning everything about software development. I have always had an interest in technology and computers, so when I was introduced to web development, I immediately fell in love with coding. I decided to put all of my effort into learning the skills needed for a new career in web development!</p>
                  <p>In particular, I love the problem-solving aspect of coding and getting to build interactive sites from the ground up. I am a self-taught developer, an avid learner, and I’ve found that there is almost always more than one way to solve a problem. I find great value in learning from mistakes so that I can learn from and build upon them. My work experience and knowledge gained from online classes and personal projects has shown me the fun of writing in different languages.</p>
                  <p>My software engineering internship at Devetry, previous job at New Media One and current web developer job at Outspoke has taught me amazing things about the field, such as how to work in a large code base, how to quickly learn a new language(AngularJS), and how to use wordpress. I have also learned how to figure things out when I am working on something completely new. My experience to date has reinforced my desire to be a Software Engineer. My portfolio below represents some of the things I created while learning on my own and while working at Devetry, New Media One and Outspoke.</p>
            	  </div>
                <div className="About-tech flex-about">
                  <h3>Proficient in:</h3>
                  <div className="About-icons">
                    <img className="About-icon" src={javascript} alt="Javascript" />
                    <img className="About-icon" src={html5} alt="HTML5" />
                    <img className="About-icon" src={css3} alt="CSS3" />
                    <img className="About-icon" src={wordpress} alt="Wordpress" />
                    <img className="About-icon" src={git} alt="Git" />
                    <img className="About-icon" src={sass} alt="SASS" />
                    <img className="About-icon" src={jquery} alt="JQuery" />
                  </div>
                  <h3>Intermediate in:</h3>
                   <div className="About-icons">
                    <img className="About-icon" src={angularjs} alt="AngularJS" />
                  </div>
                  <h3>Beginner in:</h3>
                   <div className="About-icons">
                    <img className="About-icon" src={react} alt="React" />
                    <img className="About-icon" src={php} alt="PHP" />
                  </div>
                </div>
            </div>
          </div>
        </section>
    );
  }
}

export default About;
