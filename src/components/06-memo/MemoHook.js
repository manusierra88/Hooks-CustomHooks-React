import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';

import('../02-useEffect/effect.css')

export const MemoHook = () => {
    
    const {counter, increment} = useCounter(0);
    const [show, setShow] = useState(true);
    const procesoPesado = (procesos)=>{
        for (let i = 0; i < procesos; i++) {
            
            console.log(`${procesos}: procesos realizados`)
        }
        return `${procesos} procesos realizados`;
    }
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
    //* usando el useMemo hacemos que nuestra funcion memorize el o los valores que le mandemos que haga
    //*para cuando estos no cambien no se ejecute nuevamente el proceso y haciendo que haya mas gasto de
    //*memoria o datos en caso de haya petciones http
    return (
        <>
            <h1>MemoHook</h1>
            <hr/>
            <h3> {memoProcesoPesado} </h3>

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
