import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState(['할일', '할일', '할일'])

    const onInsert = (text) => {
        setTodos([...todos, text])
    }

    return (
        <>
            <TodoHeader />
            <TodoForm onInsert={onInsert} />
            <TodoList todos={todos} />
        </>
    )
}

export default App
