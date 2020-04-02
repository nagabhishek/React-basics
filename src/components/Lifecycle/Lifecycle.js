import React from 'react'
import Sub from './Sub';

class Lifecycle extends React.Component{
    
    constructor(){
        super()
        this.state = {
            toggle: true
        };
        console.log('[Lifecycle]: constructor');
    }

    static getDerivedStateFromProps (props, states){
        console.log('[Lifecycle]: getDerivedStateFromProps');
        return states;
    }

    componentDidMount(){
        console.log('[Lifecycle]: componentDidMount');
    }

    toggleChildHandler = () => {
        this.setState((prevState) => ({
            toggle:!prevState.toggle
        }))
    }

    render(){
        console.log('[Lifecycle]: render');
        return (
            <div>
                <button onClick={this.toggleChildHandler}>Hide Child</button>
                {this.state.toggle ? <Sub></Sub> : null}
            </div>
        )
    }

}

export default Lifecycle;