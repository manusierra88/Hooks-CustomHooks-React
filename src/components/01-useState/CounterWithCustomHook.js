import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CounterWithCustomHook = () => {

    const {state:counter, increment, decrement, reset } = useCounter();
    return (
        <>
            <h1> Counter with Hook {counter} </h1>
            <hr/>
            <button onClick={increment} className='ms-2 btn btn-success'> +1</button>
            <button onClick={reset}     className='ms-2 btn btn-primary'> Reset</button>
            <button onClick={decrement} className='ms-2 btn btn-danger'> -1</button>
        </>
    )
}
