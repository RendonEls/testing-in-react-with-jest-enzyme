import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            number: 0
        }
        this.addNumber = this.addNumber.bind(this)
    }

addNumber() {
    this.setState({
        number: +1
    })
}

    render() {
        return (
            <div>
                <h1>Counter</h1>
                    <p className ="number">{this.state.number}</p>
                    <button className="plus" onClick={this.addNumber} >increase</button>
            </div>
        );
    }
}

export default Counter;