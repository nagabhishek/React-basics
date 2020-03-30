import React, { Component } from 'react';

class ClassComponent extends Component{

    constructor(){
        super();
    }

    render(){
        console.log('ClassComponent:',this.props);
        return (
            <div>First Class Component {this.props.name}</div>
        )
    };
}

export default ClassComponent