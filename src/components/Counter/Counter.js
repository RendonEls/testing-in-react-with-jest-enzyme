import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            number: 0
        }
        this.addNumber = this.addNumber.bind(this)
        this.minusNumber = this.minusNumber.bind(this)
    }

addNumber() {
    this.setState({
        number: +1
    })
}
minusNumber() {
    this.setState({
        number: -1
    })
}

    render() {
        return (
            <div>
                <h1>Counter</h1>
                    <p className ="number">{this.state.number}</p>
                    <button className="plus" onClick={this.addNumber} >increase</button>
                    <button className="minus" onClick={this.minusNumber} >minus</button>
            </div>
        );
    }
}

export default Counter;