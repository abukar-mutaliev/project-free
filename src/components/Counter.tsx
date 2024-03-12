import React, {useState} from 'react';
import classes from './counter.module.scss'

function Counter(props) {
    const [count, setCount] = useState(0)



    return (
        <div>
            <button className={classes.btn} onClick={() => setCount(count +1)}> plus </button>
            <p className={classes.p}>{count}</p>
        </div>
    );
}

export default Counter;