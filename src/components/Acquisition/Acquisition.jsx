import React, { Component } from 'react';

import MovingAverage from '../Indicators/MovingAverage/MovingAverage';

class Acquisition extends Component {
    render() {
        let selectedIndicator = <MovingAverage />;

        return (
            <div>
                Vételi dolgok (Vételi pont meghatározása)
                <div>
                    Tőzsde kiválasztása? időintervallum?
                </div>
                <div>
                    <input type="text" placeholder="Tőzsde neve"/>
                    <select name="backtest-type" id="backtest-type">
                        <option value="1">2 Moving Average comparison</option>
                    </select>
                </div>
                <div>{selectedIndicator}</div>
            </div>
        );
    }
}

export default Acquisition;