import React from 'react';

function ChildComponent(props) {
    return(
        <div>
            <button onClick={() => props.greetParent('Child...')}>Send to parent</button>
        </div>
    )
}

export default ChildComponent