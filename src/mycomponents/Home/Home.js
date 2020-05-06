import React, { Ref } from 'react';
import './Home.css';
import { Sine, Circ, Expo } from 'gsap';
import Footer from '../Footer/Footer';
import {Background} from '../Background/Background'
import {
    Link, NavLink
  } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';


export class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = { x: 0, y: 0};

    this.titleRef = React.createRef(); // create the reference objet { current: null }
    this.onMouseMove= this.onMouseMove.bind(this) //for the events bind on the constructor
  }

  componentDidMount() {
    if (window.innerWidth < 480) {
      window.addEventListener('touchmove', this.onMouseMove,false)
    } else {
      window.addEventListener('mousemove', this.onMouseMove,false)
    }
    
  }

  componentWillUnmount () {
    window.removeEventListener('touchmove', this.onMouseMove,false)
    window.removeEventListener('mousemove', this.onMouseMove,false)
  }

  onMouseMove(e) {

    const isMobile = e.touches;

    let pX= (isMobile ? e.touches[0].pageX : e.clientX) / window.innerWidth
    pX *= 2;
    pX -= 1;

    let pY = (isMobile ? e.touches[0].pageY : e.clientY) / window.innerHeight
    pY *= 2;
    pY -= 1;

    const dirX = pX < 0 ? -1: 1;
    const dirY = pY < 0 ? -1: 1;

    const x = Sine.easeOut(Math.abs(pX)) * dirX;
    const y = Sine.easeOut(Math.abs(pY)) * dirY;

    const title = this.titleRef.current; // access the ref element (the title h1)
    // title.style.transform = `translate3d(${x * 60}px, ${y * 30}px, 0) rotateY(${x * 40}deg) rotateX(${-y * 40}deg`;
    if (isMobile) {
      title.style.transform = `rotateY(${x * 40}deg) rotateX(${y * -40}deg`;
    } else {
      title.style.transform = `translate3d(${x * 100}px, ${y * 100}px, 0px) rotateY(${x * 40}deg) rotateX(${y * -40}deg`;
    }
    // title.style.left = `${x * 60}px`;
    // title.style.top = `${y * 30}px`;
    
    
    // const x = Sine.easeIn(Math.abs(pX)) * 60 * dirX;
    // const y = Sine.easeIn(Math.abs(pY)) * 20 * dirY;

    //  this.setState({ x, y });

  }


  
 

  render() {
    // <img src='/images/project.png'></img>
    const x = this.state.x
    const y = this.state.y
    return (
      <>
        <div className='home-div' >
          <h1 ref={this.titleRef} className='home-intro'><span style={{color: '#004744'}}>Olá, </span> my name is <span style={{color: '#004744'}}>Yasmin Martins</span>, I am a <span style={{color: '#004744'}}>Front-end </span>developer living in London.</h1>

          <ScrollAnimation className='delay-1s' style={{opacity: 1,height: '', zIndex: '',position:'relative'}} animateIn= 'fadeInUp'>
          <NavLink  to="/projects" style={{ textDecoration: 'none' }}><div className='home-button '>WORK</div></NavLink>
          </ScrollAnimation>
        </div>
        <Footer/>
        
      </>
    );

  } 

}