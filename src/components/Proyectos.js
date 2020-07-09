import React, { Component } from 'react';

class Proyectos extends Component {
    constructor(props){
        super(props); 
        this.state ={
            repositorios : [],
            isLoaded:false,
            error:null
         };
    }

    componentDidMount(){
        fetch("https://api.github.com/users/xcqoax/repos")
        .then(response => response.json() )
        .then(result => {
            this.setState({
                repositorios: result,
                isLoaded: true
            });
        },
        (error) => {
                this.setState({
                    isLoaded:true,
                    error
                });
            }    
        )
    }

    render(){

        const {repositorios, isLoaded, error} = this.state;

        const ProyectosGithub = function(){
            if(!isLoaded){
                return <div> Cargando proyectos... </div>
            }
                return(
                    <div className="container">
                        <h3>Proyectos</h3>
                        <p>A continuación dejo los proyectos personales en los cuales he trabajo. En cada uno de los proyectos dejo la
                            dirección para los repositorios asi como el link de guthub pages (en caso de que el proyecto asi lo tenga).

                        </p>
                        <div class="row proyectos">
                            {repositorios.map(repo =>(
                                <div class="card col-sm-12 col-md-4 my-1">
                                        
                                            <div class="card-body my-4">
                                            <h5 class="card-title">{repo.name}</h5><hr/>
                                            <p class="card-text">{repo.description}</p>
                                            <a href={repo.html_url} class="card-link" target="_blank" className="enlacesP repositorio">Repositorio </a>
                                            {repo.has_pages && <a href={repo.homepage} target="_blank" className="enlacesP Ghpages"> Ir al sitio</a>}
                                       
                                    </div>
                                </div>  
                            ))}   
                        </div>
                    </div>
                )        
    
        }


        return(
       
          <div>
              <ProyectosGithub />
          </div>
        
        )
    }
}

export default Proyectos;