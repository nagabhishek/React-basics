import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component{

    constructor(){
        super();
        //this.greetParent = this.greetParent.bind(this);
    }

    greetParent = (content) => {
        alert(`Hello from ${content}`);
    }    

    render(){
        return(
            <div>
                <span>ParentComponent</span>
                <ChildComponent greetParent={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent