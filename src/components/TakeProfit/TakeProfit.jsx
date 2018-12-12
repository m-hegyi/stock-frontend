import React, { Component } from 'react';

export default class TakeProfit extends Component {
    render() {
        return (
            <div>
                TakeProfit
                <div>
                    TakeProfit meghatározása:
                    <select>
                        <option value="1">Százalékos takeprofit</option>
                        <option value="2">Egy szorzó alapján</option>
                        <option value="3">Indikátorhoz kötött</option>
                    </select>
                </div>
            </div>
        );
    }
}