import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CBtn from "./components/CBtn";
import Jumbotron from './components/Jumbotron';

const App = () => (
  <div>
  <Header />
  <Jumbotron />
  <div>
  <CBtn name="Bryant" />
  </div>
  <Footer />
  </div>
  );

export default App;
