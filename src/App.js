import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
      nombre1: "",
    }

  }

  show1 = (e) => {
    this.setState({ nombre1: this.state.nombre1 + e.target.value, result: e.target.value})
  }
  
  calculate=(e2) =>{
      
      const output= eval(this.state.nombre1);
      this.setState({ result:output})
   
  }
  erase=() =>{
      
    this.setState({nombre1:"",result:""})
 
}


  render() {
    return (
      <center>
      <div>
        <h1>Calculator</h1>

        
        <br/>
        <button  onClick={this.show1} className="btn  btn-lg"  value="1">1</button>
        <button  onClick={this.show1}  className="btn btn-lg" value="2">2</button>
        <button  onClick={this.show1}  className="btn btn-lg" value="3">3</button> 
        <button  onClick={this.show1}   className="btn btn-primary btn-lg" value="+">+</button>
        <br/>
        <button  onClick={this.show1}  className="btn btn-default btn-lg" value="4">4</button>
        <button  onClick={this.show1}  className="btn btn-default btn-lg" value="5">5</button>
        <button  onClick={this.show1} className="btn btn-default btn-lg"  value="6">6</button>
        <button  onClick={this.show1}className="btn btn-primary btn-lg" value="-">-</button>
        <br/>
        <button  onClick={this.show1} className="btn btn-default btn-lg" value="7">7</button>
        <button  onClick={this.show1} className="btn btn-default btn-lg" value="8">8</button>
        <button  onClick={this.show1} className="btn btn-default btn-lg" value="9">9</button>
        <button  onClick={this.show1} className="btn btn-primary btn-lg" value="*">*</button>
        <br/>
        <button  onClick={this.calculate} className="btn btn-success btn-lg" value="=">=</button>
        <button  onClick={this.show1}  className="btn btn-default btn-lg" value="0">0</button>
        <button  onClick={this.show1} className="btn btn-primary btn-lg" value="/">/</button>
        <button  onClick={this.erase} className="btn btn-danger btn-lg"value="c">c</button>
        
        <p>{this.state.result}</p>

      </div >
      </center>
    );


  }
}




export default App;
