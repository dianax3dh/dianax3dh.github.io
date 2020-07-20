import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DeveloperPage(props){
	return(
		<div>
		<Link to="/" className="home"><p> home </p> </Link>

			<div className="bgBox">
				<div className="content">
				<Row>
					<Col>
						<Link to="/f1tenth-design"><img className="folder" src="/f1tenthFolder.png"
						onMouseOver={e => (e.currentTarget.src = "f1tenthOpenFolder.png")}
    					onMouseOut={e => (e.currentTarget.src = "f1tenthFolder.png")}/></Link>
    				</Col>
    			</Row>
				</div>

			</div>
		</div>

	)
}

export default DeveloperPage;