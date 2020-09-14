import React from 'react'
import TodoListoItem from './TodoListoItem'

const TodoList = ({todos, handleToggle, handleDelete}) => {
    return (
        <ul className="list-group list-group-flush">
           {
                todos.map((todo, i) => (
                    <TodoListoItem
                        key={todo.id}
                        i={i} 
                        todo={todo} 
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </ul>
    )
}

export default TodoList
