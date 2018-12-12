import React, { Component } from 'react';

import NavBar from '../../components/NavBar/NavBar';
import Stock from '../../components/Stock/Stock';
import Graph from '../../components/Graph/Graph';
import Statistics from '../../components/Statistics/Statistics';

import './style.css';

class Main extends Component {
    render() {
        return (
            <div id="main">
                <NavBar id="navbar" />
                <Stock id="stock" />
                <Graph id="graph" />
                <Statistics id="statistics" />
            </div>
        );
    }
}

export default Main;