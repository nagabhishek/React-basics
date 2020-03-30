import React, { Component } from 'react';
import './styles.css'

const heading = {
    fontSize: '72px',
    color: 'blue'
}


class StyleComponent extends Component{
    render(){
        return(
            <div>
                <div className="textHighlight">Text with class</div>
                <div style={heading}>Text with inline style</div>
            </div>
        )
    }
}

export default StyleComponent