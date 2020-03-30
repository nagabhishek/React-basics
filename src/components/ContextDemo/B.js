import React, { Component } from 'react';
import  C from './C';
import UserContext from './userContext';

class B extends Component{

    render(){
        return (
            <div>
                <p>Context Value from App in B : {this.context}</p>
                <C/>
            </div>
        )
    }
}

B.contextType = UserContext;

export default B;