
/* if 
import React, {Component} from 'react'

class State extends Component{

  state={
    nome: "Dan",
    idade: 25,
    cor: "azul"
  }

  mensagem = () => {
    if(this.state.cor === "azul"){
      this.setState({cor:"amarelo"})
    }else{
      this.setState({cor:"azul"})
  }

  render(){
    return(
      <div>
        <h1>Minha cor favorita é {this.state.cor}</h1>
        <button onClick={this.mensagem}>Trocar</button>
        <button onClick={this.voltar}>Voltar</button>
      </div>
    )
 
  }
  

export default State
*/

 /* : ? 
import React, {Component} from 'react'

class State extends Component{

  state = {
    nome: "lina",
   gosto:"tranças"
  }

  mensagem = () => {
    this.setState({
    nome: this.state.cor === "Prior" ? "lina" : this.state.nome === "lina" ? "babu" : "prior",
    gosto: this.state.gosto === "jogar y jogar" ? "tranças" : this.state.gosto === "tranças" ?"cozinhar" : "jogar y jogar"
  });
  };

  render(){
    return(
      <div>
        <h1>Minha cor favorita é {this.state.cor}</h1>
        <button onClick={this.mensagem}>Trocar</button>
        <button onClick={this.voltar}>Voltar</button>
      </div>
    )
 
  }
  

export default State

*/


/*   onClick
import React, {Component} from 'react'

class State extends Component{

  state={
    nome: "Dan",
    idade: 25,
    cor: "azul"
  }

  mensagem = () => {
    this.setState({
      cor: "amarelo"
    })
  }


  voltar = () => {
    this.setState({
      cor: "azul"
    })
  }

  render(){
    return(
      <div>
        <h1>Minha cor favorita é {this.state.cor}</h1>
        <button onClick={this.mensagem}>Trocar</button>
        <button onClick={this.voltar}>Voltar</button>
      </div>
    )
 
  }
}

export default State


*/


/*
import React, {Component}  from 'react'

class MudaFoto extends Component {

state={
  nome: "Astro", 
   idade: 21,
   corFav:"azul"
    }


mensagem = () => {
  this.setState({
    cor:"Amarelo"
  })
}

  render(){
    return(
      <div>

  <h1>Minha cor favoria é {this.state.corFav}</h1>
  <button>Clica aqui</button>
     </div>
)
}}
export default MudaFoto
*/