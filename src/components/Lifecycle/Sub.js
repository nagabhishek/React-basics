import React, { useEffect } from 'react';

const Sub = () => {

    useEffect(() => {
        console.log("[Sub.js] : useEffect Called" );
        return () => {
            console.log("[Sub.js] : useEffect cleanup Called")
        }
    },[])

    console.log('[Lifecycle]: Child Component')
    return( <div>Child Component</div>)
}

export default Sub;