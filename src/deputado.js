import React, { Component } from "react";
import "./App.css";


export default class Filme extends Component{

    render(){

        return(
            
        <div className="dep" key={this.props.dado.id}>
          <div className="photo">
              <img src={this.props.dado.urlFoto} className="img" />
          </div>
          <div className="info">
              <p style={{fontFamily: "Arial"}}><b>Deputado(a): </b>{this.props.dado.nome}</p>
              <p style={{fontFamily: "Arial"}}><b>Partido: </b>{this.props.dado.siglaPartido} - {this.props.dado.siglaUf}</p>
              <p style={{fontFamily: "Arial"}}><b>Contato: </b><a href="#" className="a">{this.props.dado.email}</a></p>
          </div>
        </div>
            

        
        );
    }
}

