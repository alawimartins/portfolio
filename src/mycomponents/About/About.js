import React from 'react';
import './About.css';
import Footer from '../Footer/Footer';
import {
    Link, NavLink
  } from "react-router-dom";
  import "animate.css/animate.min.css";
  import ScrollAnimation from 'react-animate-on-scroll';



export class About extends React.Component {
  constructor(props){
    super(props)
    
  }
  // style={ isMobile ? {height: ''} : {height: '100%'}}
  render() {
    const isMobile =  window.innerWidth < 480

    return (
        <div className='about'>
           
            <div className='intro'>
                <div className='photo'></div>
              <ScrollAnimation  animateIn='fadeInDown'>
                <div className='text-intro'><h1>About Me</h1><p>I am a<span style={{color: '#f19903'}}> Front-End Developer</span> Brazilian/Spanish based in <span style={{color: '#f19903'}}> London.</span><br/>Before starting my journey as a Web Developer I studied Finance at the<span style={{color: '#f19903'}}> University of South Florida </span> in the U.S, and worked in the field for almost 3 years before switching into coding.<br/><br/>I am interested and passionate about all things related to Web Development and currently use <span style={{color: '#f19903', textDecoration: 'underline'}}>Javascript (React.js, Pixi.js), HTML and CSS</span> to create my websites. </p></div>
              </ScrollAnimation>
            </div>
            <Footer/>
        </div>
    );

  } 

}