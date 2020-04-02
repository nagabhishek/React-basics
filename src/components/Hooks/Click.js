import React, { useState, useEffect, useContext, useRef } from 'react';

export const UserContext = React.createContext('Abhishek');

function Click() {

    const [count, setCount] = useState(0);
    const [hideFlag, setToggle] = useState(true);
    const userName = useContext(UserContext);
    const eleRef = useRef();


    const incrementCount = () => {
        setCount(prevState => prevState + 1);
    }

    const toggleContent = () => {
        setToggle(prevState => !prevState);
    }

    useEffect(() => {
        console.log("Init App");
        eleRef.current.style.color = 'green';
        return () => {console.log('Cleanup App')};
    }, []);

    useEffect(() => {
        console.log("Count Added");
        return () => {console.log('Cleanup Count')};
    }, [count]);

    return (
        <div>
            <UserContext.Consumer>
                {
                    (userName) => <div>User name from UserContext.Consume: {userName}</div>
                }
            </UserContext.Consumer>
            <div>User name from useContext: {userName}</div>
            <div ref={eleRef}>{ hideFlag ? <div>Counter: {count} </div> : null }</div>
            <button onClick={incrementCount}>Increment count</button>
            <br/>
            <button onClick={toggleContent}>Toggle</button>
        </div>
    )

}

export default Click;