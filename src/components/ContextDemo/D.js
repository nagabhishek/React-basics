import React, { Component } from 'react';
import UserContext from './userContext';

class D extends Component{

    static contextType = UserContext;

    render(){
        return (
            <div>
                <p>Context Value from App in D : {this.context}</p>
            </div>
        )
    }
}

export default D;