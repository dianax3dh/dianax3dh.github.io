import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'; 
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import styles from './Homepage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from './Modal.js';
import openMail from './assets/openmail.png';
import closedMail from './assets/mail.png';
import linkedIn from './assets/in.png';
import linkedInOpen from './assets/inopen.png';
import ig from './assets/ig.png';
import igOpen from './assets/igopen.png';



class Homepage extends Component{
	state = {
	    modal: false,
	    modalInfo: "",
	  }

	selectModal = (info = "") => {
	    this.setState({
	      modal: !this.state.modal,
	      modalInfo: info
	    })
	  }

	render(){
	return(
		<div className="intro-box">
			
			<h1 className="intro">Hello, my name is</h1>
			<div className="name" onClick={ () => this.selectModal('Modal-Me') }>
				<h1 className="intro">Diana. </h1>
			</div> 
			
			<h1 className="intro"> I am a 
				<span className="jobtitles" onClick={ () => this.selectModal('Modal-Portfolio') }> developer </span> & 
				<span className="jobtitles" onClick={ () => this.selectModal('Modal-Portfolio') }> designer</span>, currently based in the Bay Area. </h1>
			<Modal 
            displayModal={this.state.modal}
            modalInfo={this.state.modalInfo}
            closeModal={this.selectModal}/>
			<br/>
			<Row>
				<Col> <a href="mailto:diananhoang@gmail.com" target="_blank"> <img className="icon" src={closedMail}
    					onMouseOver={e => (e.currentTarget.src= openMail)}
    					onMouseOut={e => (e.currentTarget.src = closedMail)}
  					/> </a>
  				</Col>

 				<Col> <a href="https://www.linkedin.com/in/dnhoang/" target="_blank"> <img className="icon" src={linkedIn}
    					onMouseOver={e => (e.currentTarget.src = linkedInOpen)}
    					onMouseOut={e => (e.currentTarget.src = linkedIn)}
  					/> </a>  
  				</Col>
				<Col> <a href="https://www.instagram.com/dianax3dh/" target="_blank"> <img className="icon" src={ig}
    					onMouseOver={e => (e.currentTarget.src = igOpen)}
    					onMouseOut={e => (e.currentTarget.src = ig)}
  					/> </a>
  				</Col>

			</Row>
		</div>
		);
}
	
}

export default Homepage;
