import React, { Component } from 'react';

export default class Nav extends Component {
    
    constructor(props){
        super(props);
    }
    
    menuToggle(){
    var nav = document.getElementById('menu-overlay');
    nav.classList.toggle('active');
    var nav = document.getElementById('toggleIcon');
    nav.classList.toggle('active');
    }
    
    
    
    render(){
        return(
            <section className="navigation">
            <div id="toggleIcon" onclick="menuToggle()"></div>
            <div id="menu-overlay">
              <ul>
                <li><a href="#hello" onclick="menuToggle()" >Home</a></li>
                <li><a href="#about" onclick="menuToggle()">About</a></li>
                <li><a href="#works" onclick="menuToggle()">Works</a></li>
                <li><a href="#contact" onclick="menuToggle()">Contact</a></li>
                <li><a href="https://zety.com/mycv/NateyanaBlake" target="_blank">Resume</a></li>
              </ul>
            </div>
            </section>
        )
    }
  
}