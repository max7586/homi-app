import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";
import "./Header.css";

export default class Header extends Component {
  handleLogoutClick = () => {
    document.getElementById("chk").checked = false;
    TokenService.clearAuthToken();
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  handleUncheck = () => {
    document.getElementById("chk").checked = false;
  };

  renderLogoutLink() {
    return (
      <Link
        onClick={this.handleLogoutClick}
        
        className="btn btn4"
        to="/"
      >
        Logout
      </Link>
    );
  }

  renderLoginLink() {
    return (
      <>
        <Link className="btn btn4" onClick={this.handleUncheck} to="/login">
          Log in
        </Link>

        <Link className="btn btn4" onClick={this.handleUncheck} to="/register">
          Register
        </Link>
      </>
    );
  }

  render() {
    return (
      <>
        <nav className="header">
          <h1 className="logo">
            <Link to="/">
              <i className="fas fa-home"></i>Homi
            </Link>
          </h1>

          <input type="checkbox" id="chk"></input>
          <label htmlFor="chk" className="show-menu-btn">
            <i className="fas fa-ellipsis-h"></i>
          </label>

          <ul className="menu">
            <Link to="/" onClick={this.handleUncheck} className="btn btn2">
              Home
            </Link>

            <Link
              to="/properties"
              onClick={this.handleUncheck}
              className="btn btn2"
            >
              Properties
            </Link>
            <Link
              to="/listMyPropertyPage"
              onClick={this.handleUncheck}
              className="btn btn2"
            >
              List My Property
            </Link>

            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
            <label htmlFor="chk" className="hide-menu-btn">
              <i className="fas fa-times"></i>
            </label>
          </ul>
        </nav>
      </>
    );
  }
}
