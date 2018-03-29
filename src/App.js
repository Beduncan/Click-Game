import React, { Component } from "react";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CBtn from "./components/CBtn";
import Jumbotron from './components/Jumbotron';
import Cars from './car.json';




class App extends Component { 
  state = {
    Cars,
    currentScore:0,
    topScore:0,
    clicked:[]
  };
  handleClick = id => {
    if(this.state.clicked.indexOf(id) === -1){
      alert("you are right");

    }else{
      alert("you fucking suck");
    }
   };
  render(){
  return(
    <div>
    <Header 
    currentScore = {this.state.currentScore}
    />
    <Jumbotron />
    <div className="container" >
     {this.state.Cars.map(Cars => (
    <CBtn 
      handleClick={this.handleClick}
      key ={Cars.id}
      // Clicked={Cars.clicked}
      image={Cars.img} 
      alt={Cars.alt}   
    />
    ))}
    </div>
    <Footer />
    </div>
  )};
};
export default App;
