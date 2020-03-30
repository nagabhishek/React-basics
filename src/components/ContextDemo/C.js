import React, { Component } from 'react'
import UserContext  from './userContext';
import D from './D';

class C extends Component{

    render(){
        return (
            <UserContext.Consumer>
                {
                    (message) => (
                        <React.Fragment>
                            <p>Context Value from App in C : {message}</p>
                            <D/>
                        </React.Fragment>
                    )
                 }
            </UserContext.Consumer>
        )
    }
}

export default C;
