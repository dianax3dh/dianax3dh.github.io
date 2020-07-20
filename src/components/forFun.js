import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


class ForFun extends Component{
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
			                    <Nav.Link className="titles" eventKey="first" className="nav">Graphics & Illustrations</Nav.Link>
			                  </Nav.Item>
			                </Nav>
			               	</Container>
			              </Row>
			            <Tab.Content>
							<Tab.Pane eventKey="first">
								<Container>
									<br/>
									<h6 className="jobDes"> Using Adobe Photoshop and Illustrator and Procreate </h6>
								</Container>
								<Row>
									<Col>
										<img className="gandi" src={`${process.env.PUBLIC_URL}/portfolio/graphics&illustrations/dnh.png`}/>
									</Col>
									<Col>
										<img className="gandi" src={`${process.env.PUBLIC_URL}/portfolio/graphics&illustrations/lpf.png`}/>
									</Col>
								</Row>
								<Row>
									<Col>
										<img className="gandi" src={`${process.env.PUBLIC_URL}/portfolio/graphics&illustrations/you-are-ok.png`}/>
									</Col>
									<Col>
										<img className="gandi" src={`${process.env.PUBLIC_URL}/portfolio/graphics&illustrations/orange-girl.png`}/>
									</Col>
								</Row>
								<Row>
									<Col>
										<img className="gandi" src={`${process.env.PUBLIC_URL}/portfolio/graphics&illustrations/justoneday.jpeg`}/>
										<img className="gandi" src={`${process.env.PUBLIC_URL}/portfolio/graphics&illustrations/macchiato.gif`}/>
									</Col>
									<Col>
										<img className="gandi" src={`${process.env.PUBLIC_URL}/portfolio/graphics&illustrations/yappie.gif`}/>
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

export default ForFun;
