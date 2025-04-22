import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const decrementCounter = () => {
        setCount(count - 1);
    };

    const incrementCounter = () => {
        setCount(count + 1);
    };

    return (
        <>
            <button onClick={decrementCounter}>Decrement</button>
            <span>{count}</span>
            <button onClick={incrementCounter}>Increment</button>
        </>
    );
}

export default Counter;
