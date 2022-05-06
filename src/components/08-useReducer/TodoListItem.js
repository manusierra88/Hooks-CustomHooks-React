import React from 'react'

export const TodoListItem = ({todo,handleDelete,handleToggle, i}) => {
    return (

        <li
            className='list-group-item mb-1'
            key={todo.id} >
            <p
                className={`${todo.done && 'complete'}`}
                onClick={() => handleToggle(todo.id)}
            > {i + 1}.  {todo.description}
            </p>
            <button
                onClick={() => handleDelete(todo.id)}
                className='btn btn-danger'>
                Borrar
            </button>
        </li>

    )
}
