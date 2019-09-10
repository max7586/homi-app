import React, { Component } from 'react';
import Form from "./form";

class Main extends Component {
  render() {
    return (
      <main>
       
     
        <section className="intro">
            <h2>About Us</h2>
            <div>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
        </section>

        <div>
             <div className="services">
                <div className="service-one">
                <p className="service-icon"><i class="fad fa-shopping-cart"></i></p>
                <p className="service-title">Buy a home</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="service-two">
                <p className="service-icon"><i class="fas fa-money-bill-wave"></i></p>
                <p className="service-title">Sell a home</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
                </div>
                <div className="service-three">
                <p className="service-icon"><i class="fas fa-retweet"></i></p>
                <p className="service-title">rent a home</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua frefrfr erg re greg.</p>
              
          </div>
        </div>

            </div>


        
        <div className="gallery">
         <div className="gallery-item-one"></div>
         <div className="gallery-item-two"></div>
         <div className="gallery-item-three"></div>
         <div className="gallery-item-four"></div>
         <div className="gallery-item-five"></div>
         <div className="gallery-item-six"></div>
         
        </div>

        <section>
            <h2>Our Agent</h2>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
              </div>
        </section>


        <section>
            <h2>Contact Us</h2>
            <Form />
          
        </section>

       
      </main>
    );
  }
}

export default Main;
