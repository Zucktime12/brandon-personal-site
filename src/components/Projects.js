import React, { Component } from 'react';
import '../App.css';
// import projects from '../headings/projects.svg'
import myProjects from '../myProjects';
import Project from './Project';

class Projects extends Component {

	constructor() {
		super();
		this.state = {
			projects: {},
		};
	}

	componentWillMount() {
	    this.setState({
			projects: myProjects
		});
	}

	render() {
	  	return (
	    	<section id="projects" className="Projects gradient">
	    		<div className="Projects-container">
	    			<h2>My Works!</h2>

		            <ul className="Projects-list">
						{
							Object
							.keys(this.state.projects)
							.map(key => <Project key={key} index={key} details={this.state.projects[key]} />)
						}
					</ul>
	        	</div>
	      	</section>
	  	);
	}
}

export default Projects;
    