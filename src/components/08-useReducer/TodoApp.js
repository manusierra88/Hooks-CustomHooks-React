import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

import('./styles.css');


const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
    //del local stroage traemos los todos que haya, si no hay manda un arreglo vacio 
}
//la funcion init memoriza lo que sea el estado que tenga que manejar el reducer, si no hay estado por defecto en este 
// caso el initialState va a ser un [] vacio.

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [],init);

    const [{ description  }, handleInputchange,reset] = useForm({
        description : ''
    });

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos)); //solo almacena strings, por eso usamos el stringify
    },[todos]); 

    const handleDelete = (todoId)=>{

        const action = {
            type : 'delete',
            payload : todoId,
        }
        dispatch(action);
    };

    const handleToggle = (todoId)=>{
        //podemos paasar en el dispatch directamente la accion que queremos que haga el todoReducer

        dispatch({
            type : 'toggle',
            payload : todoId
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('nueva tarea')
        if(description.trim().lenght < 1){
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action); //el dispatch manda las acciones que querramos hacer con el estado al reducer para que este actualice el mismo
        reset();
    }
    return (
        <>
            <h1>TODOList App</h1>
            <small> TODO restantes: {todos.length}  </small>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                    todos = {todos} 
                    handleDelete={handleDelete} 
                    handleToggle={handleToggle}
                    />   
                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form
                        onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputchange}
                            className='form-control'
                            name='description'
                            autoComplete='off'
                            type='text'
                            placeholder='ej. Comprar pan'
                            value={description}
                        />
                        <button
                            type='submit'
                            className='btn btn-outline-success mt-1'
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
