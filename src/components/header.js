import React, { Component } from 'react';
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
      <div className= "head-img"></div>
        <div className="head">
            
            <div>
            <h1>Reimagine< br/> home</h1>
              <p>We’ll help you find a place you’ll love.</p>
              <div><a className="contact" href="#">Contact Us</a></div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
