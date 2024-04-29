import { useEffect, useRef, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoHeader from '../components/TodoHeader'
import TodoList from '../components/TodoList'

function Todo() {
    const [isLoding, setIsLoding] = useState(false)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then((res) => res.json())
            .then((res) => {
                setTodos(res.todos)
                setIsLoding(true)
            })
    }, [])

    let lastId = useRef(4)

    const onInsert = (text) => {
        const updateTodos = todos.concat({
            id: lastId.current,
            text,
            checked: false,
        })

        setTodos(updateTodos)
        lastId.current++
    }

    const onDelete = (id) => {
        const updateTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updateTodos)
    }

    const onToggle = (id) => {
        // 반환 할때 {} 생략시 리턴
        const updateTodos = todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))
        setTodos(updateTodos)
    }

    if (!isLoding) {
        return <>Loding...</>
    }

    if (todos) {
        return (
            <>
                <TodoHeader />
                <TodoForm onInsert={onInsert} />
                <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
            </>
        )
    }
}

export default Todo
