import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            number: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                    <p className ="number">{this.state.number}</p>
            </div>
        );
    }
}

export default Counter;