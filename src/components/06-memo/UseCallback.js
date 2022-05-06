import React, { useCallback, useState } from 'react';
// import { useCounter } from '../../hooks/useCounter';
import { ShowIncrement } from './ShowIncrement';

import('../02-useEffect/effect.css');

export const UseCallback = () => {

    const [counter, setCounter] = useState(10)
    //const { counter, increment } = useCounter();
    const increment = useCallback((num)=>{
        setCounter(c=> c + num); //*ese num es el nombre que le asignamos al argumento enviado desde el uso de la fnc en el
    },[setCounter ])             //* componente hijo   
    //* esta es la version memorizada de la funcion usando el useCallback
    //*lo vamos a usar cuando un componente hijo tenga que usar una func y este definida en el componente padre
    //*
    return (
        <>
            <h1>UseCallback hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />


        </>
    )
}
