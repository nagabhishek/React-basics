import React from 'react';
import { render } from '@testing-library/react';


function FunctionalComponent(props){
    console.log('FunctionalComponent:',props);
    return(
    <div>First Functional Component {props.name}</div>
    )
}

export default FunctionalComponent