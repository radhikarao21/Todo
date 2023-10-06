import React, { useState } from 'react';
import styles from './Todo.module.css';


interface item {
    id: number,
    text: string,
    completed: boolean
}

export const Todo: React.FC = () => {
    const [todoList, setTodoLists] = useState<item[]>([
        { id: 1, text: "Learn Typecript", completed: false }
    ]);
    const [input, setInput] = useState<string>("");
    // console.log(todoList);
    const handleCompleted = (id: number) => {

        setTodoLists(
            todoList.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })
        )
    }

    const handleClick = () => {
        const newTodo: item = { id: Date.now(), text: input, completed: false }
        setTodoLists([...todoList, newTodo])
    }
    return (
        <div className={styles['main-container']}>
            <h2>Todo List</h2>
            <input type='text' placeholder='Add Todo Item' onChange={(e) => setInput(e.currentTarget.value)} />
            <button onClick={handleClick}>Add</button>
            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id} onClick={() => handleCompleted(todo.id)} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</li>
                ))}
            </ul>
        </div>
    )
}
