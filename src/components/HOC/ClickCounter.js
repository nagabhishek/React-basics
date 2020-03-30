import React, { Component } from 'react';
import  withCounter from './withCounter';

class ClickCounter extends Component{

    render(){
        let { count, incrementCount  } = this.props;
        return (
        <button onClick={incrementCount}>Button Clicked {count} times</button>
        )
    }

}

export default withCounter(ClickCounter, 10);