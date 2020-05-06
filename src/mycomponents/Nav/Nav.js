import React from 'react';
import './Nav.css';
import {
    Link, NavLink, withRouter
  } from "react-router-dom";

  import "animate.css/animate.min.css";
  import ScrollAnimation from 'react-animate-on-scroll';

const styleactive = {
  color: '#fff'
}

class Nav extends React.Component {
  constructor(props){
    super(props)
    this.state = {isClicked: false, page: ''}
  }

  myFunction() {
      
    this.setState({isClicked : !this.state.isClicked});
  }

  onNavClick() {
      this.setState({isClicked : false})
   
  }

  pageAbout() {

    if (this.props.location.pathname === '/about') {
       return 'aboutStyle'
    } else {
      return ''
    }
  }

  gitColor (){

    if (this.props.location.pathname === '/about') {
      return '/images/giticonwhite.svg'
   } else {
     return '/images/giticon.svg'
   }
  }

  linkedinColor (){

    if (this.props.location.pathname === '/about') {
      return '/images/linkediniconwhite.svg'
   } else {
     return '/images/linkedinicon.svg'
   }
  }

  navColor () {
    if (this.props.location.pathname === '/projects' && window.innerWidth < 480 ) {
      return 'rgba(241, 153, 3, .90)'
   } else if (this.props.location.pathname === '/about' && window.innerWidth < 480 ) {
      return 'rgba(0, 71, 68, .5)'
   }
   
    else {
      return 'rgba(241, 153, 3, 0)'
   }
  }

  

  render() {
    const style = this.pageAbout()
    const git = this.gitColor()
    const linkedin = this.linkedinColor()
    const colorNav = this.navColor()
    const isOn = this.state.isClicked
    const isMobile =  window.innerWidth < 480
     
    return (
      <div className={`nav ${style}`}>
          
          
          <ScrollAnimation  style={isMobile? {opacity: 1,height: '', zIndex: '',position:'relative'} : {height: '20vh', zIndex: '1',position:'relative',opacity: 1,}} animateIn= 'fadeInDown'>
            <div className='navSmallNav' style={{backgroundColor: colorNav}}>
            <NavLink to="/" style={{ textDecoration: 'none' }}><h1>YM</h1></NavLink>
                <div className={ isOn? "container-bar change" : "container-bar"} onClick={this.myFunction.bind(this)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>   
            </div>
          </ScrollAnimation>
            

         
            
            <div className="small-nav">
                <ul className = {isOn ? "small-nav-ul" : "displayNone-ul"} >
                    
                    <li className="nav-home" onClick = {this.onNavClick.bind(this)}><NavLink to="/" exact activeStyle={styleactive}><div class="nav-number">01</div>Home</NavLink></li>
                    <li className="nav-about" onClick = {this.onNavClick.bind(this)}><NavLink to="/about" exact activeStyle={styleactive}><div class="nav-number">02</div>About</NavLink></li> 
                    <li className = "nav-projects" onClick = {this.onNavClick.bind(this)} ><NavLink to="/projects" exact activeStyle={styleactive}><div class="nav-number">03</div>Projects</NavLink></li> 
                </ul>
            
            </div>
            
        </div>
    );

  } 

};


export default withRouter(Nav);

