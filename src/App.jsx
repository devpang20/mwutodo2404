import { useRef, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: '할일' },
        { id: 2, text: '할일' },
        { id: 3, text: '할일' },
    ])

    let lastId = useRef(4)

    const onInsert = (text) => {
        const updateTodos = todos.concat({
            id: lastId.current,
            text,
        })

        setTodos(updateTodos)
        lastId.current++
    }

    const onDelete = (id) => {
        const updateTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updateTodos)
    }

    return (
        <>
            <TodoHeader />
            <TodoForm onInsert={onInsert} />
            <TodoList todos={todos} onDelete={onDelete} />
        </>
    )
}

export default App
