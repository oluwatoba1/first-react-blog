import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Container from './Container';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar />

        <Header />

        <Container />

        <hr/>

        <Footer />
      </div>
    );
  }
}

export default App;
