import React from 'react'

class Lifecycle extends React.Component{
    
    constructor(){
        super()
        this.state = {};
        console.log('[Lifecycle]: constructor');
    }

    static getDerivedStateFromProps (props, states){
        console.log('[Lifecycle]: getDerivedStateFromProps');
        return states;
    }

    render(){
        console.log('[Lifecycle]: render');
        return (
            <div></div>
        )
    }

}

export default Lifecycle