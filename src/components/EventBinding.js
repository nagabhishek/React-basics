import React from 'react';
import { render } from '@testing-library/react';

function EventBinding(){

    function clickHandler(){
        alert('Clicked from Funct Component');
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}

export default EventBinding