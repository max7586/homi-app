import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import './Header.css'

export default class Header extends Component {


  handleLogoutClick = () => {
    TokenService.clearAuthToken();
        /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
  }

  renderLogoutLink() {
    return (


        <Link
          onClick={this.handleLogoutClick}
          className="btn btn4"
          to='/'>
          Logout
        </Link>

    )
  }

  renderLoginLink() {
    return (
      
<>
        <Link
        className="btn btn4"
          to='/login'>
          Log in
        </Link>

          <Link
          className="btn btn4"
          to='/register'>
          Register
        </Link>

      </>
    )
  }

  render() {
    return <>
      <nav className='header'>
        <h1 className="logo">
          <Link 
          
          to='/'>
          <img className='logo' src="https://max7586.github.io/homi-app/images/4P9H5z.png"  alt="logo" ></img>
            

          </Link>
        </h1>

        <input type="checkbox" id="chk"></input>
        <label htmlFor="chk" className="show-menu-btn">
          <i className="fas fa-ellipsis-h"></i>
        </label>
    
        <ul className="menu">

        <Link to='/' className="btn btn2">
        Home
      </Link>
          
          <Link to='/properties' className="btn btn2" >
          Properties 
        </Link>
        <Link to='/listMyPropertyPage' className="btn btn2" >
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
  }
}
