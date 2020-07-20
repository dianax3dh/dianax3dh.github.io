import React, { Component } from "react";
import { Link } from 'react-router-dom'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import f110Folder from './assets/f1tenthFolder.png';
import f110FolderOpen from './assets/f1tenthOpenFolder.png';
import hcFolder from './assets/hc-folder.png';
import hcFolderOpen from './assets/hc-open.png';
import ffFolder from './assets/for-fun.png';
import ffFolderOpen from './assets/for-fun-open.png'


export default class PopUpPortfolio extends Component {
  handleClick = () => {
   this.props.toggle();
  };

render() {
  return (
   <div>
      <div className="portfolio-content">
        <Row>
          <Col>
            <Link to="/f1tenth-design"><img className="folder-pop" src={f110Folder}
            onMouseOver={e => (e.currentTarget.src = f110FolderOpen)}
              onMouseOut={e => (e.currentTarget.src = f110Folder)}/></Link>
            </Col>
            <Col>
            <Link to="/hercampus-design"><img className="folder-pop" src={hcFolder}
            onMouseOver={e => (e.currentTarget.src = hcFolderOpen)}
              onMouseOut={e => (e.currentTarget.src = hcFolder)}/></Link>
            </Col>
            <Col>
            <Link to="/for-fun-design"><img className="folder-pop" src={ffFolder}
            onMouseOver={e => (e.currentTarget.src = ffFolderOpen)}
              onMouseOut={e => (e.currentTarget.src = ffFolder)}/></Link>
            </Col>
          </Row>
        </div>
   </div>
  );
 }
}