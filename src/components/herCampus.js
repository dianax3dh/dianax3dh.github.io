import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from 'react-player';
import Container from 'react-bootstrap/Container';


class HerCampus extends Component{
	render(){
	return(
		<div>
			
			<div className="bgBoxContent">
					<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			              <Row>
			              	<Container>
			                <Nav className="navToggle">
			                  <Nav.Item>
			                    <Nav.Link><Link to="/portfolio" className="nav" activeClassName="active"><p> Portfolio </p> </Link></Nav.Link>
			                  </Nav.Item>
			                  <Nav.Item>
			                    <Nav.Link className="titles" eventKey="first" className="nav">Her Campus at UCLA</Nav.Link>
			                  </Nav.Item>
			                </Nav>
			               	</Container>
			              </Row>
			            <Tab.Content>
							<Tab.Pane eventKey="first">
								<Container>
									<br/>
									<h6 className="jobPos"> Jan. 2018 - June 2019 : Graphic Designer </h6>
									<h6 className="jobDes"> Using Adobe Photoshop and Illustrator and Procreate </h6>
								</Container>
								<Row>
									<Col>
										<img className="hc" src={`${process.env.PUBLIC_URL}/portfolio/hercampus/matcha.jpeg`}/>
									</Col>
									<Col>
										<img className="hc" src={`${process.env.PUBLIC_URL}/portfolio/hercampus/hcsurvkit.png`}/>
									</Col>
								</Row>
								<Row>
									<Col>
										<img className="hc" src={`${process.env.PUBLIC_URL}/portfolio/hercampus/flower-jar.png`}/>
									</Col>
									<Col>
										<img className="hc" src={`${process.env.PUBLIC_URL}/portfolio/hercampus/coffee.png`}/>
									</Col>
								</Row>
								<Row>
									<Col>
										<img className="hc" src={`${process.env.PUBLIC_URL}/portfolio/hercampus/hc-apps.png`}/>
										<img className="hc" src={`${process.env.PUBLIC_URL}/portfolio/hercampus/hc-gal.gif`}/>
									</Col>
									<Col>
										<img className="hc" src={`${process.env.PUBLIC_URL}/portfolio/hercampus/fem.png`}/>
										<img className="hc" src={`${process.env.PUBLIC_URL}/portfolio/hercampus/itsokay.jpeg`}/>
									</Col>
								</Row>
								<Row>
									<Col>
										 <div className="d-block w-100">
											<ReactPlayer
												className='react-player'
												className="igWrapper"
												url={`${process.env.PUBLIC_URL}/portfolio/hercampus/ig.mov`}
												width='70%'
												height='70%'
												playing
												muted
												loop
												/>
										</div>	
									</Col>
								</Row>
							</Tab.Pane>
						</Tab.Content>
					</Tab.Container>
				</div>
		</div>

	);
	}
}

export default HerCampus;
