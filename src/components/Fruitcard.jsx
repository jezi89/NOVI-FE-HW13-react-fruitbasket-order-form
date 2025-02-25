import styles from './Fruitcard.module.css';

function Fruitcard({ count, onIncrement, onDecrement }) {
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={onDecrement}>-</button>
            <span className={styles.count}>{count}</span>
            <button className={styles.button} onClick={onIncrement}>+</button>
        </div>
    );
}

export default Fruitcard;
