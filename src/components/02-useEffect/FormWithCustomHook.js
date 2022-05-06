import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effect.css';


export const FormWithCustomHook = () => {

    const [formValues, handleInputchange] = useForm({
        nombre: '',
        email: '',
        password: ''
    });

    const { nombre, email, password } = formValues;
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>

            <h1>FormWithCustomHook</h1>
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
            <div className='form-group'>
                <input
                    className='form-control'
                    type='password'
                    name='password'
                    autoComplete='off'
                    value={password}
                    placeholder='Ingresa tu contraseña'
                    onChange={handleInputchange}
                ></input>
            </div>
            <button type='submit' className='btn btn-primary'> Guardar </button>

        </form>
    )
}
