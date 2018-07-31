import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
    // example how to bind object in React ES6
    this.handleScroll = this.handleScroll.bind(this)
}

componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll() {

  if (window.scrollY > 100) {
    console.log("should lock");
    this.setState({
      scrollingLock: true
    });
  } else if (window.scrollY < 100) {
    console.log("not locked" );
    this.setState({
      scrollingLock: false
    });
  }

}

  render() {
    return (
        <div className='Header'>
        	<header className={ this.state.scrollingLock ? "Header-scroll" : "Header-scroll-out" }>
        		<div className="Header-container">
        			<div className="Header-home">
                <a href="/">
        					<h2 className="Header-logo">Brandon</h2> 
                </a>
        			</div>
        			<div className="Header-navigation">
                <a href="/#about">About</a>
                <a href="/#projects">Projects</a>
                <a href="/#contact">Contact</a>
              </div>
  		    </div>
          </header>
        </div>  
    );
  }
}

export default Header;
