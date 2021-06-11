import { useState, useEffect } from 'react'
import styles from './Listtodos.module.css'


const Listtodos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            setTodos(todos)
        })

    }, [todos])

    return <ul>
        {todos && todos.map(todo => {
            return <li>{todo.title}</li>
        })}
    </ul>
}

export default Listtodos