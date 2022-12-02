import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button} from 'reactstrap';
import {NavLink, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user
    }
}

class Header extends Component {

      constructor(props) {
      super(props)
      this.state = {
        isNavOpen: false,
      }

      this.toggleNav= this.toggleNav.bind(this);
    }

    /**
     * Toggle - handles mobile devices to expand or contract the navBar
     */
    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen,
        })
    }
  
    /**
     * 
     * @returns - A login or LogOut Button
     * Checks to see if the user is logged in or out and returns the appropiate button
     */
     handleButton = () => {
        if(this.props.user.id != null){
            return(
                <Link to='/login'>
                        <Button className = 'navbar--logout' color ='#ECA200' title ='Log out' onClick ={this.props.handleLogout}>
                        <span className= 'fa fa-sign-out fa-lg'> Log out</span>
                       </Button>
                </Link>

            )
        } else {
            return(
                <Link to='/login'>
                        <Button className = 'navbar--logout' color ='#ECA200' title ='Log In'>
                        <span className= 'fa fa-sign-in fa-lg'> Log in</span>
                       </Button>
                </Link>
            )
        }

    }

    render() {
        return(
        <>
          <Navbar dark expand='md' className='navbar--collection'>
                <NavbarToggler onClick={this.toggleNav}/>
                     <NavbarBrand className='navbar--logo'>
                      <Link to='/home'>
                        <img src= './assests/logo.png' height='100' width='100' alt='Brewery Finder'/>
                      </Link>
                     </NavbarBrand>
            
                <SearchBar getBeer={this.props.getBeer} getBrewery={this.props.getBrewery} beers={this.props.beers} breweries={this.props.breweries}/>
                
                <Collapse isOpen={this.state.isNavOpen} navbar className = "navbar--collaspe">
                     <Nav navbar>
                          <NavItem>
                             <div className = "navbar--links">
                               <NavLink className='nav-link' to='/home'><span className="fa fa-home"></span> Home </NavLink>
                               <NavLink className='nav-link' to='/breweries'><span className='fa fa-beer'></span> Find a Brewery </NavLink>
                               <NavLink className='nav-link' to='/beers'><span className='fa fa-glass'></span> Find a Beer</NavLink>
                               <NavLink className='nav-link' to='/account'><span className='fa fa-user-circle'></span> Account Management </NavLink>
                              </div>
                          </NavItem>
                     </Nav>
                     <Nav navbar>
                       {this.handleButton()}
                     </Nav>
                </Collapse>
          </Navbar>
        </>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Header));