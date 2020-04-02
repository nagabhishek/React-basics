import React, { useState, useEffect, useContext, useRef } from 'react';

export const UserContext = React.createContext('Abhishek');

function Click() {

    const [count, setCount] = useState(0);
    const [hideFlag, setToggle] = useState(true);
    const [time, setTime] = useState(new Date().toString());
    const [isTimerOn,toggleTimerFlag] = useState(false);

    const eleRef = useRef();
    let timerRef = useRef();
    let initData = 10;

    const userName = useContext(UserContext);

    const incrementCount = () => {
        setCount(prevState => prevState + 1);
    }

    const toggleContent = () => {
        setToggle(prevState => !prevState);
    }
    
    useEffect(() => {
        console.log("Init App");
        eleRef.current.style.color = 'green';
        timerRef.current = setInterval(() => {
            toggleTimerFlag(false);
            setTime(new Date().toString()) 
        },1000);
        return () => {console.log('Cleanup App')};
    }, []);

    useEffect(() => {
        console.log("Count Added");
        return () => {console.log('Cleanup Count')};
    }, [count]);

    const cancelTimer = () => {
        toggleTimerFlag(true);
        clearInterval(timerRef.current);
    }

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTime(new Date().toString());
            toggleTimerFlag(false);
        },1000);
    }

    return (
        <div>
            <h3>useContext Example</h3>
            <UserContext.Consumer>
                { (userName) => <div>User name from UserContext.Consumer: {userName}</div> }
            </UserContext.Consumer>
            <div>User name from useContext: {userName}</div>
            
            <h3>useState Example</h3>
            <div ref={eleRef}>{ hideFlag ? <div>Counter: {count} </div> : null }</div>
            <button onClick={incrementCount}>Increment count</button>
            <button onClick={toggleContent}>Toggle</button>

            <h3>useRef Example</h3>
            <div>Current Time is {time}</div>
            {
                isTimerOn ?  <button onClick={startTimer}>Start Seconds Timer</button> : <button onClick={cancelTimer}>Stop Seconds Timer</button>
            }
        </div>
    )

}

export default Click;