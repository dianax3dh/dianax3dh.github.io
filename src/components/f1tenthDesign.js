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
import Carousel from 'react-bootstrap/Carousel';


class DesignF1tenth extends Component{
	
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
			                    <Nav.Link className="titles" eventKey="first" className="nav">Web Developer</Nav.Link>
			                  </Nav.Item>
			                  <Nav.Item>
			                    <Nav.Link className="titles" eventKey="second" className="nav">Designer</Nav.Link>
			                  </Nav.Item>
			                </Nav>
			               	</Container>
			              </Row>
			            <Tab.Content>
							<Tab.Pane eventKey="first">
								<Row>
									<Col>
										<br/>
										<Container>
										<h5> <a href={'https://f1tenth.org/'} className="linkTitle" target="_blank"> F1TENTH.org </a> </h5> <h5> <a href={'https://ifac2020.f1tenth.org/'} className="linkTitle" target="_blank"> F1TENTH iFac2020 Virtual Race </a> </h5>
										<h6 className="jobPos"> Ongoing : Principal Web Developer & Designer </h6>
										<h6 className="jobDes"> Using HTML/CSS, JavaScript, and ReactJS </h6>
										</Container>
									</Col>		
								</Row>
								<Row>
									<Col>
									<div className="CarouselWrapper">
									<Carousel pause='hover'>
									  <Carousel.Item>
									    <img
									      className="d-block w-100"
									      src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/about-1.png`} 
									      alt="About Page"
									    />
									  </Carousel.Item>
									  <Carousel.Item>
									    <img
									      className="d-block w-100"
									      src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/about-2.png`}
									      alt="About Page"
									    />
									  </Carousel.Item>
									  <Carousel.Item>
									    <img
									      className="d-block w-100"
									      src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/about-3.png`}
									      alt="About Page"
									    />
									  </Carousel.Item>
									<Carousel.Item>
									    <img
									      className="d-block w-100"
									      src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/about-4.png`}
									      alt="About Page"
									    />
									  </Carousel.Item>
									<Carousel.Item>
									     <div className="videoWrapper" className="d-block w-100">
											<ReactPlayer
												className='react-player'
												className="d-block w-100"
												url={`${process.env.PUBLIC_URL}/portfolio/f1tenth/f110-1.mov`}
												width='90%'
												height='90%'
												playing
												muted
												loop
												/>
										</div>	
									  </Carousel.Item>
									</Carousel>
									</div>
									</Col>
								</Row>
								<Row>
									<Col>
										<div className="CarouselWrapper">
										<Carousel pause='hover'>
										  <Carousel.Item>
										    <img
										      className="d-block w-100"
										      src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/research-1.png`}
										      alt="Research Page"
										    />
										  </Carousel.Item>
										  <Carousel.Item>
										    <img
										      className="d-block w-100"
										      src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/research-3.png`}
										      alt="Research Page"
										    />
										  </Carousel.Item>
										  <Carousel.Item>
										    <img
										      className="d-block w-100"
										      src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/research-2.png`}
										      alt="Research Page"
										    />
										  </Carousel.Item>
										  <Carousel.Item>
										     <div className="videoWrapper" className="d-block w-100">
												<ReactPlayer
										          className='react-player'
										          className="d-block w-100"
										          url={`${process.env.PUBLIC_URL}/portfolio/f1tenth/f110-3.mov`}
										          width='90%'
										          height='90%'
										          playing
										          mutedclass
										          loop
										        />
											</div>
										  </Carousel.Item>
										</Carousel>
										</div>	
									</Col>
								</Row>
								<Row>
									<Col>
										<div className="CarouselWrapper">
										<Carousel pause='hover'>
										  <Carousel.Item>
										    <img
										      className="d-block w-100"
										      src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/race-1.png`}
										      alt="Race Page"
										    />
										  </Carousel.Item>
										  <Carousel.Item>
										    <img
										      className="d-block w-100"
										      src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/race-2.png`}
										      alt="Race Page"
										    />
										  </Carousel.Item>
										  <Carousel.Item>
										     <div className="videoWrapper" className="d-block w-100">
												<ReactPlayer
										          className='react-player'
										          className="d-block w-100"
										          url={`${process.env.PUBLIC_URL}/portfolio/f1tenth/f110-2.mov`}
										          width='90%'
										          height='90%'
										          playing
										          mutedclass
										          loop
										        />
											</div>
										  </Carousel.Item>
										</Carousel>
										</div>
									</Col>
								</Row>
								<Row>
									<Col>
										<div className="CarouselWrapper">
										<Carousel pause='hover'>
										  <Carousel.Item>
										    <img
										      className="d-block w-100"
										      src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/ifac-1.png`}
										      alt="ifac2020"
										    />
										  </Carousel.Item>
										  <Carousel.Item>
										    <img
										      className="d-block w-100"
										      src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/ifac-2.png`}
										      alt="ifac2020"
										    />
										  </Carousel.Item>
										  <Carousel.Item>
										     <div className="videoWrapper" className="d-block w-100">
												<ReactPlayer
										          className='react-player'
										          className="d-block w-100"
										          url={`${process.env.PUBLIC_URL}/portfolio/f1tenth/ifac-vid.mov`}
										          width='90%'
										          height='90%'
										          playing
										          mutedclass
										          loop
										        />
											</div>
										  </Carousel.Item>
										</Carousel>
										</div>
									</Col>
								</Row>
							</Tab.Pane>
							<Tab.Pane eventKey="second">
										<Container>
										<h6 className="jobDes"> Using Adobe Photoshop and Illustrator </h6>
										</Container>
								<Row>
									<Col>
										<img className="banners" src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/porto.png`}/>
									</Col>
									<Col>
										<img className="banners" src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/montreal.png`}/>
									</Col>
								</Row>
								<Row>
									<Col>
										<img className="banners" src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/esw2016.png`}/>
									</Col>
									<Col>
										<img className="banners" src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/iros2020.png`}/>
									</Col>
								</Row>
								<Row>
									<Col>
										<img className="banners" src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/esw2018-italy.png`}/>
										<img className="banners" src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/buildCar.gif`}/>
									</Col>
									<Col>
										<img className="banners" src={`${process.env.PUBLIC_URL}/portfolio/f1tenth/ifac2020.png`}/>
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

export default DesignF1tenth;
