import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {
    
    const [state, setState] = useState({
        counter1 : 10,
        counter2 : 20
    })

    const {counter1, counter2} = state;

    return (
        <>
            <h1> Counter { counter1}</h1>
            <h1> Counter { counter2}</h1>
            <hr/>
            <button 
            onClick={ ()=>{
                setState({
                    ...state,
                    counter1 : counter1 + 1
                }) //con este tipo de operador solo modificamos el estado del counter 1 y no del resto
            }}
            className='btn btn-primary'> +1 </button>
        </>
    )
}

/*
si tenemos varios objetos que tengan estado, podemos usar el operador spread para que el estado
se mantenga solo en el o los objetos que van a cambiar de estado y no se pierda el estado previo 
de los objetos que mantengan el mismo.
Al llamar el setState le cambiamos o actualizamos el estado de todo lo q se encuntre dentro del objeto
por eso con el operado spread hacemos una copia del estado y modificamos solo el elemento que sea necesario
*/ 
