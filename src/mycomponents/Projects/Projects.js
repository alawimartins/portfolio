import React from 'react';
import { Sine } from 'gsap';
import './Projects.css';
import Footer from '../Footer/Footer';
import {
    Link, NavLink
  } from "react-router-dom";
  import {Background} from '../Background/Background';
  import "animate.css/animate.min.css";
  import ScrollAnimation from 'react-animate-on-scroll';


const projects = [
    {
        bg: '/images/bubles.svg',
        title: 'project 3',
        img: '/images/cake.png',
        imgM: '/images/cakeResize1.png',
        bgsize: 'cover',
        websitetitle: 'Sweet Tooth',
        webtools: 'React.js, CSS, Sketch',
        id:'cake',
        href: 'https://alawimartins.github.io/sweettooth/',
        git: 'https://github.com/alawimartins/cake-app',
        direction:'fadeInRight'
    },
   
    {
        bg: '/images/sky.png',
        title: 'project 2',
        img: '/images/game1.png',
        imgM: '/images/gameResize.png',
        bgsize: 'cover',
        websitetitle: 'Shooter Game',
        webtools: 'Pixi.js, Javascript,CSS,Howler.js, Sketch',
        id: 'game',
        href: 'https://alawimartins.github.io/shooter/',
        git: 'https://github.com/alawimartins/shooter-game',
        direction:'fadeInLeft'

    },
    {
        bg: '/images/pencilsback.svg',
        title: 'project 1',
        img: '/images/notes.png',
        imgM: '/images/notesResize.png',
        bgsize: 'cover',
        websitetitle: 'To Do List',
        webtools: 'React.js, CSS',
        id : 'note',
        href: 'https://alawimartins.github.io/todolist/',
        git: 'https://github.com/alawimartins/To-do-List',
        direction:'fadeInRight'
    },
    
    {
        bg: '/images/timerback.svg',
        title: 'project 3',
        img: '/images/timer.png',
        imgM: '/images/timerResize.png',
        bgsize: 'cover',
        websitetitle: 'Timer Workout Circuit',
        webtools: 'Javascript, CSS ,GSAP', 
        id: 'timer',
        href: 'https://alawimartins.github.io/timer/home.html',
        git: 'https://github.com/alawimartins/Workout-circuit-timer',
        direction:'fadeInLeft'
        
    }
]


export class Projects extends React.Component {
  constructor(props){
    super(props)
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
        activeProject: 1, x: 0, y: 0, width: null
    }
  }

  updateDimensions() {
    if(window.innerWidth < 781) {
      this.setState({ width: true})
    } else {
      if(window.innerWidth >= 781) {
        this.setState({ width: false})
      }
    }
  };


  oneCliked () {
    const element = document.querySelector("#cake");
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
    this.setState({activeProject:1})
  }

  twoCliked () {
    const element = document.querySelector("#game");
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
    this.setState({activeProject:2})
  }

  threeCliked () {
    const element = document.querySelector("#note");
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
    this.setState({activeProject:3})
  }

  fourCliked () {
    const element = document.querySelector("#timer");
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
    this.setState({activeProject:4})
  }

  listenScrollEvent = e => {
    let index = Math.floor(window.scrollY / window.innerHeight) +1;
    // console.log(index);
    if (index !== this.state.activeProject) {
        this.setState({activeProject: index})
    }
    

  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }


  onMouseMove(e) {

    let pX= e.clientX/window.innerWidth
    pX *= 2;
    pX -= 1;

    let pY = e.clientY/window.innerHeight
    pY *= 2;
    pY -= 1;

    const dirX = pX < 0 ? -1: 1;
    const dirY = pY < 0 ? -1: 1;

    const x = Sine.easeOut(Math.abs(pX)) * 10 * dirX;
    const y = Sine.easeOut(Math.abs(pY)) * -10 * dirY;

    this.setState({ x, y });
 }

 link (link) {
     window.open(link)
 }





  render() {
    const x = this.state.x
    const y = this.state.y
    const isMobile = window.innerWidth < 781
    
    return (
        <div className='projects' >
          

            { projects.map((p) => (
                <div className='project-2nd project-resize'>
                    <Background />
                    
                    
                    
                    

                    <div id={p.id} className= 'bg-image' style={{backgroundImage: `url(${p.bg})`, backgroundSize: p.bgsize}}>
                    </div>
                    <img className='img-mask' src='/images/img-mask.png'/>
                    <ScrollAnimation style={ isMobile ? {height: ''} : {height: '100%'}} animateIn={isMobile ? 'fadeIn' : p.direction}>
                      <div className='content-project'>
                      
                        <div className='content-image' style={ {backgroundImage: `url(${p.img})`}} ></div>
                        <div className='content-image-resize' onClick={this.link.bind(this,p.href )} style={ {backgroundImage: `url(${p.imgM})`}} ></div>

                        <div className='content-text-resize'><div>{p.websitetitle} - {p.webtools}</div></div>
                        <div className='content-text animated fade delay-5s' style={{ marginLeft: x * 0.8, marginBottom: y * 0.8 }}>
                            <div className='website'>WEBSITE</div>
                            <div className='website-title'>
                                <p>{p.websitetitle}</p>
                                <div className='website-title-tools'>{p.webtools}</div>
                                </div>
                            <div className='website-button-flex'>
                                <a href={p.href} target="_blank"><div className='website-button'>VISIT</div></a>
                                <a href={p.git} target="_blank"><div className='website-button'>LEARN MORE</div></a>
                            </div>   
                            
                        </div>
                      </div>
                    </ScrollAnimation>
                    
                </div>
            ))}


            <div class='project-numbers'>
                    <div class={`project-number ${this.state.activeProject === 1 ? 'active' : ''}`} onClick={this.oneCliked.bind(this)}>1</div>
                    <div class={`project-number ${this.state.activeProject === 2 ? 'active' : ''}`} onClick={this.twoCliked.bind(this)}>2</div>
                    <div class={`project-number ${this.state.activeProject === 3 ? 'active' : ''}`} onClick={this.threeCliked.bind(this)}>3</div>
                    <div class={`project-number ${this.state.activeProject === 4 ? 'active' : ''}`} onClick={this.fourCliked.bind(this)}>4</div>
            </div>

            
            <Footer/>
        </div>
    );

  } 

}