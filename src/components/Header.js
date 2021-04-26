import React, { Component } from 'react';

  export default class Header extends Component {

   
      render(){
        return (
            <header className="row">
               {/* left column */}

             <section className="col s6 left-col">
               <div className="top-container">
               <h1>hello</h1>
               <p className="typedText">
                 I'm Nateyana and this is my personal page. 
                  <div id="type-container">
                      <div id="type-text"></div>
                  </div>
               </p>
               </div>
             </section>
       
             {/* right column */}
             <section className="col s6 right-col">
                 <div className="top-container container-fluid">
               <img className='responsive-img me' src="assets/images/meSmall.jpg" alt="nateyana blake" />
               </div>
             </section>
           </header>
            )
      }
     
 }

 