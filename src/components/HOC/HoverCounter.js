import React, { Component } from 'react';
import  withCounter from './withCounter';

class HoverCounter extends Component{

    render(){
        let { count, incrementCount  } = this.props;
        return (
            <p onMouseOver={incrementCount}>Hover over me {count} times</p>
        )
    }
}

export default withCounter(HoverCounter, 5);