import {useState} from "react";

function Button () {
    const [count, setCount] = useState(0)


    function countdown() {
        setCount(prevCount => Math.max(0, prevCount - 1));
    }

    function countup () {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <>
            <div className="button-container">
            <button onClick={countdown}>-</button>
            <p>{count}</p>
            <button onClick={countup}>+</button>
            </div>
    </>
    )
}
export default Button
