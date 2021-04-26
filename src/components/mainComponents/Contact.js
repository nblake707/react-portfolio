import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const Contact = () => {
    return (
        
         <section className="contact" id="contact">
          <h2>Contact</h2>
            <div className="row form-div">
              <div className="col s6">
                <p>Feel free to reach out!</p>
              </div>
            

            <div className="col s6 form-div">
                <form className="form-style" action="https://formspree.io/f/xyynkveg" method="POST">
                    <ul>
                        <ul>
                          <div>
                              <li>
                                  <input type="text" id="name" name="name" class="input-style" placeholder="name"></input>
                              </li>
                              <li>
                                <input type="text" id="email" name="_replyto" class="input-style" placeholder="email"></input>
                              </li>
                              <li>
                                <textarea type="text" id="message" name="message" placeholder="message"></textarea>
                              </li>
                              <li>
                                <button type="submit"> send </button>
                              </li>
                          </div>
                        </ul>
                    </ul>
                </form>
            </div>
        </div>

            
        </section>
        
    );
};

export default Contact;