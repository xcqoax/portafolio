import React, { Component } from 'react';

class Jumbotron extends Component {
    constructor(){
        super(); 
        this.state ={
            github:"https://github.com/xcqoax",
            linkedin:"https://www.linkedin.com/in/gonzalo-peralta/"

        }
    }
    render(){
        return(
       
          <div class="jumbotron jumbotron-fluid" >
            <div class="container d-flex justify-content-center align-items-center h-100">
              <div class="info-jumbo">
                 <h1 class="display-4 text-center">Gonzalo Peralta</h1>
                 <p class="lead text-center">Desarrollador FrontEnd</p>
                 <a target="_blank" href={this.state.github} class="enlaces">Github </a>
                 <a target="_blank" href={this.state.linkedin} class="enlaces"> LinkedIn</a>
                 <a href="mailto:palmer_85@hotmail.com" class="enlaces">Email</a>
              </div>
            </div>    
          </div>
        
        )
    }
}

export default Jumbotron;