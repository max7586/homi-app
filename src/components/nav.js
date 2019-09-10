import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
          <li><a href="#"><i class="fas fa-home"></i></a></li>
              <li><a href="#">Hom<span style={{color:"blue", fontSize:"1.5rem" }} >i</span></a></li>
              
            
          </ul>
          <ul>
              <li  className="nav__list"><a href="#">Properties</a></li>
              <li  className="nav__list"><a href="#">List your property</a></li>
              <li  className="nav__list"><a href="#">SignIn</a></li>

          </ul>
      </nav>
    );
  }
}

export default Nav;
