import React, { useEffect, useState } from "react";

export const ClickCounter = ({onCounterChange}) => {
    const [count, setCount] = useState(0);

    const handleClickEvent = () => {
        setCount(count => count + 1);
    }

    useEffect(() => onCounterChange(count), [count, onCounterChange]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClickEvent}>Increment</button>
        </div>
    );
}

export default ClickCounter;