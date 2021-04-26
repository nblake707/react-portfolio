import React, { Component } from 'react';

  export default class Header extends Component {

   
      render(){
        return (
            <header>
               {/* left column */}
             <section className="col left-col">
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
             <section className="col right-col">
                 <div className="top-container container-fluid">
               <img src="assets/images/meSmall.jpg" alt="nateyana blake" />
               </div>
             </section>
           </header>
            )
      }
     
 }

 