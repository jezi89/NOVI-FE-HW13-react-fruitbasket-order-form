function Fruitcard({ count, onIncrement, onDecrement }) {
    return (
        <>
            <button onClick={onDecrement}>-</button>
            <p>{count}</p>
            <button onClick={onIncrement}>+</button>
        </>
    );
}

export default Fruitcard;
