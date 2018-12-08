import React, { Component } from 'react';
import './App.css';

import NavBar from  './components/NavBar/NavBar';
import Stock from './components/Stock/Stock';
import Graph from './components/Graph/Graph';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Stock />
        <Graph />
        <Statistics />
      </div>
    );
  }
}

export default App;
