import React, { useEffect, useState } from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        nombre: '',
        email: ''
    });

    const { nombre, email } = formState;

    const handleInputchange = ({ target }) => {
        //desestructuramos el evente al target del formulario y actualiazamos el estado del name del campo
        //que esta cambiando el estado

        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    useEffect(() => {

    }, [])//como pasamos un arreglo vacio el componente no se va a renderizar nuevamente, si pasamos un parametro


    return (
        <>

            <h1>Smple Form with useEffect</h1>
            <hr />
            <div className='form-group'>
                <input
                    className='form-control'
                    type='text'
                    name='nombre'
                    autoComplete='off'
                    value={nombre}
                    placeholder='Ingresa tu nombre'
                    onChange={handleInputchange}
                ></input>
            </div>
            <div className='form-group'>
                <input
                    className='form-control'
                    type='text'
                    name='email'
                    autoComplete='off'
                    value={email}
                    placeholder='Ingresa tu email'
                    onChange={handleInputchange}
                ></input>

            </div>
            {(nombre === 'manuel') && <Message />}




        </>
    )
}
