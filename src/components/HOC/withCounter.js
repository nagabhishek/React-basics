import React, {Component } from 'react'

const withCounter = (WrapperComponent, incrementCountNum) => {
     
    class WithCounter extends Component {

        constructor(){
            super()
            this.state = {
                count:0
            }
        }
    
        incrementCount = () => {
            this.setState((pState) => ({
                count: pState.count+incrementCountNum
             }))
         }

        render(){
            return <WrapperComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props.name}/>
        }
    }
    return WithCounter;
}

export default withCounter;