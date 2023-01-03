import React, { useState } from "react";

export const ClickCounter = () => {
    const [count, setCount] = useState(0);

    const handleClickEvent = () => {
        setCount(count => count + 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClickEvent}>Increment</button>
        </div>
    );
}

export default ClickCounter;