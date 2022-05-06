import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import('../02-useEffect/effect.css')

export const Memorize = () => {
    
    const {counter, increment} = useCounter(10);

    const [show, setShow] = useState(true);
    
    return (
        <>
            <h1>Memorize</h1>
            <hr/>
            <h3>Counter: <Small value={counter} /> </h3>

            <button 
            className='btn'
            onClick={increment}>
                +1
            </button>

            <button
                className='btn btn-ouline-success'
                onClick={()=>{
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)} 
            </button>
        </>
    
    )
}
