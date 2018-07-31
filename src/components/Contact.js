import React, { Component } from 'react';
import '../App.css';
import contact from '../headings/contact.svg'
import instagram from '../social/instagram.svg'
import github from '../social/github.svg'
import twitter from '../social/twitter.svg'
import linkedin from '../social/linkedin.svg'
import resume from '../resume.pdf'


class Contact extends Component {

  	render() {
	  return (
	    	<section id="contact" className="Contact">
	    		<div className="Contact-container">
	        	<h2>Contact</h2>
	        	<div className="Contact-social">
	        		<a href="https://www.instagram.com/bzucker12/" target="_blank" rel="noopener noreferrer">
	        			<img className="Social-instagram" src={instagram} alt="Instagram" />
	        		</a>
	        		<a href="https://github.com/Zucktime12" target="_blank" rel="noopener noreferrer">
	        			<img className="Social-github" src={github} alt="Github" />
	        		</a>
	        		<a href="https://twitter.com/Zucktime12" target="_blank" rel="noopener noreferrer">
	        			<img className="Social-twitter" src={twitter} alt="Twitter" />
	        		</a>
	        		<a href="https://www.linkedin.com/in/brandon-zucker" target="_blank" rel="noopener noreferrer">
	        			<img className="Social-linkedin" src={linkedin} alt="LinkedIn" />
	        		</a>
	        	</div>

	        	<div className="Contact-text">
	        		Send me an <a href="mailto:bwzuck12@gmail.com">email</a>, I'd love to hear from you! 
	        	</div>

	        	<div className="Contact-ctas">
					<div className="Contact-cta">
						<a className="button" href={resume} download="">Download Resume</a>
					</div>
	        	</div>        	
			</div>
	      </section>
	  );
	}
}

export default Contact;