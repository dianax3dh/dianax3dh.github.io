import React, { Component } from "react";
import myImage from './assets/me.jpg'

export default class PopUpMe extends Component {
  handleClick = () => {
   this.props.toggle();
  };

render() {
  return (
   <div>
     <img className="mePhoto" src={myImage}/>
     <p className="about-text">
        I graduated from UCLA in 2019 with a degree in Linguistics and Computer Science and minor in Cognitive Science.
     </p>
     <p className="about-text">
        I am currently working on freelance projects and instructing for Girls Who Code 2020 Summer Immersion Program. When I am 
        not working, I greatly enjoy working on creative projects, such as sewing. The outfit in my photo above was made by myself along with the help of my mother!
     </p>
     <p className="about-text">
      This portfolio was created as a practice for me to learn ReactJS.
     </p>
      <p className="about-text">
      For inquiries, please contact me at my <a className="email" href="mailto:diananhoang@gmail.com" target="_blank"> email</a>. 
     </p>

   </div>
  );
 }
}