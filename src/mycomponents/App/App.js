import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';

import {Background} from '../Background/Background';
import {Home} from '../Home/Home';
import {Projects} from '../Projects/Projects';
import {About} from '../About/About';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   
      
      <Router basename ='/'>
        <div className="App">
        
        <Background/>
        <Nav/>

        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
        </Switch>
       
        </div>
      </Router>

      
    
   
  );
}

export default App;
