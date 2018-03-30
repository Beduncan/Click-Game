import React, { Component } from "react";
import './App.css';
// importing components and list of cars 
import Footer from './components/Footer';
import Header from './components/Header';
import CBtn from "./components/CBtn";
import Jumbotron from './components/Jumbotron';
import Cars from './car.json';

class App extends Component { 
  // seting state
  state = {
    Cars,
    Score:0,
    topScore:0,
    message:"START",
    clicked:[],
  };
  // on click function 
  handleClick = id => {
    if(this.state.clicked.indexOf(id) === -1){
      this.AddOne();
      this.shuffle();
      this.setState({
        clicked: this.state.clicked.concat(id)
      });
    }else{
      // resets game
      this.Loser();
    };
  //shuffles the array of cars, mixes up buttons 
  shuffle = () =>{
        var j, x, i;
    for (i = Cars.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = Cars[i];
        Cars[i] = Cars[j];
        Cars[j] = x;
    }
  }

  //if they right add one to their score!
  AddOne = () => {
    const NewScore = this.state.Score + 1;
    this.setState({
      Score: NewScore,
      message:"Your Right"
    });
     if(NewScore >= this.state.topScore){
        this.setState({
          topScore: NewScore
        });
      };
      // if they hit 12 right they win
      if (NewScore === 12) {
        this.setState({
          message: "You Win!",
          clicked:[],
          Score:0
        });
      };
      // call a shuffle button 
   };  
   // run this when user loses it resets the game expect for the topScore
   Loser = () =>{
     this.setState({
      message:"You Lose...Good Game",
      clicked:[],
      Score:0,
     });
   };
   

   // this is where you are rendering the html!
  render(){
  return(
    <div className="Header">
    <Header
    message = {this.state.message}
    Score = {this.state.Score}
    topScore ={this.state.topScore}
    />
    <Jumbotron />
    <div className="container" >
     {this.state.Cars.map(Cars => (
    <CBtn 
      key= {Cars.id}
      handleClick={this.handleClick}
      id={Cars.id}
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
