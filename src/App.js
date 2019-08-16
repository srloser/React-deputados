import React from 'react';
import logo from './logo.svg';
import axios from "axios";
import Deputado from "./deputado.js";


import './App.css';

class App extends React.Component {

  state = {
    dados: [],
    busca: false,
  }

   handleClick = event =>{
    event.preventDefault();

    axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados`).then(dado => {
      let dados = dado.data.dados;  
      console.log(dado);
      let busca = true;
      this.setState({dados, busca});
    })
  }
  render(){
    return (
      <div className="App">
        <div className="menu">
          <h2>Deputados</h2>
        </div>
        <div className="deps">
          {this.state.busca === false ? <button style={{padding: 10, backgroundColor: "	#5cb85c", borderRadius: 6}} onClick={this.handleClick}>Mostrar Deputados</button> : 
          this.state.dados.map((dado) => {
            return(
              <Deputado dado={dado}></Deputado>
            )
          }) 
          
        }
  
        </div>
        
          
        
        
      </div>
    );
  }
  }
  

export default App;
