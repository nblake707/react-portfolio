import React from 'react';
import Contact from './mainComponents/Contact';
import MyStack from './mainComponents/MyStack';
import Projects from './mainComponents/Projects';


const Main = () => {
    return (
    <div className="container">
        <p class="scroll" id="about">Scroll down to find out more</p>
        <MyStack />
        <Projects />
        <Contact/>
    </div>

    )
}

export default Main;