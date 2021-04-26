import React from 'react';

const Projects = () => {
    return (
        <div className="row projects" id="works">
            <h2 className='right-align'> Projects </h2>
            
            <div className="col s4 card">
              <div className="card-image waves-effect waves-block waves-light">
                <img class="activator" src="assets/images/fern.jpg" />
              </div>
              <div class="card-content">
               <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                 <p><a href="#">This is a link</a></p>
              </div>

              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>

            <div className="col s4 card">
              <div className="card-image waves-effect waves-block waves-light">
                <img class="activator" src="assets/images/pineapp.jpg" />
              </div>
              <div class="card-content">
               <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                 <p><a href="#">This is a link</a></p>
              </div>

              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>

            <div className="col s4 card">
              <div className="card-image waves-effect waves-block waves-light">
                <img class="activator" src="assets/images/healthydining.jpg" />
              </div>
              <div class="card-content">
               <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                 <p><a href="#">This is a link</a></p>
              </div>

              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
        </div>
    );
};


export default Projects;