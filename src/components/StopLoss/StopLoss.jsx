import React, { Component } from 'react';

class StopLoss extends Component {
    render() {
        return (
            <div>
                StopLoss
                <div>
                    Stoploss meghatározása: 
                    <select>
                        <option value="1">Fix összegű stop</option>
                        <option value="2">Százalékos stop</option>
                        <option value="3">Technikai szinthez kötött</option>
                        <option value="4">Volatiolitáshoz kötött</option>
                        <option value="4">Indikátorhoz kötött</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default StopLoss;