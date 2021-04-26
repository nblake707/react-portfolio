import React from 'react';
 

const Footer = () => {

    return (
      <footer>
        <div className="container row">
          <div className="col s12 social-icons-container">
            <a href="https://medium.com/me/stories/public" target="_blank"><img src="assets/images/medium.svg" class="social-icon"/></a>
            <a href="https://github.com/nblake707" target="_blank"><img src="assets/images/github.svg" class="social-icon"/></a>
            <a href="https://www.linkedin.com/in/nateyanablake/" target="_blank"><img src="assets/images/linkedin.svg" class="social-icon"/></a>
            <a href="https://open.spotify.com/user/nblake2?si=ZF3FY469SWe-4l-xjt7JEQ" target="_blank"><img src="assets/images/spotify.svg" class="social-icon"/></a>
          </div>
          <p>Made with love in NYC</p>
        </div>
      </footer>
    
        )
}

export default Footer;