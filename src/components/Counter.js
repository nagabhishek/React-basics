import React, { Component } from 'react';

class Counter extends Component{

    constructor(){
        super();
        this.state = {
            count: 0
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState((prevState) => ({
            count: prevState.count+1
        }));
    }

    render(){
        return(
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Counter