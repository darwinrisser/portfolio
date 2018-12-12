import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from './SimpleAppBar.js';
import TitlebarGridList from './TitlebarGridList.js';
import TitlebarGridList1 from './TitlebarGridList1.js';
import SkillBar from 'react-skillbars';

const skills = [
  {type: "HTML", level: 85},
  {type: "CSS", level: 85},
  {type: "Javascript", level: 50},
  {type: "React", level: 50},
  {type: "JQuery", level: 25},
  {type: "AfterEffects", level: 65},
  {type: "Photoshop", level: 55},
  {type: "UI/UX", level: 50}  
];

const colors = {
  "bar": "#3498db",
  "title": {
  "text": "#fff",
  "background": "#2980b9"
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div id="nav">
          <SimpleAppBar/>      
        </div>
        
        <div id="header">
          <h1>Darwin Risser</h1>
          <h2>full-stack web developer from Austin, Texas</h2>
          <div id="social">
            <a href="https://github.com/drisser"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/darwinrisser/"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div id="skills-header">
          <h1>About</h1>
        </div>

        <div id="skills">
          
          <div id="skillbar"><SkillBar skills={skills} colors={colors}/></div>
          
        </div>
        <div id="portfolio-header">
          <h1>Work</h1>
          <p>Most of these projects were created for Austin Coding Academy. The rest are personal projects.</p>
        </div>
        <div id="portfolio">
          <TitlebarGridList/> <TitlebarGridList1/>
        </div>

        <div id="contact">
          <h1>Contact</h1>
          
        </div>


      </div>
    );
  }
}

export default App;
