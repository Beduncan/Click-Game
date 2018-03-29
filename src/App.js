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
    Score:0,
    topScore:0,
    message:"START",
    clicked:[],
  };
  handleClick = id => {
    if(this.state.clicked.indexOf(id) === -1){
      this.AddOne();
      this.setState({
        clicked: this.state.clicked.concat(id)
      });
      console.log(this.state.clicked);
    }else{
      this.setState({
        message:"you lose"
      });
      // resets game
      this.Loser();
    };
  };
   //if they right add one to their score!
  AddOne = () => {
    const NewScore = this.state.Score + 1;
    this.setState({
      Score: NewScore,
      message:"Your Right"
    });
    if (NewScore === 12) {
      this.setState({message: "You Win!"});
      //resets game
      this.Loser
      }//else if new score > topscore setState of topScore to newScore
      // call a shuffle button 
   };
   // run this when user loses it resets the game expect for the topScore
   Loser = () =>{
     this.setState({
      message:"your wrong... Good Game",
      clciked:[],
      Score:0,
     })
   };
   

   // this is where you are rendering the html!
  render(){
  return(
    <div className="Header">
    <Header
    message = {this.state.message}
    Score = {this.state.Score}
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
