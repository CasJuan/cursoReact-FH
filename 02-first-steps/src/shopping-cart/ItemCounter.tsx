import { useState } from "react";


/* import './itemCounter.css';
 */

import styles from './itemCounter.module.css';

interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({name, quantity = 1}: Props) => {

        //nombre, lo que utilizamos para cambiar el valor del count
    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubtract = () => {
        if(count === 1) return;
        setCount(count - 1)
    }

  return (
    <>
    <section className={styles.itemRow} >
        <span 
            className="item-text"
            style={{
                color: count === 1 ? 'red' : 'black',
            }}
        >{name}</span>
        <button
            onClick={handleAdd}
        >+1</button>
        <span>{count}</span>
        <button
        onClick={handleSubtract}
        >-1</button>
    </section>    
    </>
  )
}
