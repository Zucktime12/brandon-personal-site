import React from 'react';
import ReactModal from 'react-modal';

class Project extends React.Component {
	constructor () {
	    super();
		    this.state = {
		      showModal: false
	    };
	    
	    this.handleOpenModal = this.handleOpenModal.bind(this);
	    this.handleCloseModal = this.handleCloseModal.bind(this);
	    
	}
	  
	handleOpenModal() {
	    this.setState({ showModal: true});
	}
	  
	handleCloseModal() {
	    this.setState({ showModal: false});
	}

	componentWillMount() {
	    ReactModal.setAppElement('body');
	}

	render() {
		const { details } = this.props;

		return (
			<li className="Project">
				<div onClick={this.handleOpenModal}>
					<img className="Project-image" src={'projects/' + details.image} alt={details.name}/>
					<div className="Project-overlay">
						<p>{details.name}</p>
					</div>
				</div>
				<div >
					<ReactModal 
						isOpen={this.state.showModal} 
						contentLabel="This is my Mod" 
						shouldCloseOnOverlayClick={true}
						onRequestClose={this.handleCloseModal}
					>
					<div className="modal-header">
						<h3>{details.name}</h3>
					</div>
					<div className="modal-body">
						<img className="Project-image" src={'projects/' + details.image} alt={details.name} />
						<p className="desc-body">{details.desc}</p>
					</div>
          			<div className="modal-footer">
          				{ details.havLink && <a className="button" href={details.link}>Click for Demo!</a>}
						<button className="button" onClick={this.handleCloseModal}>Close Modal</button>
          			</div>
        			</ReactModal>
        			
				</div>
				<div className="Project-tag">
					<p>{details.tag}</p>
				</div>
			</li>
		)
	}
}

const props = {};

export default Project;

