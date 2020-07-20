import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function AboutMe(props){
	return(
		<div>
			<div className="bgBox">
				<div className="content">
				<Container>
					<Link to="/" className="home"><p> Home </p> </Link>
				</Container>
				<Row>
					<Col>
						<Link to="/f1tenth-design"><img className="folder" src="/f1tenthFolder.png"
						onMouseOver={e => (e.currentTarget.src = "/f1tenthOpenFolder.png")}
    					onMouseOut={e => (e.currentTarget.src = "/f1tenthFolder.png")}/></Link>
    				</Col>
    				<Col>
						<Link to="/hercampus-design"><img className="folder" src="/hc-folder.png"
						onMouseOver={e => (e.currentTarget.src = "/hc-open.png")}
    					onMouseOut={e => (e.currentTarget.src = "/hc-folder.png")}/></Link>
    				</Col>
    				<Col>
						<Link to="/for-fun-design"><img className="folder" src="/for-fun.png"
						onMouseOver={e => (e.currentTarget.src = "/for-fun-open.png")}
    					onMouseOut={e => (e.currentTarget.src = "/for-fun.png")}/></Link>
    				</Col>
    			</Row>
				</div>

			</div>
		</div>

	)
}

export default AboutMe;