import { useEffect, useState } from 'react'

function TodoRandom() {
    const [isLoding, setIsLoding] = useState(false)
    const [todo, setTodo] = useState({})

    useEffect(() => {
        fetch('https://dummyjson.com/todos/random')
            .then((res) => res.json())
            .then((res) => {
                setTodo(res)
                setIsLoding(true)
            })
    }, [])

    if (!isLoding) {
        return <>Loding...</>
    }

    if (todo) {
        return (
            <>
                <ul>
                    <li>id: {todo.id}</li>
                    <li>todo: {todo.todo}</li>
                    <li>completed : {todo.completed ? 'true' : 'false'}</li>
                </ul>
            </>
        )
    }
}

export default TodoRandom
