import React from 'react';
import './Footer.css';
import {
    Link, NavLink, withRouter
  } from "react-router-dom";


const styleactive = {
  color: '#fff'
}

class Footer extends React.Component {
  constructor(props){
    super(props)
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



  render() {
    const style = this.pageAbout()
    const git = this.gitColor()
    const linkedin = this.linkedinColor()
   
     
    return (
       
        <div className='email-container'>
            <div className={`email ${style}`} >
            
                <a href='https://github.com/alawimartins' target="_blank"><img src={git}/></a>
                <a href='https://www.linkedin.com/in/yasminalawimartins/' target="_blank"><img src={linkedin}/></a>
              <div className='vertical-text'><p>yasminmartins.gt@gmail.com</p></div>
             
          
            </div>
           
          
        </div>    
           
    );

  } 

};


export default withRouter(Footer);
