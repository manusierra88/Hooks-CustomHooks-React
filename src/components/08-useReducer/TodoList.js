import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete,handleToggle}) => {
    return (
        <ul>
            {todos.map((todo, i) => (
                
                <TodoListItem 
                key={todo.id}
                todo= {todo} 
                handleDelete={handleDelete} 
                handleToggle = {handleToggle}
                i = {i} />
            ))
            }
        </ul>

    )
}
