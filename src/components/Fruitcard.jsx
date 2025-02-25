import styles from './Fruitcard.module.scss';

function Fruitcard({ count, onIncrement, onDecrement }) {
    return (
        <div className={styles.container}>
            <button className={styles.counterbutton} onClick={onDecrement}>-</button>
            <span className={styles.count}>{count}</span>
            <button className={styles.counterbutton} onClick={onIncrement}>+</button>
        </div>
    );
}

export default Fruitcard;
