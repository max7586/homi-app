import React, { Component } from "react";
// import { Section } from '../../components/Utils/Utils'
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
// import Header from '../../components/Header/Header'
import "./LandingPage.css";
// import Footer from "./components/footer";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
      <section className="container">
        <section className="hero">
          <section className="head">
            <h2 className="heroh2">
              Reconceptualize
              <br />
              your home
            </h2>

            <div>
              <p>
                We’ll help you find a place you’ll love <br />
                OR <br /> Share the place you love.
              </p>
              <div className="hero__btn__div">
                <Link className="hero__btn" to="/listMyPropertyPage">
                  List my property
                </Link>
                <Link className="hero__btn" to="/Properties">
                  Lets see our properties
                </Link>
              </div>
            </div>
          </section>
        </section>
        <section className="main">
          <section className="intro">
            <h2 className="landingPageh2" id="intro">
              About Us
            </h2>
            <div>
              <p>
                {" "}
                HOMI is a real-estate management app. This application allows a
                user to add their house for sale, buy houses from the list. User
                can find rental houses and as well as can rent their own house.
                This app helps the user to find an agent to help purchase a
                house.{" "}
              </p>
            </div>
          </section>

          <div>
            <div className="services">
              <div className="service-one">
                <p className="service-icon">
                  <i className="fas fa-door-open"></i>
                </p>
                <Link className="service-title " to="/Properties">
                  Buy a home
                </Link>
                <p className="service-des">
                  {" "}
                  Find your place with a photo and most deals, including items
                  you are not going to choose anywhere else.
                </p>
              </div>
              <div className="service-two">
                <p className="service-icon">
                  <i className="fas fa-money-bill-wave"></i>
                </p>
                <Link className="service-title" to="/listMyPropertyPage">
                  Sell a home
                </Link>

                <p className="service-des">
                  Simply list your property. Then If you are happy with the
                  proposal, sell your property.
                </p>
              </div>
              <div className="service-three">
                <p className="service-icon">
                  <i className="fas fa-retweet"></i>
                </p>
                <Link className="service-title" to="/listMyPropertyPage">
                  Rent a home
                </Link>

                <p className="service-des">
                  Simply list your property. Then rent your property if you are
                  satisfied with the proposal.
                </p>
              </div>
            </div>
          </div>

          <section>
            <h2 className="landingPageh2">Our Latest Properties </h2>

            <div className="gallery">
              <div className="gallery-item-one radious"></div>
              <div className="gallery-item-two radious"></div>
              <div className="gallery-item-three radious"></div>
              <div className="gallery-item-four radious"></div>
              <div className="gallery-item-five radious"></div>
              <div className="gallery-item-six radious"></div>
            </div>
          </section>

          <section>
            <h2 className="landingPageh2">Our Agent</h2>
            <div>
              <p className="ourAgent__icon">
                <i className="far fa-user-circle"></i>
              </p>
              <p>
                Roman Hakim<br></br>romanhakim@homi.com
              </p>
              <p>
                About Roman Hailing from New York, Roman moved to Windsor, CT in
                1999. As a consummate people person, Roman started his own
                five-star concierge service company to give the ultimate level
                of service to both second homeowners and vacation renters. After
                developing repeat business and long-lasting relationships,
                transitioning into real estate sales was natural for him. Roman
                is extremely knowledgeable not only with St. Regis fractionals
                but also with all real estate in SNR.
              </p>
              <p>
                Prior to joining Homi, Roman worked for SNR Real Estate and
                spent 15 years designing and selling textiles in the garment
                district of Hartford. He volunteers with the SNR Homeless
                Shelter, picking up food donations from local markets and
                restaurants. Roman enjoys hiking, biking, gardening, cooking,
                and cross country skiing when He is not out showing real estate
                or furthering his real estate education. He loves people, the
                lifestyle this community offers, and the abundance of luxury
                properties as well.
              </p>
            </div>
          </section>

          <section>
            <h2 className="landingPageh2" id="contactUs">
              Contact Us
            </h2>
            <ContactUsForm />
          </section>
        </section>
      </section>
    );
  }
}
