import React from'react';
import {TodoItem} from './TodoItem';

export function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className="list">
        {todos.length === 0 && <p>No items in your list</p>}
        {todos.map((todo) => {
            return <TodoItem {...todo} key={todo.id}  toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        })}
        </ul>
    )
}