import React from 'react';

const MyStack = () => {
    return (
        <section className="my-stack" id="about">
        <h2>About Me</h2>
        <div className="row no-row">
          <div className="col s6">
            <img src="assets/images/correctClass.jpg" className="img-margin small-screen" />
            <img src="assets/images/code_tint.jpg" className="img-margin" />
          </div>
          <div className="col s6 about-me">
            <h3 className="small-screen">my <br /> story</h3>
            <p>
             Hello, my name is Nateyana! I'm a web developer, coding instructor, and curriculum engineer
             from NYC.  

             I discovered programming by chance and what started as a mild interest eventually became a new career path. After receiving a 
             scholarship through the CUNY Tech Hire program I was able to attend The Software Guild, 
             a fast-paced apprenticeship program specializing in data-driven Java development. 
             This hybrid grant program made it possible for me to fully immerse myself in the world of programming. 

             I currently work as an assistant instructor and curriculum engineer within the 2U enterprise bootcamp system and really enjoy working with students. I value the way that our programs can change lives and 
             enjoy being involved in something that can positively impact others. Learning to program changed my life dramatically and I appreciate that my work is centered around helping others transiton into tech.  

            </p>
           
          </div>

        </div>
      </section>
    )
}

export default MyStack;