import React, { Component } from 'react';

import Acquisition from '../Acquisition/Acquisition';
import TakeProfit from '../TakeProfit/TakeProfit';
import StopLoss from '../StopLoss/StopLoss';

export default class Stock extends Component {
    render() {
        return (
            <div>
                <Acquisition />
                <TakeProfit />
                <StopLoss />
            </div>
        );
    }
}