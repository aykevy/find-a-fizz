import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler,Collapse,NavItem, Button} from 'reactstrap';
import {NavLink, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user
    }
}

class Header extends Component {
    constructor(props){
      super(props)
      this.state ={
        isNavOpen: false,
      }
    
      this.toggleNav= this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
          isNavOpen: !this.state.isNavOpen,
        })
    }

     handleButton = () => {
        if(this.props.user.id != null){
            console.log(this.props.user);
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
                     <NavbarBrand className='navbar--logo' href="/">
                        <img src= './assests/logo.png' height='150' width='150' alt='Brewery Finder'/>
                     </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar className = "navbar--collaspe">
                     <Nav navbar>
                          <NavItem>
                             <div className = "navbar--links">
                               <NavLink className='nav-link' to='/home'><span className="fa fa-home"></span> Home </NavLink>
                               <NavLink className='nav-link' to='/breweries'><span className='fa fa-beer'></span> Find a Brewery </NavLink>
                               <NavLink className='nav-link' to='/beers'><span className='fa fa-glass'></span> Find a Beer</NavLink>
                               <NavLink className='nav-link' to='/contactus'><span className='fa fa-ban'></span> Something else? </NavLink>
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